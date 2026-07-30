import Link from "next/link";
import { content } from "@/lib/content";

const thanks = content.thankYou.aiCeoSips;

/**
 * Post-submission confirmation, reached by a redirect configured on the GHL form itself.
 *
 * SIZING IS THE CONSTRAINT. The form lives in an iframe inside the booking modal, so GHL's
 * redirect navigates that iframe rather than the browser: this page renders at about 694x640 on
 * desktop and 345x640 on a phone. The modal sets scrolling="no" on that iframe, so anything
 * taller than 640px is CLIPPED with no scrollbar to recover it.
 *
 * Everything below is therefore built to fit inside 640px of height at the narrowest width -
 * compact type, tight spacing, no decorative blocks. Verify in a 345x640 frame before adding to
 * it. The design matches the Sips page's neo-brutalist treatment because that is the modal it
 * appears inside.
 */
export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
            <div className="w-full max-w-xl bg-white border-[3px] border-[var(--secondary)] shadow-[8px_8px_0px_0px_var(--secondary)] p-6 sm:p-8 text-center">
                <div
                    className="w-12 h-12 mx-auto mb-5 bg-[var(--primary)] border-[3px] border-[var(--secondary)] flex items-center justify-center"
                    aria-hidden="true"
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)] mb-3">
                    {thanks.eyebrow}
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight leading-tight text-[var(--secondary)] mb-4 text-balance">
                    {thanks.h1}
                </h1>

                <p className="text-sm sm:text-base leading-relaxed text-[var(--secondary)] mb-5 text-balance">
                    {thanks.body}
                </p>

                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--secondary)] border-y-[2px] border-[var(--secondary)] py-3 mb-5 text-balance">
                    {thanks.eventLine}
                </p>

                <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed mb-6 text-balance">
                    {thanks.microcopy}
                </p>

                {/*
                    target="_top" breaks out of the modal iframe. Without it the site would load
                    inside the 694px frame, trapping the visitor in a miniature browser.
                */}
                <Link
                    href={thanks.backHref}
                    target="_top"
                    className="inline-block px-6 py-3 bg-[var(--primary)] text-white font-bold font-heading uppercase tracking-wide text-xs sm:text-sm border-[3px] border-[var(--secondary)] shadow-[4px_4px_0px_0px_var(--secondary)] hover:shadow-[2px_2px_0px_0px_var(--secondary)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
                    {thanks.backLabel}
                </Link>
            </div>
        </main>
    );
}
