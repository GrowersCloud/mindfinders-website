import type { Metadata } from "next";

// Confirmation page shown after a GHL form is submitted.
//
// noindex because it is thin content that should never surface in search, and because a visitor
// arriving here cold has skipped the form. It carries no unique value to rank.
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
    return (
        <>
            {/*
                This page is the redirect target of a GHL form that lives inside an iframe, so it
                renders inside the booking modal at roughly 694x640. The site header, top bar and
                footer would render in there too, producing a miniature website inside the modal.

                A child layout cannot remove the root layout in the App Router, so the chrome is
                hidden with CSS instead. Server-rendered, so there is no flash of visible chrome
                before it disappears. The components carry a data-site-chrome attribute purely as
                a stable hook - structural selectors like `body > header` would break the first
                time someone reorders the layout.

                Hidden for direct visits too, which is deliberate: a confirmation page with fewer
                exits is better anyway, and the page carries its own link back to the site.
            */}
            <style>{`[data-site-chrome] { display: none !important; }`}</style>
            {children}
        </>
    );
}
