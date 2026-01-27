import PageShell from "@/components/PageShell";
import { content } from "@/lib/content";

export default function ServicesPage() {
    const { services } = content as any;

    return (
        <PageShell title={services.hero.h1} subtitle={services.hero.subheadline}>
            <div className="space-y-24">

                {/* AI Solutions */}
                <section>
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-12 text-[var(--secondary)] font-heading border-b border-gray-200 pb-4">
                        {services.columns[0].title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Manual mapping to ensure IDs */}
                        <div id="voice-ai" className="scroll-mt-32">
                            <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                {services.columns[0].items[0].title}
                            </h3>
                            <p className="text-[var(--secondary)] leading-relaxed">
                                {services.columns[0].items[0].text}
                            </p>
                        </div>
                        <div id="smart-automations" className="scroll-mt-32">
                            <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                {services.columns[0].items[1].title}
                            </h3>
                            <p className="text-[var(--secondary)] leading-relaxed">
                                {services.columns[0].items[1].text}
                            </p>
                        </div>
                        <div id="funnel-optimization" className="scroll-mt-32">
                            <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                {services.columns[0].items[2].title}
                            </h3>
                            <p className="text-[var(--secondary)] leading-relaxed">
                                {services.columns[0].items[2].text}
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI-Enabled Workforce Solutions */}
                <section>
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-12 text-[var(--secondary)] font-heading border-b border-gray-200 pb-4">
                        {services.columns[1].title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div id="workforce-optimization" className="scroll-mt-32">
                            <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                {services.columns[1].items[0].title}
                            </h3>
                            <ul className="space-y-2">
                                {(services.columns[1].items[0].text as string[]).map((line: string, i: number) => (
                                    <li key={i} className="text-[var(--secondary)] leading-relaxed">{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div id="executive-advisory" className="scroll-mt-32">
                            <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                {services.columns[1].items[1].title}
                            </h3>
                            <ul className="space-y-2">
                                {(services.columns[1].items[1].text as string[]).map((line: string, i: number) => (
                                    <li key={i} className="text-[var(--secondary)] leading-relaxed">{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div id="change-management" className="scroll-mt-32">
                            <h3 className="text-[length:var(--h3-size)] font-bold mb-4 text-[var(--primary)] font-heading">
                                {services.columns[1].items[2].title}
                            </h3>
                            <ul className="space-y-2">
                                {(services.columns[1].items[2].text as string[]).map((line: string, i: number) => (
                                    <li key={i} className="text-[var(--secondary)] leading-relaxed">{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Human Capital Management */}
                <section id="hcm" className="scroll-mt-32 bg-gray-50 -mx-4 px-4 py-12 rounded-lg">
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-8 text-[var(--secondary)] font-heading">
                        {services.columns[2].title}
                    </h2>
                    <div className="space-y-6 text-[length:var(--body-size)] leading-relaxed mb-12 max-w-4xl">
                        {(services.columns[2].intro as string[]).map((p: string, i: number) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    <div id="talent-ecosystem" className="bg-white p-8 rounded shadow-sm scroll-mt-32">
                        <h3 className="text-[length:var(--h3-size)] font-bold mb-6 text-[var(--primary)] font-heading">
                            {services.columns[2].subsection.title}
                        </h3>
                        <p className="mb-8 leading-relaxed">{services.columns[2].subsection.text}</p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-[var(--accent)]">
                                    {services.columns[2].subsection.listTitle}
                                </h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {services.columns[2].subsection.list?.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-[var(--accent)]">
                                    {services.columns[2].subsection.categoriesTitle}
                                </h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {services.columns[2].subsection.categories?.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-[var(--primary)] mb-2">{services.columns[2].subsection.rapidDeployment?.title}</h4>
                            <p className="text-sm text-[var(--text-muted)] italic">{services.columns[2].subsection.rapidDeployment?.result}</p>
                        </div>
                    </div>
                </section>

            </div>

            <div className="mt-24 text-center">
                <p className="text-2xl font-serif italic text-[var(--primary)]">
                    {services.tagline}
                </p>
            </div>
        </PageShell>
    );
}
