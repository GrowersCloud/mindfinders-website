import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

import { content } from "@/lib/content";

export const metadata: Metadata = {
    title: "Start Your AI Journey",
    description: "Take the first step towards AI-led growth. Get a custom assessment and discover how AI can transform your organization.",
};

export default function GetStartedPage() {
    const { getStarted } = content;
    const { assessment, nextSteps } = getStarted;

    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/get-started-bg.png"
                        alt="Executive talking to a consultant with AI imagery"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-bold font-heading mb-6 tracking-tight leading-tight">
                        {Array.isArray(getStarted.hero.h1) ? (
                            getStarted.hero.h1.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))
                        ) : (
                            getStarted.hero.h1
                        )}
                    </h1>
                    <div className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-serif leading-relaxed">
                        {Array.isArray(getStarted.hero.subheadline) ? (
                            getStarted.hero.subheadline.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))
                        ) : (
                            <span>{getStarted.hero.subheadline}</span>
                        )}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-12 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <p className="text-2xl md:text-3xl leading-relaxed text-center max-w-4xl mx-auto font-serif text-[var(--secondary)]">
                        {getStarted.intro}
                    </p>
                </div>
            </section>

            {/* Assessment Section (High Visibility Light Theme) */}
            <section className="py-12 md:py-24 relative overflow-hidden bg-blue-50 border-y-4 border-[var(--primary)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-left bg-white p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-blue-100">
                        {/* Eyebrow Label */}
                        <span className="text-[var(--primary)] font-heading font-bold uppercase tracking-widest text-xl md:text-2xl mb-6 block text-left">
                            {assessment.eyebrow}
                        </span>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-[var(--secondary)] font-heading leading-tight whitespace-pre-line text-left">
                            {assessment.h2}
                        </h2>

                        <div className="space-y-6 text-[1.25rem] leading-[1.6] text-gray-700 font-serif mb-12 text-left">
                            {assessment.body.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <div className="text-left">
                            <button className="inline-block bg-[var(--primary)] text-white px-10 py-5 rounded text-xl font-bold hover:bg-[var(--secondary)] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                                {assessment.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathways (Premium Cards) */}
            <section className="py-12 md:py-24 bg-gray-50 relative">
                {/* Connector Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent opacity-50 hidden md:block"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-[var(--primary)] font-bold uppercase tracking-[0.2em] text-sm md:text-base border-b-2 border-[var(--primary)] pb-2 mb-6 inline-block">
                            Your Journey
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-[var(--secondary)] font-heading leading-tight text-balance">
                            {nextSteps.h2}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Pathway 1 */}
                        <div className="md:col-span-2 bg-white p-10 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 border-t-4 border-[var(--primary)] flex flex-col h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-bold text-6xl text-[var(--primary)] select-none group-hover:opacity-20 transition-opacity">01</div>
                            <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-xs mb-3 block">Pathway 01</span>

                            <h3 className="text-3xl font-bold text-[var(--secondary)] mb-8 font-heading">
                                {nextSteps.pathway1.title.includes(':') ? nextSteps.pathway1.title.split(':')[1].trim() : nextSteps.pathway1.title}
                            </h3>

                            <div className="space-y-10 mb-8 flex-grow relative z-10">
                                <div>
                                    <h4 className="font-bold text-[var(--primary)] mb-4 uppercase text-2xl tracking-wide">{nextSteps.pathway1.demoTitle}</h4>
                                    <div className="space-y-4 text-[1.125rem] text-gray-600 font-serif leading-relaxed">
                                        {nextSteps.pathway1.demoBody.map((p, i) => <p key={i}>{p}</p>)}
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                                    <div className="mb-6">
                                        <h4 className="font-bold text-[var(--secondary)] text-2xl uppercase tracking-wide leading-tight mb-2">
                                            Growth and AI Executive Briefing
                                        </h4>
                                        <span className="block text-[var(--primary)] text-xl font-bold uppercase tracking-widest">
                                            & AI Disruption Conversation
                                        </span>
                                    </div>

                                    <div className="space-y-6 text-[1.125rem] text-gray-600 font-serif leading-loose">
                                        <p>
                                            Would it be worth it to see how much <strong className="text-gray-900">lost revenue or hidden profits</strong> AI could uncover in your business?
                                        </p>
                                        <p>
                                            No matter the size of your business, I guarantee that significant revenue and profits are slipping through the cracks because of broken or inefficient processes. It's an all-too-common scenario: hardworking CEOs and their teams tirelessly pursue growth, while unseen inefficiencies quietly undermine their efforts and erode their bottom lines.
                                        </p>
                                        <p>
                                            During this 90-minute session, we will attempt to find <strong className="text-gray-900">$1 million or more in lost revenue or profits</strong> hidden in your inefficient or broken processes all without spending a cent on new growth tactics or advertising.
                                        </p>
                                        <p>
                                            Then, using ChatGPT, we will explore how AI could disrupt your industry and business.
                                        </p>
                                        <p>
                                            The <strong className="text-gray-900">Growth and AI Executive Briefing</strong> is more than an introduction. It is a <strong className="text-gray-900">tailored executive coaching experience</strong> that sets the stage for what is to come.
                                        </p>
                                        <p>
                                            If we cannot find at least <strong className="text-gray-900">one million dollars in lost revenue or profits</strong> during the Growth and AI Executive Briefing, we will not invite you to attend the Growth and AI Intensive for CEOs.
                                        </p>
                                        <p>
                                            This ensures that the program has the potential to generate a positive ROI for every CEO who attends.
                                        </p>
                                        <p>
                                            Do you think there is even a chance that broken processes and other inefficiencies in your business are leaving money on the table?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <button className="w-full md:w-auto md:min-w-[300px] bg-white border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-4 rounded text-lg font-bold hover:bg-[var(--primary)] hover:text-white transition-colors">
                                    {nextSteps.pathway1.cta}
                                </button>
                            </div>
                        </div>

                        {/* Pathway 2 */}
                        <div className="md:col-span-2 bg-white p-10 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 border-t-4 border-[var(--secondary)] flex flex-col h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-bold text-6xl text-[var(--secondary)] select-none group-hover:opacity-20 transition-opacity">02</div>
                            <span className="text-[var(--secondary)] font-bold uppercase tracking-widest text-xs mb-3 block">Pathway 02</span>

                            <h3 className="text-3xl font-bold text-[var(--secondary)] mb-6 font-heading">
                                {nextSteps.pathway2.title.includes(':') ? nextSteps.pathway2.title.split(':')[1].trim() : nextSteps.pathway2.title}
                            </h3>
                            <p className="mb-6 text-[1.125rem] text-gray-600 font-serif leading-relaxed relative z-10">{nextSteps.pathway2.body}</p>
                            <ul className="space-y-3 mb-8 flex-grow relative z-10 grid md:grid-cols-2 gap-4">
                                {nextSteps.pathway2.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start text-[1rem] text-gray-600 font-serif">
                                        <span className="text-[var(--primary)] mr-3 mt-1">●</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full md:w-auto md:min-w-[300px] bg-white border-2 border-[var(--secondary)] text-[var(--secondary)] px-8 py-4 rounded text-lg font-bold hover:bg-[var(--secondary)] hover:text-white transition-colors">
                                    {nextSteps.pathway2.cta}
                                </button>
                            </div>
                        </div>

                        {/* Pathway 3 */}
                        <div className="bg-white p-10 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 border-t-4 border-[var(--secondary)] flex flex-col h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-bold text-6xl text-[var(--secondary)] select-none group-hover:opacity-20 transition-opacity">03</div>
                            <span className="text-[var(--secondary)] font-bold uppercase tracking-widest text-xs mb-3 block">Pathway 03</span>

                            <h3 className="text-3xl font-bold text-[var(--secondary)] mb-6 font-heading">
                                {nextSteps.pathway3.title.includes(':') ? nextSteps.pathway3.title.split(':')[1].trim() : nextSteps.pathway3.title}
                            </h3>
                            <p className="mb-6 text-[1.125rem] text-gray-600 font-serif leading-relaxed relative z-10">{nextSteps.pathway3.body}</p>
                            <ul className="space-y-3 mb-8 flex-grow relative z-10">
                                {nextSteps.pathway3.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start text-[1rem] text-gray-600 font-serif">
                                        <span className="text-[var(--primary)] mr-3 mt-1">●</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-white border-2 border-[var(--secondary)] text-[var(--secondary)] px-6 py-4 rounded text-lg font-bold hover:bg-[var(--secondary)] hover:text-white transition-colors">
                                    {nextSteps.pathway3.cta}
                                </button>
                            </div>
                        </div>

                        {/* Pathway 4 */}
                        <div className="bg-white p-10 rounded-xl shadow-[var(--shadow-natural)] hover:shadow-[var(--shadow-deep)] transition-all duration-300 border-t-4 border-[var(--secondary)] flex flex-col h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-bold text-6xl text-[var(--secondary)] select-none group-hover:opacity-20 transition-opacity">04</div>
                            <span className="text-[var(--secondary)] font-bold uppercase tracking-widest text-xs mb-3 block">Pathway 04</span>

                            <h3 className="text-3xl font-bold text-[var(--secondary)] mb-6 font-heading">
                                {nextSteps.pathway4.title.includes(':') ? nextSteps.pathway4.title.split(':')[1].trim() : nextSteps.pathway4.title}
                            </h3>
                            <p className="mb-6 text-[1.125rem] text-gray-600 font-serif leading-relaxed relative z-10">{nextSteps.pathway4.body}</p>
                            <ul className="space-y-3 mb-8 flex-grow relative z-10">
                                {nextSteps.pathway4.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start text-[1rem] text-gray-600 font-serif">
                                        <span className="text-[var(--primary)] mr-3 mt-1">●</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <button className="w-full bg-white border-2 border-[var(--secondary)] text-[var(--secondary)] px-6 py-4 rounded text-lg font-bold hover:bg-[var(--secondary)] hover:text-white transition-colors">
                                    {nextSteps.pathway4.cta}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
