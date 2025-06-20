// components/Seo.tsx
import Head from 'next/head';
// import image_favicon from "../app/favicon.ico"; // Adjust the path as necessary
interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Seo({
  title = 'Applyish – We Apply to Jobs For You',
  description = 'Applyish is your job-hunting agent. We apply to jobs on your behalf, so you can focus on interviews — not filling out forms.',
  url = 'https://applyish.com',
//   image = 'https://www.applyish.com/og-image.jpg'
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={'https://www.applyish.com/favicon.ico'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={'https://www.applyish.com/favicon.ico'} />
      <meta name="twitter:site" content="@applyish" />
    </Head>
  );
}
