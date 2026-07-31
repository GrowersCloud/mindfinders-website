import Link from "next/link";
import { content } from "@/lib/content";

const thanks = content.thankYou.aiCeoSips;

/**
 * Post-submission confirmation for the AI CEO Sips RSVP form.
 *
 * Reached by a redirect configured on the GHL form. That redirect navigates the TOP window, so
 * the visitor arrives here as a normal full page having left the booking modal behind, and the
 * site header and footer come from the root layout as usual.
 *
 * The design echoes the Sips page's neo-brutalist treatment, thick borders and hard offset
 * shadows, so the confirmation reads as a continuation of the page they just came from rather
 * than a generic system message.
 */
export default function AiCeoSipsThankYouPage() {
    return (
        <main className="bg-gray-50 px-4 py-16 md:py-24">
            <div className="container-standard">
                <div className="bg-white border-[3px] border-[var(--secondary)] shadow-[12px_12px_0px_0px_var(--secondary)] p-8 sm:p-12 md:p-16 text-center">
                    <div
                        className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 bg-[var(--primary)] border-[3px] border-[var(--secondary)] shadow-[6px_6px_0px_0px_var(--secondary)] flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <svg
                            className="w-8 h-8 md:w-10 md:h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--primary)] mb-5">
                        {thanks.eyebrow}
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight text-[var(--secondary)] mb-6 text-balance">
                        {thanks.h1}
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed text-[var(--secondary)] max-w-xl mx-auto mb-10 text-balance">
                        {thanks.body}
                    </p>

                    <p className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-[var(--secondary)] border-y-[3px] border-[var(--secondary)] py-5 mb-10 text-balance">
                        {thanks.eventLine}
                    </p>

                    <p className="text-base md:text-lg font-serif italic text-gray-600 leading-relaxed max-w-lg mx-auto mb-12 text-balance">
                        {thanks.microcopy}
                    </p>

                    <Link
                        href={thanks.backHref}
                        className="inline-block w-full sm:w-auto px-10 py-4 bg-[var(--primary)] text-white font-bold font-heading uppercase tracking-wide text-sm md:text-base border-[3px] border-[var(--secondary)] shadow-[6px_6px_0px_0px_var(--secondary)] hover:shadow-[3px_3px_0px_0px_var(--secondary)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                    >
                        {thanks.backLabel}
                    </Link>
                </div>
            </div>
        </main>
    );
}
