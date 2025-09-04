import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();

  const portalId =  process.env.PORTALID;
  const formGuid =   process.env.FORMGUID;
  const hubspotPrivateAppToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN; // Get from environment variables

  if (!hubspotPrivateAppToken) {
    return NextResponse.json({ message: "HubSpot Private App Token not configured." }, { status: 500 });
  }

  const fields: { name: string; value: string }[] = [];
  const fileFields: { name: string; file: File }[] = [];

  // Extract fields and files from formData
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      fileFields.push({ name: key, file: value });
    } else if (key !== "portalId" && key !== "formGuid") {
      fields.push({ name: key, value: value as string });
    }
  }

  // Map specific fields to HubSpot property names
  const mappedFields: { name: string; value: string }[] = [
    { name: "email", value: fields.find(f => f.name === "email")?.value || "" },
    { name: "fullname", value: fields.find(f => f.name === "fullname")?.value || "" },
    { name: "phone", value: fields.find(f => f.name === "phone")?.value || "" },
    { name: "linkedinbio", value: fields.find(f => f.name === "linkedin")?.value || "" },
    { name: "github_profile_url", value: fields.find(f => f.name === "github")?.value || "" },
    { name: "portfolio", value: fields.find(f => f.name === "portfolio")?.value || "" },
    { name: "howHearAboutUs", value: fields.find(f => f.name === "howHearAboutUs")?.value || "" },
    { name: "whyLookingForJob", value: fields.find(f => f.name === "whyLookingForJob")?.value || "" },
    { name: "career", value: fields.find(f => f.name === "career")?.value || "" },
    // { name: "sex", value: fields.find(f => f.name === "gender")?.value || "" },
    // { name: "race", value: fields.find(f => f.name === "race")?.value || "" },
    // { name: "veteran_status", value: fields.find(f => f.name === "veteran")?.value || "" },
    // { name: "disability_status", value: fields.find(f => f.name === "disability")?.value || "" },
  ];

  console.log(mappedFields,fields)

  // Upload files to HubSpot Files API
  for (const fileField of fileFields) {
    const fileFormData = new FormData();
    fileFormData.append("file", fileField.file);
    fileFormData.append("folderPath", "/uploads"); // You can customize the folder path
    fileFormData.append("options", JSON.stringify({ access: "PUBLIC_INDEXABLE" }));

    try {
      const response = await fetch(
        `https://api.hubspot.com/files/v3/files`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${hubspotPrivateAppToken}`,
          },
          body: fileFormData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        mappedFields.push({ name: fileField.name, value: data.url });
      } else {
        console.error(`Error uploading file ${fileField.name}:`, data);
        return NextResponse.json({ message: `Failed to upload file: ${fileField.name}` }, { status: response.status });
      }
    } catch (error) {
      console.error(`Error uploading file ${fileField.name}:`, error);
      return NextResponse.json({ message: `Failed to upload file: ${fileField.name}` }, { status: 500 });
    }
  }

  // Submit form data to HubSpot Forms API
  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: mappedFields }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      console.error('Error submitting form to HubSpot:', data);
      return NextResponse.json({ message: "Failed to submit form to HubSpot" }, { status: response.status });
    }
  } catch (error) {
    console.error('Error submitting form to HubSpot:', error);
    return NextResponse.json({ message: "Failed to submit form to HubSpot" }, { status: 500 });
  }
}
