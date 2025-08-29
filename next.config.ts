import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
