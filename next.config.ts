import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- AI CEO Sips ---------------------------------------------------------------
      // This route has moved twice: /ceo-sips-and-smoothies -> /programs/ceo-sips-and-smoothies
      // -> /programs/ai-ceo-sips-and-growth-executive-reception (matching GrowersCloud, which
      // is the source of truth for this page). Both older paths have live traffic - GHL
      // campaigns, emails, anything already sent to a CEO - so both must keep landing.
      //
      // ORDER MATTERS. The retired /reservation route is listed first, under every slug it
      // has ever had. Next.js takes the first match, so if the slug rules came first their
      // :path* wildcards would swallow /reservation and forward it to a 404.

      // Retired: registration is now a modal on the page itself. 307 rather than 308, matching
      // GrowersCloud's treatment of its equivalent route - the decision to retire it is
      // reversible, and a cached permanent redirect is not.
      {
        source: '/ceo-sips-and-smoothies/reservation',
        destination: '/',
        permanent: false,
      },
      {
        source: '/programs/ceo-sips-and-smoothies/reservation',
        destination: '/',
        permanent: false,
      },
      {
        source: '/programs/ai-ceo-sips-and-growth-executive-reception/reservation',
        destination: '/',
        permanent: false,
      },

      // Slug moves. Both old paths go straight to the current slug rather than chaining
      // through each other, so no visitor pays for two round trips.
      {
        source: '/ceo-sips-and-smoothies/:path*',
        destination: '/programs/ai-ceo-sips-and-growth-executive-reception/:path*',
        permanent: true,
      },
      {
        source: '/programs/ceo-sips-and-smoothies/:path*',
        destination: '/programs/ai-ceo-sips-and-growth-executive-reception/:path*',
        permanent: true,
      },

      // --- AI Executive Roundtable ---------------------------------------------------
      {
        source: '/ai-executive-roundtable/:path*',
        destination: '/programs/ai-executive-roundtable/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
