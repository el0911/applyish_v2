import { LightsailClient, CreateInstancesFromSnapshotCommand, GetInstanceCommand, StopInstanceCommand, DeleteInstanceCommand } from "@aws-sdk/client-lightsail";
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
  s3Identifier: string; // From user_data.get('s3Identifier', '')
  jobLink: string;     // From user_data.get('jobLink', '')
  instanceName: string; // The generated instance name
  process_id: string; // The process id to associate with the instance
}

// Helper function to wait for a specified duration
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const createAwsInstanceForCoachClients = async ({
  s3Identifier,
  jobLink,
  instanceName,
  process_id
}: CreateLightsailInstanceParams) => {

  const lightsailClient = new LightsailClient({
    region: process.env.AWS_REGION || "us-east-1", // Default to us-east-1 if not set
  });

  const snapshotName = process.env.LIGHTSAIL_SNAPSHOT_NAME;
  const availabilityZone = process.env.AWS_REGION + 'c'; // Default AZ
  const bundleId = process.env.LIGHTSAIL_BUNDLE_ID; // e.g., 'nano_2_0'

  if (!snapshotName || !bundleId) {
    console.error("Missing LIGHTSAIL_SNAPSHOT_NAME or LIGHTSAIL_BUNDLE_ID environment variables.");
    throw new Error("Lightsail configuration missing.");
  }

  const dataDictEncoded = encodeJwt({ s3_identifier: s3Identifier, jobLink: jobLink });
  const instanceNameEncoded = encodeJwt({ instance_name: instanceName, process_id });
  // SESSION_FOLDER_PATH is the path am saving the user sessions to
  const SESSION_FOLDER_PATH = `${s3Identifier}`;
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


echo  "USER_DATA"=${dataDictEncoded} >> /home/ec2-user/applyish_automation/.env
echo  "API_AUTH_HEADER"=${instanceNameEncoded} >> /home/ec2-user/applyish_automation/.env
echo  "API_URL"=${'https://d48fbf2fdc12.ngrok-free.app/api'} >> /home/ec2-user/applyish_automation/.env
echo  "SESSION_FOLDER_PATH"=${SESSION_FOLDER_PATH} >> /home/ec2-user/applyish_automation/.env
echo  "BETTERSTACK_TOKEN"=${process.env.BETTERSTACK_TOKEN || ''} >> /home/ec2-user/applyish_automation/.env
echo  "INSTANCE_NAME"=${instanceName} >> /home/ec2-user/applyish_automation/.env
echo  "S3_AWS_ACCESS_KEY_ID"=${process.env.S3_AWS_ACCESS_KEY_ID || ''} >> /home/ec2-user/applyish_automation/.env
echo  "S3_AWS_SECRET_ACCESS_KEY"=${process.env.S3_AWS_SECRET_ACCESS_KEY || ''} >> /home/ec2-user/applyish_automation/.env

# Create session folder if it doesn't exist


export API_URL="${process.env.NEXT_PUBLIC_API_URL || "https://213784971ac8.ngrok-free.app/api"}"
export API_AUTH_HEADER="${instanceNameEncoded}"


export SESSION_FOLDER_PATH="${SESSION_FOLDER_PATH}"

export INSTANCE_NAME="${instanceName}"

export PATH=$PATH:/home/ec2-user/.local/bin

export BETTERSTACK_TOKEN="${process.env.BETTERSTACK_TOKEN || ''}"
echo "Environment variables set successfully" >> /tmp/userdata.log 2>&1

echo "Moving to the applyish_automation directory..." >> /tmp/userdata.log 2>&1
cd /home/ec2-user/applyish_automation

echo "Building Docker Compose..." >> /tmp/userdata.log 2>&1
docker compose up --detach --no-build >> /tmp/userdata.log 2>&1

echo "userData script finished" >> /tmp/userdata.log 2>&1
`;

  const createInstanceCommand = new CreateInstancesFromSnapshotCommand({
    instanceNames: [instanceName],
    availabilityZone: availabilityZone,
    instanceSnapshotName: snapshotName,
    bundleId: bundleId,
    userData: userDataScript,
  });

  try {
    console.log(`Creating Lightsail instance '${instanceName}' for client '${s3Identifier}'...`);
    const response = await lightsailClient.send(createInstanceCommand);
    console.log(`Lightsail instance creation initiated:`, response);

    // Polling to get instance details and public IP
    let instanceDetails;
    let publicIpAddress = null;
    const maxAttempts = 20; // Max 20 attempts, 10 seconds each = 200 seconds (approx 3.3 minutes)
    let attempts = 0;

    while (attempts < maxAttempts && !publicIpAddress) {
      attempts++;

      try {
        const getInstanceCommand = new GetInstanceCommand({ instanceName: instanceName });
        const getInstanceResponse = await lightsailClient.send(getInstanceCommand);
        instanceDetails = getInstanceResponse.instance;

        if (instanceDetails) {
          console.log(`Fetched instance details for '${instanceName}':`, instanceDetails.publicIpAddress);
          publicIpAddress = instanceDetails.publicIpAddress;
        }
        if (instanceDetails && instanceDetails.state && instanceDetails.state.name === 'running') {
          publicIpAddress = instanceDetails.publicIpAddress;
          console.log(`Instance '${instanceName}' is running. Public IP: ${publicIpAddress}`);
        } else {
          console.log(`Instance '${instanceName}' state: ${instanceDetails?.state?.name || 'unknown'}. Attempt ${attempts}/${maxAttempts}`);
        }
      } catch (getInstanceError: any) {
        if (getInstanceError.name === 'NotFoundException') {
          console.log(`Instance '${instanceName}' not yet found. Attempt ${attempts}/${maxAttempts}`);
        } else {
          console.error(`Error getting instance details for '${instanceName}':`, getInstanceError);
        }
        await sleep(5000); // Wait for 10 seconds
      }
    }

    if (!publicIpAddress) {
      throw new Error(`Failed to get public IP for instance '${instanceName}' after ${maxAttempts} attempts.`);
    }

    return { ...response, publicIpAddress }; // Return original response plus public IP
  } catch (error) {
    console.error(`Error creating or getting details for Lightsail instance '${instanceName}':`, error);
    throw error;
  }
};


export const shutDownLightsailInstance = async (instanceName: string, deleteInstance: boolean = true) => {
  const lightsailClient = new LightsailClient({
    region: process.env.AWS_REGION || "us-east-1",
  });

  try {
    console.log(`Shutting down Lightsail instance '${instanceName}'...`);

    if (deleteInstance) {
      // Permanently delete the instance
      const deleteCommand = new DeleteInstanceCommand({
        instanceName: instanceName,
      });
      await lightsailClient.send(deleteCommand);
      console.log(`Instance '${instanceName}' deleted successfully.`);
    } else {
      // Just stop the instance (can be restarted later)
      const stopCommand = new StopInstanceCommand({
        instanceName: instanceName,
      });
      await lightsailClient.send(stopCommand);
      console.log(`Instance '${instanceName}' stopped successfully.`);
    }

    return true;
  } catch (error) {
    console.error(`Error shutting down Lightsail instance '${instanceName}':`, error);
    throw error;
  }
};