import { content } from "@/lib/content";
import PageShell from "@/components/PageShell";

export default function AboutPage() {
    const { about } = content;

    return (
        <PageShell title={about.hero.h1}>
            <div className="space-y-20 container-standard">

                {/* Overview */}
                <section className="space-y-6 text-[length:var(--body-size)] leading-relaxed">
                    {about.overview.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </section>

                {/* Approach */}
                <section className="bg-gray-50 p-8 rounded-lg border-l-4 border-[var(--primary)] space-y-6">
                    {about.approach.map((p, i) => (
                        <p key={i} className="text-gray-700 italic">{p}</p>
                    ))}
                </section>

                {/* Deliver */}
                <section>
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-8 text-[var(--secondary)] font-heading text-center">
                        {about.deliver.title}
                    </h2>
                    <div className="space-y-12">
                        {about.deliver.sections.map((section, i) => (
                            <div key={i}>
                                <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                    {section.title}
                                </h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    {section.bullets.map((b, j) => (
                                        <li key={j} className="text-[length:var(--body-size)]">{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 bg-[var(--accent)] text-white p-6 rounded text-center">
                        <p className="font-medium">{about.deliver.close}</p>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-gray-100">
                    <p className="text-2xl font-serif italic text-[var(--primary)]">
                        {about.tagline}
                    </p>
                </div>

            </div>
        </PageShell>
    );
}
