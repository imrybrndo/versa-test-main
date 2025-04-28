import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["uhhkwrmkhmvddoiuwmep.supabase.co"],
  },
};

export default nextConfig;
