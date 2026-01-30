"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { content } from '@/lib/content';

const sips = content.sipsAndSmoothies;
const pageContent = sips.reservation;

// Simplified Calendar Component to prevent runtime errors
const CalendarEmbed = () => {
    return (
        <div className="w-full bg-white min-h-[1000px] overflow-hidden relative">
            <iframe
                src="https://links.growerscloud.ai/widget/booking/gBfPo5t0vIgm0uuYBBUx"
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '1000px', display: 'block' }}
                scrolling="no"
                id="Q01bzWkNQwq1twWmKy23_1769757334868"
                title="Reservation Calendar"
            />
        </div>
    );
};

export default function ReservationPage() {
    // Standard script loader
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://links.growerscloud.ai/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Optional: Cleanup if causing issues, but usually fine to leave or remove on unmount
        return () => {
            // document.body.removeChild(script); // Keep script to avoid reloading issues
        };
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - CRO 'Velvet Rope' Design */}
            <section className="relative min-h-[60vh] flex items-center pt-12 pb-12 overflow-hidden bg-black text-white"> {/* Reduced padding to pt-12 pb-12 */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/executive_cocktail_lounge_vibe_1769639909462.png"
                        alt="Background Atmosphere"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    {/* Standard Gradient + Radial for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.4),transparent_70%)]" />
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-6xl">
                        {/* 1. Eyebrow - Authority & Exclusivity */}
                        <div className="animate-fade-in-up mb-6">
                            <span className="text-[var(--primary)] font-bold tracking-[0.4em] uppercase text-xs md:text-sm block">
                                {pageContent.eyebrow}
                            </span>
                        </div>

                        {/* 2. Visual Bridge - Pre-Headline */}
                        <div className="text-xl md:text-3xl font-heading mb-6 text-gray-200 animate-fade-in-up delay-100 border-l-4 border-[var(--primary)] pl-6 py-2 leading-relaxed max-w-3xl">
                            {pageContent.hero.preHeadline}
                        </div>

                        {/* 3. The Hook - Main Headline */}
                        <h1 className="text-4xl md:text-6xl font-bold font-heading leading-none mb-8 animate-fade-in-up delay-200 tracking-tight">
                            {pageContent.hero.title.map((line, i) => {
                                // Highlight logic: Check for specific phrases to color red
                                const highlightPhrases = ["Meaningful Conversation", "Valuation", "Future"];
                                let content = <>{line}</>;

                                highlightPhrases.forEach(phrase => {
                                    if (line.includes(phrase)) {
                                        const parts = line.split(phrase);
                                        content = (
                                            <>
                                                {parts[0]}
                                                <span className="text-[var(--primary)]">{phrase}</span>
                                                {parts[1]}
                                            </>
                                        );
                                    }
                                });

                                return (
                                    <React.Fragment key={i}>
                                        <span className="text-white block mb-1">
                                            {content}
                                        </span>
                                    </React.Fragment>
                                );
                            })}
                        </h1>

                        {/* 4. The Values Stack - Power Words */}
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

            {/* Invitation Card Section - Card Layout on Gray Background */}
            <section id="reservation-card" className="py-16 px-4 bg-gray-50 relative">
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

                        {/* Calendar Container */}
                        <div className="px-0 md:px-4 pb-0">
                            <CalendarEmbed />
                        </div>

                        {/* Benefits Footer within Card */}
                        <div className="bg-gray-50 border-t border-gray-200 p-8 md:p-12">
                            <div className="grid md:grid-cols-3 gap-8">
                                {pageContent.benefits.map((benefit, i) => (
                                    <div key={i} className="text-center md:text-left">
                                        <h3 className="text-lg font-bold font-heading mb-2 text-[var(--secondary)]">{benefit.title}</h3>
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
