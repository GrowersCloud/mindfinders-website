"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/lib/content';

const roundtable = content.executiveRoundtable;

export default function AIExecutiveRoundtablePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/boardroom_hero.png"
                        alt="Executive Strategy Roundtable"
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
                </div>

                {/* Ambient Visual Depth Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-[var(--primary)]/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[40%] bg-[#444]/20 blur-[100px] rounded-full" />
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-4xl">
                        {/* Eyebrow */}
                        {roundtable.hero.eyebrow && (
                            <div className="inline-block mb-6 animate-fade-in-up">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full text-[var(--primary)] shadow-[0_0_20px_rgba(219,24,41,0.2)]">
                                    {roundtable.hero.eyebrow}
                                </span>
                            </div>
                        )}

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.0] mb-8 animate-fade-in-up tracking-tighter text-balance">
                            {roundtable.hero.h1}
                        </h1>

                        <div className="text-xl md:text-3xl font-heading mb-8 text-gray-200 max-w-2xl animate-fade-in-up delay-100 border-l-2 border-[var(--primary)] pl-6 py-2 whitespace-pre-line">
                            {roundtable.hero.subtitle}
                        </div>

                        {/* Ticket-style Details */}
                        <div className="flex flex-wrap items-center gap-y-6 gap-x-12 mb-8 animate-fade-in-up delay-200 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl max-w-fit">
                            {roundtable.hero.dates.map((date, i) => (
                                <div key={i} className={`relative ${i === 0 ? "pr-0 md:pr-12" : ""}`}>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-2">
                                        SESSION {i + 1}
                                    </span>
                                    <div className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                                        {date}
                                    </div>
                                    {i < roundtable.hero.dates.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />}
                                </div>
                            ))}
                        </div>

                        <p className="text-lg md:text-2xl font-serif text-gray-300 mb-8 max-w-3xl animate-fade-in-up delay-300 italic whitespace-pre-line leading-relaxed">
                            {roundtable.hero.description}
                        </p>

                        <Link href="/ai-executive-roundtable/register" className="group relative px-10 py-5 bg-[var(--primary)] text-white rounded-lg font-bold text-xl hover:bg-[#d01829] transition-all transform hover:scale-105 active:scale-95 animate-fade-in-up delay-300 overflow-hidden shadow-[0_0_30px_rgba(219,24,41,0.3)] inline-block">
                            <span className="relative z-10">{roundtable.hero.cta}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Strategic Lens Section - Using Executive Collaboration Image */}
            <section className="py-24 px-4 bg-white relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                FOUNDATIONAL LOGIC
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-none mb-8 tracking-tighter">
                                {roundtable.strategicLens.h2}
                            </h2>
                            <div className="space-y-6">
                                {roundtable.strategicLens.body.map((para, i) => (
                                    <p key={i} className="text-xl md:text-2xl font-serif leading-relaxed text-[var(--secondary)]">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-50 rounded-3xl -rotate-2 scale-105" />
                            <Image
                                src="/workshop_collab.png"
                                alt="Executive Collaboration Strategy"
                                width={800}
                                height={800}
                                className="relative z-10 rounded-3xl shadow-deep object-cover aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section - Dark Cards */}
            <section className="py-24 px-4 bg-gray-50 relative">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                            WHAT WE WILL ACHIEVE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight tracking-tighter">
                            {roundtable.objectives.h2}
                        </h2>
                        <p className="text-xl font-serif text-[var(--secondary)]">
                            {roundtable.objectives.intro}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roundtable.objectives.items.map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-natural border border-gray-100 hover:shadow-deep hover:border-[var(--primary)] transition-all duration-300 group">
                                <div className="text-[var(--primary)] font-heading font-bold text-6xl opacity-10 mb-4 group-hover:opacity-20 transition-opacity">
                                    0{i + 1}
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                                    {item.title.replace(/^\d+\.\s/, '')}
                                </h3>
                                <p className="text-lg font-serif text-[var(--secondary)]/80 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Structure - Two Part Visual Split */}
            <section className="py-0 bg-white">
                <div className="grid lg:grid-cols-2">
                    {/* Part I: Webinar (Dark) */}
                    <div className="bg-black text-white p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-50" />
                        <div className="relative z-10">
                            <span className="text-[var(--primary)] font-bold tracking-[0.2em] uppercase text-2xl md:text-4xl block mb-6 animate-pulse">
                                {roundtable.programStructure.part1.date}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-2">
                                {roundtable.programStructure.part1.title}
                            </h3>
                            <p className="text-xl font-serif italic text-gray-400 mb-8 border-l-2 border-[var(--primary)] pl-4">
                                {roundtable.programStructure.part1.subtitle}
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mb-10">
                                {roundtable.programStructure.part1.description}
                            </p>
                        </div>
                    </div>

                    {/* Part II: Workshop (Light/Clean) */}
                    <div className="bg-gray-100 p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                        <div className="relative z-10">
                            <span className="text-[var(--primary)] font-bold tracking-[0.2em] uppercase text-2xl md:text-4xl block mb-6 animate-pulse">
                                {roundtable.programStructure.part2.date}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-2 text-[var(--secondary)]">
                                {roundtable.programStructure.part2.title}
                            </h3>
                            <p className="text-xl font-serif italic text-gray-500 mb-8 border-l-2 border-[var(--primary)] pl-4">
                                {roundtable.programStructure.part2.subtitle}
                            </p>
                            <p className="text-lg text-[var(--secondary)] leading-relaxed mb-10">
                                {roundtable.programStructure.part2.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Host Section */}
            <section className="py-24 px-4 bg-white relative">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-[var(--primary)] font-bold tracking-[0.4em] uppercase text-xs block mb-8">
                        {roundtable.host.h2}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-[var(--secondary)] mb-10">
                        &ldquo;{roundtable.host.body}&rdquo;
                    </h2>

                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold font-heading text-[var(--secondary)] uppercase tracking-widest mb-2">
                            {roundtable.host.name.split(',')[0]}
                        </div>
                        <div className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase mb-12">
                            {roundtable.host.name.split(',').slice(1).join(',')}
                        </div>

                        <Link href="/ai-executive-roundtable/register" className="px-10 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105 shadow-xl">
                            {roundtable.host.cta}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
