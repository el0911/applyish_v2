// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Applyish – We Apply to Jobs For You</title>
      <meta name="description" content="We stress you chill" />

      {/* Open Graph */}
      <meta property="og:title" content="Applyish – We Apply to Jobs For You" />
      <meta property="og:description" content="Applyish applies to jobs for you. You relax." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://placehold.co/1200x600.png?text=applyish" />
      <meta property="og:url" content="https://www.applyish.com" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Applyish – We Apply to Jobs For You" />
      <meta name="twitter:description" content="We apply to jobs for you so you can focus on interviews." />
      <meta name="twitter:image" content="https://placehold.co/1200x600.png?text=applyish" />
    </>
  );
}
