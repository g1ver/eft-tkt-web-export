import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
};

export default nextConfig;
