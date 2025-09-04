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
        fields.push({ name: fileField.name, value: data.url });
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
        body: JSON.stringify({ fields }),
      }
    );

    console.log({fields})
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
