"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Iframe from 'react-iframe';
import { content } from '@/lib/content';

const sips = content.sipsAndSmoothies;
const pageContent = sips.reservation;

// Calendar widget configuration
const CALENDAR_CONFIG = {
    url: "https://links.growerscloud.ai/widget/booking/gBfPo5t0vIgm0uuYBBUx",
    scriptUrl: "https://links.growerscloud.ai/js/form_embed.js",
    minHeight: "1000px",
    loadingTimeout: 10000, // 10 seconds
};

// Robust Calendar Component with loading states and error handling
const CalendarEmbed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    // Load the external script
    useEffect(() => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${CALENDAR_CONFIG.scriptUrl}"]`);
        if (existingScript) {
            setScriptLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.src = CALENDAR_CONFIG.scriptUrl;
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => {
            console.error("Failed to load calendar script");
            // Don't set error - iframe might still work without the script
        };
        document.body.appendChild(script);

        return () => {
            // Keep script on unmount to avoid reload issues
        };
    }, []);

    // Loading timeout - if iframe doesn't load in time, show error
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                console.warn("Calendar loading timeout");
                setHasError(true);
                setIsLoading(false);
            }
        }, CALENDAR_CONFIG.loadingTimeout);

        return () => clearTimeout(timer);
    }, [isLoading]);

    const handleIframeLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    const handleRetry = useCallback(() => {
        setIsLoading(true);
        setHasError(false);
        // Force iframe reload by updating key (handled by React)
        window.location.reload();
    }, []);

    return (
        <div className="w-full bg-white relative" style={{ minHeight: CALENDAR_CONFIG.minHeight }}>
            {/* Loading State */}
            {isLoading && !hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-gray-200 border-t-[var(--primary)] rounded-full animate-spin" />
                    </div>
                    <p className="mt-6 text-gray-600 font-heading font-medium">Loading calendar...</p>
                    <p className="mt-2 text-gray-400 text-sm">This may take a few moments</p>
                </div>
            )}

            {/* Error State */}
            {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-8">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Calendar Temporarily Unavailable</h3>
                    <p className="text-gray-600 text-center max-w-md mb-6">
                        We're having trouble loading the booking calendar. Please try again or contact us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleRetry}
                            className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:bg-[#d01829] transition-colors"
                        >
                            Try Again
                        </button>
                        <a
                            href="mailto:info@themindfinders.com?subject=Sips%20%26%20Smoothies%20Reservation"
                            className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-bold hover:bg-[var(--primary)] hover:text-white transition-colors text-center"
                        >
                            Email Us Instead
                        </a>
                    </div>
                </div>
            )}

            {/* Iframe - using react-iframe for better cross-browser support */}
            <Iframe
                url={CALENDAR_CONFIG.url}
                width="100%"
                height={CALENDAR_CONFIG.minHeight}
                id="growerscloud-calendar-embed"
                className="border-0"
                display="block"
                position="relative"
                allowFullScreen={false}
                loading="lazy"
                onLoad={handleIframeLoad}
                styles={{
                    border: 'none',
                    overflow: 'hidden',
                    minHeight: CALENDAR_CONFIG.minHeight,
                    opacity: isLoading || hasError ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            />
        </div>
    );
};

export default function ReservationPage() {

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
