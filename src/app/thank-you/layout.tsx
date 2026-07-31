import type { Metadata } from "next";

// Shared metadata for post-submission confirmation pages.
//
// EVERY FORM GETS ITS OWN PAGE - one child route per form, e.g. /thank-you/ai-ceo-sips. Do not
// add a page at /thank-you itself and do not point two forms at the same URL. The copy on these
// pages names a specific event (date, venue, what happens next), so a shared page would show the
// wrong details to half the people who reach it. A new form means a new sibling route here plus
// a new key under `thankYou` in content.ts.
//
// These are full pages with the normal site header and footer. GHL's redirect navigates the TOP
// window, not the iframe the form sits in, so a visitor lands here having left the booking modal
// behind. Confirmed by testing a real submission - note that reading form_embed.js is not enough
// to tell you this, because that is only the parent-side script; the widget page inside the
// iframe does the top-level navigation itself.
//
// noindex because these are thin content that should never surface in search, and because a
// visitor arriving cold has skipped the form. They carry no unique value to rank.
export const metadata: Metadata = {
    title: "Thank You",
    description: "Your request has been received.",
    robots: { index: false, follow: false },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
