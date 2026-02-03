import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import FAQAccordion from "@/components/FAQAccordion";
import { content } from "@/lib/content";

export const metadata: Metadata = {
    title: "FAQ - AI Implementation & Strategy",
    description: "Common questions about deploying AI workers, integrating AI, and our strategic advisory services.",
};

export default function FAQPage() {
    const { faq } = content;

    return (
        <PageShell title={faq.h1}>
            <div className="container-standard">
                <FAQAccordion items={faq.items} />

                <div className="mt-16 text-center bg-gray-50 p-8 rounded">
                    <h3 className="font-bold text-xl mb-4">Still have questions?</h3>
                    <p className="mb-6 text-gray-600">We're here to help you navigate your AI journey.</p>
                    <Link
                        href="/get-started"
                        className="inline-block bg-[var(--secondary)] text-white px-6 py-2 rounded hover:bg-[var(--primary)] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </PageShell>
    );
}
