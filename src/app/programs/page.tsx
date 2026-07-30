import PageShell from "@/components/PageShell";
import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/lib/content";

export const metadata: Metadata = {
    title: "Executive Programs & Events",
    description: "Exclusive programs, executive roundtables, and events for growth-minded CEOs leveraging AI.",
};

export default function ProgramsPage() {
    const { sipsAndSmoothies, executiveRoundtable } = content as any;

    return (
        <PageShell title="Executive Programs & Events" subtitle="Exclusive gatherings for growth-minded CEOs">
            <div className="space-y-16">
                {/* Sips and Smoothies */}
                <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-4 text-[var(--secondary)] font-heading">
                        {typeof sipsAndSmoothies.hero.h1 === "string" 
                            ? sipsAndSmoothies.hero.h1 
                            : sipsAndSmoothies.hero.h1.join(" ")}
                    </h2>
                    <p className="text-[var(--secondary)] leading-relaxed mb-6">
                        {sipsAndSmoothies.hero.description}
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/programs/ai-ceo-sips-and-growth-executive-reception"
                            className="inline-block px-6 py-3 bg-[var(--primary)] text-white rounded hover:bg-opacity-90 transition-colors font-medium"
                        >
                            View Program Details
                        </Link>
                    </div>
                </section>

                {/* Executive Roundtable */}
                <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-4 text-[var(--secondary)] font-heading">
                        {typeof executiveRoundtable.hero.h1 === "string" 
                            ? executiveRoundtable.hero.h1 
                            : executiveRoundtable.hero.h1.join(" ")}
                    </h2>
                    <p className="text-[var(--secondary)] leading-relaxed mb-6">
                        {executiveRoundtable.hero.description}
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/programs/ai-executive-roundtable"
                            className="inline-block px-6 py-3 border border-[var(--primary)] text-[var(--primary)] rounded hover:bg-[var(--primary)] hover:text-white transition-colors font-medium"
                        >
                            View Program Details
                        </Link>
                    </div>
                </section>
            </div>
        </PageShell>
    );
}
