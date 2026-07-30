import type { Metadata } from "next";

// This layout exists only to host route-level metadata. The page itself is a Client
// Component, so Next.js does not allow `export const metadata` on it directly.
//
// SEO posture for this page: all search equity goes to GrowersCloud. The page is a port
// of growerscloud.ai/programs/ai-ceo-sips-and-growth-executive-reception and exists here
// as a partner-branded copy, so it is noindexed and canonicalised to the original.
//
// Three things this route must NOT do:
//   1. Emit Event JSON-LD. Only GrowersCloud publishes it. Two sites emitting conflicting
//      Event schema for the same August 6 event at the same venue can damage the page we
//      actually want ranking.
//   2. Appear in a sitemap.
//   3. Get a Disallow in robots.txt. Tempting, but if Google cannot crawl the page it
//      cannot read the noindex, and the URL can sit in the index indefinitely with no
//      snippet. Crawling must stay allowed so the noindex is actually seen.
export const metadata: Metadata = {
    title: "AI CEO Sips & Growth Executive Reception",
    description:
        "An invitation-only evening to forge CEO-to-CEO strategic partnerships and demo two AI tools live. For 15 CEOs of $3M-$1B companies.",
    robots: { index: false, follow: false },
    alternates: {
        canonical:
            "https://growerscloud.ai/programs/ai-ceo-sips-and-growth-executive-reception",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
