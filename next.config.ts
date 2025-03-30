import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_PROXY_DOMAIN || '',
      },
    ],
  },
};

export default nextConfig;
