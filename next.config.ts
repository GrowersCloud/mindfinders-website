import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/ceo-sips-and-smoothies/:path*',
        destination: '/programs/ceo-sips-and-smoothies/:path*',
        permanent: true,
      },
      {
        source: '/ai-executive-roundtable/:path*',
        destination: '/programs/ai-executive-roundtable/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
