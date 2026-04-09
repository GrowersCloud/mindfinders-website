"use client";

import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/content';

const roundtable = content.executiveRoundtable;
const pageContent = roundtable.registration;

// Form Component - loads isolated static HTML to prevent React interference
// The actual embed code lives in /public/roundtable-form-embed.html (outside React)
const FormEmbed = () => {
    return (
        <div className="w-full bg-white min-h-[1250px]">
            <iframe
                src="/roundtable-form-embed.html"
                style={{ width: '100%', height: '1250px', border: 'none' }}
                title="AI Executive Roundtable Registration"
            />
        </div>
    );
};

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center pt-12 pb-12 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/boardroom_hero.png"
                        alt="Executive Strategy Roundtable"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.4),transparent_70%)]" />
                </div>

                {/* Ambient Visual Depth */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-[var(--primary)]/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[40%] bg-[#444]/20 blur-[100px] rounded-full" />
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-6xl">
                        {/* Eyebrow */}
                        <div className="animate-fade-in-up mb-6">
                            <span className="text-[var(--primary)] font-bold tracking-[0.4em] uppercase text-xs md:text-sm block">
                                {pageContent.eyebrow}
                            </span>
                        </div>

                        {/* Pre-Headline */}
                        <div className="text-xl md:text-3xl font-heading mb-6 text-gray-200 animate-fade-in-up delay-100 border-l-4 border-[var(--primary)] pl-6 py-2 leading-relaxed max-w-3xl">
                            {pageContent.hero.preHeadline}
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl font-bold font-heading leading-none mb-8 animate-fade-in-up delay-200 tracking-tight">
                            {pageContent.hero.title.map((line, i) => {
                                const isHighlighted = line.includes("Executive Roundtable");
                                return (
                                    <span key={i} className={`block mb-1 ${isHighlighted ? 'text-[var(--primary)]' : 'text-white'}`}>
                                        {line}
                                    </span>
                                );
                            })}
                        </h1>

                        {/* Values Stack */}
                        {pageContent.hero.valuesStack && (
                            <div className="mb-0 animate-fade-in-up delay-300">
                                <p className="text-xl md:text-2xl font-bold font-heading tracking-widest text-gray-300 uppercase">
                                    {pageContent.hero.valuesStack.join('  •  ')}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section id="registration-form" className="py-16 px-4 bg-gray-50 relative">
                <div className="container mx-auto">
                    {/* The Card Container */}
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        {/* Header within Card */}
                        <div className="text-center pt-12 pb-8 px-8">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                                {pageContent.instructions}
                            </h2>
                            <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full" />
                        </div>

                        {/* Form Embed - Isolated in static HTML to prevent React interference */}
                        <div className="px-0 md:px-4 pb-0">
                            <FormEmbed />
                        </div>

                        {/* Benefits Footer within Card */}
                        <div className="bg-gray-50 border-t border-gray-200 p-8 md:p-12">
                            <div className="grid md:grid-cols-3 gap-8">
                                {pageContent.benefits.map((benefit, i) => (
                                    <div key={i} className="text-center md:text-left">
                                        <h3 className="text-lg font-bold font-heading mb-2 text-[var(--secondary)]">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 font-serif text-sm leading-relaxed">
                                            {benefit.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Final Sign-off */}
                            <div className="text-center max-w-2xl mx-auto mt-12 pt-8 border-t border-gray-200/60">
                                <p className="text-gray-500 font-serif italic text-base">
                                    {pageContent.footer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
