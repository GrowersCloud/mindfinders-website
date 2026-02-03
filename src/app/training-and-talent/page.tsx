import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { content } from "@/lib/content";

export const metadata: Metadata = {
    title: "AI Talent & Upskilling Programs",
    description: "Prepare your human workforce for the AI era. We provide specialized training and place top-tier talent to work alongside your new AI teammates.",
};

export default function TrainingAndTalentPage() {
    const { trainingAndTalent } = content;

    return (
        <PageShell title={trainingAndTalent.hero.h1} subtitle={trainingAndTalent.hero.subheadline}>
            <div className="space-y-24">

                {/* Intro */}
                <section className="container-standard">
                    <div className="space-y-6 text-[length:var(--body-size)] leading-relaxed">
                        {trainingAndTalent.intro.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </section>

                {/* Upskilling */}
                <section className="bg-gray-50 -mx-4 px-4 py-16 rounded-lg">
                    <div className="container-standard">
                        <h2 className="text-[length:var(--h2-size)] font-bold mb-8 text-[var(--secondary)] font-heading">
                            {trainingAndTalent.upskilling.h2}
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            {trainingAndTalent.upskilling.body}
                        </p>

                        <div className="bg-white p-8 rounded shadow-sm border-l-4 border-[var(--primary)]">
                            <h3 className="font-bold text-lg mb-4 text-[var(--primary)] uppercase tracking-wide">
                                {trainingAndTalent.upskilling.philosophy.title}
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                {trainingAndTalent.upskilling.philosophy.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Programs */}
                <section className="container-standard">
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-12 text-center text-[var(--secondary)] font-heading">
                        {trainingAndTalent.programs.h2}
                    </h2>
                    <div className="grid gap-8">
                        {trainingAndTalent.programs.groups.map((group, i) => (
                            <div key={i} className="border border-gray-200 rounded p-6 hover:border-[var(--primary)] transition-colors">
                                <h3 className="font-bold text-[var(--primary)] mb-4 text-xl">
                                    {group.title}
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-sm">
                                    {group.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Continuous Learning */}
                <section className="bg-[var(--accent)] text-white -mx-4 px-4 py-16 text-center">
                    <div className="container-standard">
                        <h2 className="text-[length:var(--h2-size)] font-bold mb-6 font-heading">
                            {trainingAndTalent.continuousLearning.h2}
                        </h2>
                        <p className="mb-6 leading-relaxed opacity-90">
                            {trainingAndTalent.continuousLearning.body}
                        </p>
                        <p className="font-serif italic text-xl text-[var(--primary)]">
                            {trainingAndTalent.continuousLearning.result}
                        </p>
                    </div>
                </section>

                {/* Talent Ecosystem */}
                <section className="container-standard">
                    <h2 className="text-[length:var(--h2-size)] font-bold mb-8 text-[var(--secondary)] font-heading">
                        {trainingAndTalent.talentEcosystem.h2}
                    </h2>
                    <p className="mb-12 leading-relaxed">
                        {trainingAndTalent.talentEcosystem.body}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="font-bold mb-4 text-[var(--accent)] uppercase text-sm tracking-wider">
                                {trainingAndTalent.talentEcosystem.differenceTitle}
                            </h3>
                            <ul className="list-disc pl-5 space-y-3">
                                {trainingAndTalent.talentEcosystem.differenceBullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-[var(--accent)] uppercase text-sm tracking-wider">
                                {trainingAndTalent.talentEcosystem.categoriesTitle}
                            </h3>
                            <ul className="list-disc pl-5 space-y-3">
                                {trainingAndTalent.talentEcosystem.categories.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded border border-gray-100">
                        <h3 className="font-bold text-[var(--primary)] mb-4 text-lg">
                            {trainingAndTalent.talentEcosystem.rapidDeployment.title}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed">
                            {trainingAndTalent.talentEcosystem.rapidDeployment.text}
                        </p>
                        <p className="font-medium italic text-gray-700">
                            {trainingAndTalent.talentEcosystem.rapidDeployment.result}
                        </p>
                    </div>
                </section>

                <div className="text-center pb-12">
                    <Link
                        href="/get-started"
                        className="bg-[var(--primary)] text-white px-8 py-3 rounded font-bold hover:bg-[var(--accent)] transition-colors inline-block"
                    >
                        Transform Your Workforce
                    </Link>
                </div>

            </div>
        </PageShell>
    );
}
