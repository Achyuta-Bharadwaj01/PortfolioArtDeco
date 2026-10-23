import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unavatar.io",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "shaineela-media.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "admin.shaineela.com",
      },
    ],
  },
};

export default nextConfig;
