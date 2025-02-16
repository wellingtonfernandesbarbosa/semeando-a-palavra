import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'evangelhos.com',
      },
      {
        protocol: 'https',
        hostname: 'rede.comuna.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.eusemfronteiras.com.br',
      },
      {
        protocol: 'https',
        hostname: 'f.i.uol.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.wgospel.com',
      },
    ],
  },
};

export default nextConfig;
