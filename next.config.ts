import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net",
      "upload.wikimedia.org",
      "flagcdn.com",
      "res.cloudinary.com",
      "i.ibb.co"
    ],
  },
};

export default nextConfig;
