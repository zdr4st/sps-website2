import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN IP access in development
  allowedDevOrigins: ['192.168.56.1'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
};

export default nextConfig;
