import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['driver-worker.comrade-zhukov.workers.dev'],
  },
};

export default nextConfig;
