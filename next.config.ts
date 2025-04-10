import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.shopclues.com',
      port: '',
      pathname: '/**',
      search: '',
    },
    {
      protocol: 'https',
      hostname: 'hips.hearstapps.com',
      port: '',
      pathname: '/**',
      search: '',
    }]
  }
}

export default nextConfig;
