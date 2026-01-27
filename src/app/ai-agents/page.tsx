import Link from "next/link";
import PageShell from "@/components/PageShell";
import { content } from "@/lib/content";

export default function AiAgentsPage() {
    const { aiAgents } = content;

    return (
        <PageShell title={aiAgents.hero.h1} subtitle={aiAgents.hero.subheadline}>
            <div className="space-y-20 max-w-4xl mx-auto">

                {aiAgents.agents.map((agent) => (
                    <section key={agent.id} id={agent.id} className="scroll-mt-32 p-8 bg-white rounded-lg shadow-[var(--shadow-natural)] border-[1px] border-[var(--border)] border-opacity-20 hover:shadow-[var(--shadow-deep)] transition-shadow">
                        <h2 className="text-[length:var(--h2-size)] font-bold mb-6 text-[var(--primary)] font-heading">
                            {agent.title}
                        </h2>

                        {agent.h3 && (
                            <h3 className="text-[length:var(--h3-size)] font-semibold mb-4 text-[var(--secondary)] font-heading">
                                {agent.h3}
                            </h3>
                        )}

                        <div className="space-y-4 text-[length:var(--body-size)] leading-relaxed text-[var(--secondary)]">
                            {Array.isArray(agent.body) ? (
                                agent.body.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))
                            ) : (
                                <p>{agent.body}</p>
                            )}
                        </div>

                        <div className="mt-8">
                            <Link
                                href="/get-started"
                                className="inline-block border border-[var(--primary)] text-[var(--primary)] px-6 py-2 rounded font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
                            >
                                Book Demo
                            </Link>
                        </div>
                    </section>
                ))}

                <div className="bg-[var(--accent)] text-white p-12 rounded-lg text-center">
                    <p className="text-xl leading-relaxed mb-8">
                        {aiAgents.finalSection}
                    </p>
                    <Link
                        href="/get-started"
                        className="bg-[var(--primary)] text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[var(--primary)] transition-colors"
                    >
                        Assess Your Readiness
                    </Link>
                </div>

            </div>
        </PageShell>
    );
}
