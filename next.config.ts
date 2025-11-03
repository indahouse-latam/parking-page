import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/indahouse-property-images-qa/**',
      },
    ],
  },
};

export default nextConfig;
