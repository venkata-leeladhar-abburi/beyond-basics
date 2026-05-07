import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      }
    ],
  },
  // Optimize production build
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
