import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The reservation sub-route is retired: registration is now a modal on the Sips page
      // itself. 307 (not 308) to match GrowersCloud's treatment of its equivalent route.
      {
        source: '/programs/ceo-sips-and-smoothies/reservation',
        destination: '/',
        permanent: false,
      },
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
