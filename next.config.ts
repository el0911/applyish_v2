import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
      "flagcdn.com"
    ],
  },
};

export default nextConfig;
