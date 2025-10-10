import { LightsailClient, CreateInstancesFromInstanceSnapshotCommand } from "@aws-sdk/client-lightsail";
import jwt from 'jsonwebtoken';

// Helper to encode data into a JWT token
const encodeJwt = (payload: object): string => {
  const secret = process.env.JWT_SECRET || 'supersecretjwtkey'; // Use a strong secret in production
  return jwt.sign(payload, secret, { expiresIn: '4h' }); // Token expires in 4 hours
};

interface UserDataPayload {
  s3Identifier: string;
  jobLink: string;
  instanceName: string;
}

interface CreateLightsailInstanceParams {
  clientUserId: string; // The ID of the user associated with the client
  s3Identifier: string; // From user_data.get('s3Identifier', '')
  jobLink: string;     // From user_data.get('jobLink', '')
  instanceName: string; // The generated instance name
}

export const createAwsInstanceForCoachClients = async ({
  clientUserId,
  s3Identifier,
  jobLink,
  instanceName,
}: CreateLightsailInstanceParams) => {
  const lightsailClient = new LightsailClient({
    region: process.env.AWS_REGION || "us-east-1", // Default to us-east-1 if not set
  });

  const snapshotName = process.env.LIGHTSAIL_SNAPSHOT_NAME;
  const availabilityZone = process.env.AWS_AVAILABILITY_ZONE || "us-east-1a"; // Default AZ
  const bundleId = process.env.LIGHTSAIL_BUNDLE_ID; // e.g., 'nano_2_0'

  if (!snapshotName || !bundleId) {
    console.error("Missing LIGHTSAIL_SNAPSHOT_NAME or LIGHTSAIL_BUNDLE_ID environment variables.");
    throw new Error("Lightsail configuration missing.");
  }

  const dataDictEncoded = encodeJwt({ s3_identifier: s3Identifier, jobLink: jobLink });
  const instanceNameEncoded = encodeJwt({ instance_name: instanceName });

  const userDataScript = `#!/bin/bash
set -ex
echo "Starting userData script" > /tmp/userdata.log 2>&1

echo "Installing dependencies..." >> /tmp/userdata.log 2>&1
if ! docker compose version &>/dev/null; then
    mkdir -p /usr/local/lib/docker/cli-plugins
    curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
    chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
fi

echo "Docker Compose installed successfully" >> /tmp/userdata.log 2>&1
echo "Setting up environment variables..." >> /tmp/userdata.log 2>&1
export USER_DATA="${dataDictEncoded}"
export JOB_LIST_LINKEDIN_URL="${jobLink}"

export GOOGLE_API_KEY="${process.env.GOOGLE_API_KEY || ''}"

export API_URL="${process.env.NEXT_PUBLIC_API_URL || "https://www.applyish.com/api"}"
export API_AUTH_HEADER="${instanceNameEncoded}"
export MAX_BEFORE_KILL="${process.env.MAX_BEFORE_KILL || 3}"

export LLM_API_KEY="${process.env.OPEN_AI_KEY || ''}"
export LLM_MODEL="${process.env.LLM_MODEL || "gpt-4o"}"

export PATH=$PATH:/home/ec2-user/.local/bin

export BETTERSTACK_TOKEN="${process.env.BETTERSTACK_TOKEN || ''}"
export USER_ID="${s3Identifier}"            
export RUN_ID="${process.env.RUN_ID || "STAGE_x"}"             
echo "Environment variables set successfully" >> /tmp/userdata.log 2>&1

echo "Moving to the applyish_automation directory..." >> /tmp/userdata.log 2>&1
cd /home/ec2-user/applyish_automation

echo "Building Docker Compose..." >> /tmp/userdata.log 2>&1
docker compose up --detach --no-build >> /tmp/userdata.log 2>&1

echo "userData script finished" >> /tmp/userdata.log 2>&1
`;

  const createInstanceCommand = new CreateInstancesFromInstanceSnapshotCommand({
    instanceNames: [instanceName],
    availabilityZone: availabilityZone,
    instanceSnapshotName: snapshotName,
    bundleId: bundleId,
    userData: userDataScript,
  });

  try {
    console.log(`Creating Lightsail instance '${instanceName}' for client '${clientUserId}'...`);
    const response = await lightsailClient.send(createInstanceCommand);
    console.log(`Lightsail instance creation initiated:`, response);
    return response;
  } catch (error) {
    console.error(`Error creating Lightsail instance '${instanceName}':`, error);
    throw error;
  }
};