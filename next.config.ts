import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable external packages for server components (moved from experimental)
  serverExternalPackages: ['@aws-amplify/adapter-nextjs'],
  // Optimize for AWS Amplify hosting
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amplifyapp.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable standalone output for better performance
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
};

export default nextConfig;
