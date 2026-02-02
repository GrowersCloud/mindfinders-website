"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/lib/content';

const sips = content.sipsAndSmoothies;

export default function SipsAndSmoothiesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sips-hero.png"
                        alt="Upscale Social Cocktail Party"
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
                </div>

                {/* Ambient Visual Depth Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-[var(--primary)]/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[10%] w-[30%] h-[40%] bg-[#444]/20 blur-[100px] rounded-full" />
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-4xl">
                        {/* Exclusivity Badge */}
                        {sips.hero.eyebrow && (
                            <div className="inline-block mb-6 animate-fade-in-up">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full text-[var(--primary)] shadow-[0_0_20px_rgba(219,24,41,0.2)]">
                                    {sips.hero.eyebrow}
                                </span>
                            </div>
                        )}

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading leading-[0.85] mb-8 animate-fade-in-up tracking-tighter">
                            {Array.isArray(sips.hero.h1) ? sips.hero.h1.map((line, i) => (
                                <React.Fragment key={i}>
                                    <span className={i === 0 ? "text-[var(--primary)]" : "text-white"}>
                                        {line}
                                    </span>
                                    {i < sips.hero.h1.length - 1 && <br />}
                                </React.Fragment>
                            )) : sips.hero.h1}
                        </h1>

                        <div className="text-xl md:text-3xl font-heading mb-8 text-gray-200 max-w-2xl animate-fade-in-up delay-100 border-l-2 border-[var(--primary)] pl-6 py-2 whitespace-pre-line">
                            {sips.hero.subtitle}
                        </div>

                        {/* Ticket-style Details */}
                        <div className="flex flex-wrap items-center gap-y-6 gap-x-12 mb-8 animate-fade-in-up delay-200 bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl max-w-fit">
                            {sips.hero.details.map((detail, i) => (
                                <div key={i} className={`relative ${i === 0 ? "pr-0 md:pr-12" : ""}`}>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--primary)] font-bold block mb-2">
                                        {i === 0 ? "When" : "Where"}
                                    </span>
                                    <div className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                                        {detail}
                                    </div>
                                    {i === 0 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />}
                                </div>
                            ))}
                        </div>

                        <p className="text-lg md:text-2xl font-serif text-gray-300 mb-8 max-w-3xl animate-fade-in-up delay-300 italic whitespace-pre-line leading-relaxed">
                            {sips.hero.description}
                        </p>

                        <Link href="/ceo-sips-and-smoothies/reservation" className="group relative px-10 py-5 bg-[var(--primary)] text-white rounded-lg font-bold text-xl hover:bg-[#d01829] transition-all transform hover:scale-105 active:scale-95 animate-fade-in-up delay-300 overflow-hidden shadow-[0_0_30px_rgba(219,24,41,0.3)] inline-block">
                            <span className="relative z-10">{sips.hero.cta}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Context Section */}
            <section className="py-24 px-4 bg-gray-50/50">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                EXECUTIVE SOCIAL
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[0.95] mb-8 tracking-tighter">
                                {Array.isArray(sips.socialContext.h2) ? sips.socialContext.h2.map((line, i) => (
                                    <span key={i} className="block lg:whitespace-nowrap">
                                        {line}
                                    </span>
                                )) : sips.socialContext.h2}
                            </h2>
                            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-10 text-[var(--secondary)]">
                                {sips.socialContext.body}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {sips.socialContext.offerings.map((item, i) => (
                                    <div key={i} className="group bg-white p-5 rounded-xl border-l-4 border-[var(--primary)] shadow-sm hover:shadow-md transition-all">
                                        <p className="text-base md:text-lg font-serif font-medium leading-snug group-hover:text-[var(--primary)] transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xl text-[var(--secondary)] italic font-serif font-semibold border-t border-gray-200 pt-8">
                                {sips.socialContext.footer}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[var(--primary)]/5 rounded-3xl rotate-3 scale-105" />
                            <Image
                                src="/executive_cocktail_lounge_vibe_1769639909462.png"
                                alt="Executive Social Atmosphere"
                                width={800}
                                height={1000}
                                className="relative z-10 rounded-3xl shadow-deep object-cover aspect-[4/5]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20" />

                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                        <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                            WHY JOIN US
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight tracking-tighter">
                            {sips.benefits.h2}
                        </h2>
                        <p className="text-xl md:text-2xl font-serif text-[var(--secondary)] font-medium leading-relaxed max-w-2xl mx-auto">
                            {sips.benefits.intro}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {sips.benefits.items.map((benefit: any, i: number) => (
                            <div key={i}
                                style={{ animationDelay: `${i * 150}ms` }}
                                className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-natural hover:shadow-deep transition-all duration-500 border-t-4 border-[var(--primary)] flex flex-col items-start text-left animate-fade-in-up">
                                <div className="w-16 h-16 bg-[var(--primary)]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    {i === 0 && (
                                        <svg className="w-8 h-8 text-[var(--primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {i === 1 && (
                                        <svg className="w-8 h-8 text-[var(--primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    )}
                                    {i === 2 && (
                                        <svg className="w-8 h-8 text-[var(--primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {i === 3 && (
                                        <svg className="w-8 h-8 text-[var(--primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14H11V21L20 10H13Z" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-lg font-serif leading-relaxed text-[var(--secondary)]">
                                    {benefit.text}
                                </p>

                                <div className="mt-8 flex items-center text-[var(--primary)] font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    Discover More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center animate-fade-in-up delay-500">
                        <div className="inline-block p-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8 w-1/3" />
                        <p className="text-2xl md:text-3xl font-heading font-bold italic text-[var(--secondary)] max-w-2xl mx-auto leading-tight">
                            &ldquo;{sips.benefits.footer}&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience & Demos Section */}
            <section className="py-32 px-4 bg-white overflow-hidden relative">
                <div className="container mx-auto">
                    {/* Section Header - Centered for Anchoring */}
                    <div className="text-center max-w-4xl mx-auto mb-24 animate-fade-in-up">
                        <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                            THE EVENING FLOW
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-[0.95] tracking-tighter text-balance">
                            {sips.experience.h2}
                        </h2>
                    </div>

                    {/* Stage 1: Social Flow - Balanced 2-Column */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                        <div className="relative animate-fade-in-up">
                            <div className="absolute inset-0 bg-gray-50 rounded-3xl rotate-2 scale-105" />
                            <Image
                                src="/smoothie_lounge_vibe_1769644027222.png"
                                alt="Relaxed Social Atmosphere"
                                width={800}
                                height={600}
                                className="relative z-10 rounded-3xl shadow-deep object-cover aspect-[4/3]"
                            />
                        </div>
                        <div className="space-y-8 animate-fade-in-up delay-100">
                            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                                ARRIVAL & CONNECTION
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif italic text-[var(--secondary)] leading-tight">
                                {sips.experience.flow.title}
                            </h3>
                            <p className="text-xl md:text-2xl font-serif text-[var(--secondary)] leading-relaxed max-w-xl">
                                {sips.experience.flow.text}
                            </p>
                        </div>
                    </div>

                    {/* Stage 2: AI Demos - Full-Width Spotlight Block */}
                    <div className="animate-fade-in-up delay-200">
                        <div className="bg-black text-white rounded-[3rem] shadow-deep relative overflow-hidden group border border-white/5">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                                </svg>
                            </div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px]" />

                            <div className="relative z-10 p-10 md:p-20 lg:p-24 flex flex-col lg:flex-row gap-16 items-center">
                                {/* Left: Action Image */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div className="absolute inset-0 bg-[var(--primary)]/20 rounded-2xl -rotate-1 scale-105" />
                                    <Image
                                        src="/ai_demo_portrait_1769644040625.png"
                                        alt="8 AI Demos Spotlight"
                                        width={800}
                                        height={1000}
                                        className="relative z-10 rounded-2xl shadow-deep object-cover aspect-[3/4]"
                                    />
                                    <div className="absolute -top-6 -left-6 z-20 bg-white p-5 rounded-xl shadow-xl border border-gray-100">
                                        <p className="text-[var(--primary)] font-bold text-4xl font-heading leading-none">8</p>
                                        <p className="text-[var(--secondary)] font-bold text-[10px] uppercase tracking-tighter">Minutes</p>
                                    </div>

                                    {/* Moved CTA Button - Left Aligned Under Image */}
                                    <div className="mt-8 text-center lg:text-left">
                                        <Link href="/ceo-sips-and-smoothies/reservation" className="group relative px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_20px_rgba(219,24,41,0.2)] inline-block">
                                            <span className="relative z-10">{sips.howToAttend.cta}</span>
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Right: Content Highlights */}
                                <div className="w-full lg:w-1/2 space-y-10">
                                    <div>
                                        <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
                                            THE HIGHLIGHT OF THE NIGHT
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-[0.9] tracking-tighter text-balance">
                                            {sips.experience.demos.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-6">
                                        {sips.experience.demos.text.map((para: string, i: number) => (
                                            <p key={i} className="text-lg md:text-xl text-gray-300 font-serif leading-relaxed max-w-xl">
                                                {para}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="pt-10 border-t border-white/10">
                                        <p className="text-xl md:text-2xl font-heading font-bold italic text-[var(--primary)] text-center lg:text-left">
                                            {sips.experience.demos.footer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Referral Networking Section - Premium Editorial Layout */}
            <section className="py-32 px-4 bg-gray-50/50 relative overflow-hidden">
                {/* Ambient Visual Depth */}
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-[var(--primary)]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-[#444]/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        {/* Image Column - 3-Image "Storyboard" Gallery */}
                        <div className="lg:col-span-5 order-2 lg:order-1 relative h-[800px] lg:h-[950px] flex flex-col justify-between">
                            {/* Networking Main - Top Wide */}
                            <div className="relative w-full h-[30%] z-20 group/img1 animate-fade-in-up">
                                <div className="absolute inset-0 bg-[var(--primary)]/10 rounded-[2rem] rotate-1 scale-105 group-hover/img1:rotate-0 group-hover/img1:scale-105 transition-all duration-700" />
                                <div className="relative rounded-[2rem] overflow-hidden shadow-deep h-full border border-white/10">
                                    <Image
                                        src="/referral-networking-main.png"
                                        alt="CEOs Networking"
                                        fill
                                        className="object-cover transform group-hover/img1:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>

                            <div className="flex gap-6 h-[55%]">
                                {/* Scenario A: Luxury - Middle Left Staggered */}
                                <div className="w-1/2 h-full pt-12 animate-fade-in-up delay-200">
                                    <div className="relative h-[85%] group/img2">
                                        <div className="absolute inset-0 bg-black/10 rounded-[2rem] -rotate-2 scale-105 group-hover/img2:rotate-0 transition-all duration-700" />
                                        <div className="relative rounded-[2rem] overflow-hidden shadow-deep h-full border-4 border-white">
                                            <Image
                                                src="/referral-partnership-luxury.png"
                                                alt="Luxury Dealership Referral"
                                                fill
                                                className="object-cover transform group-hover/img2:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Scenario B: Financial - Bottom Right Staggered */}
                                <div className="w-1/2 h-full pb-12 animate-fade-in-up delay-400">
                                    <div className="relative h-[85%] mt-auto group/img3">
                                        <div className="absolute inset-0 bg-[var(--primary)]/5 rounded-[2rem] rotate-2 scale-105 group-hover/img3:rotate-0 transition-all duration-700" />
                                        <div className="relative rounded-[2rem] overflow-hidden shadow-deep h-full border-4 border-white">
                                            <Image
                                                src="/referral-partnership-financial.png"
                                                alt="Financial Services Referral"
                                                fill
                                                className="object-cover transform group-hover/img3:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorative Depth Elements */}
                            <div className="absolute top-1/4 -left-12 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-1/4 -right-12 w-48 h-48 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000" />

                            {/* Moved CTA Button - Left Column Center Aligned with Spacing */}
                            <div className="relative w-full text-center mt-8 pb-4">
                                <Link href="/ceo-sips-and-smoothies/reservation" className="group relative px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105 active:scale-95 overflow-hidden shadow-lg inline-block">
                                    <span className="relative z-10">{sips.howToAttend.cta}</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>

                        {/* Content Column - Spanning remaining cols */}
                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
                            <div className="animate-fade-in-up">
                                <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                    THE CEO NETWORK EFFECT
                                </span>
                                <h2 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-8 tracking-tighter text-balance">
                                    {sips.referrals.h2}
                                </h2>
                                <p className="text-xl md:text-2xl font-serif leading-relaxed text-[var(--secondary)] font-medium max-w-3xl">
                                    {sips.referrals.body}
                                </p>
                            </div>

                            <div className="animate-fade-in-up delay-100 relative group">
                                <div className="absolute -inset-4 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-natural border-l-[6px] border-[var(--primary)] transform transition-transform duration-500 group-hover:-translate-y-1">
                                    <p className="text-xl md:text-2xl font-serif italic text-[var(--secondary)] leading-tight font-semibold">
                                        &ldquo;{sips.referrals.valueProp}&rdquo;
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8 animate-fade-in-up delay-200">
                                <p className="text-lg md:text-xl font-heading font-bold uppercase tracking-[0.2em] text-gray-400">
                                    {sips.referrals.imagine}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {sips.referrals.scenarios.map((scenario, i) => (
                                        <div key={i} className="group/card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-deep hover:border-[var(--primary)]/20 transition-all duration-500 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/5 flex items-center justify-center text-[var(--primary)] mb-6 font-bold text-xl group-hover/card:bg-[var(--primary)] group-hover/card:text-white transition-all duration-500">
                                                    0{i + 1}
                                                </div>
                                                <p className="text-lg md:text-xl font-serif text-[var(--secondary)] leading-relaxed group-hover/card:text-[var(--primary)] transition-colors duration-500">
                                                    {scenario}
                                                </p>
                                            </div>
                                            <div className="mt-8 h-1 w-12 bg-gray-100 group-hover/card:w-full group-hover/card:bg-[var(--primary)] transition-all duration-700" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-200 animate-fade-in-up delay-300">
                                <p className="text-2xl md:text-3xl font-heading font-bold text-[var(--secondary)] leading-tight">
                                    {sips.referrals.conclusion}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Matchmaking */}
            <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                        {sips.matchmaking.h2}
                    </h2>
                    <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-8 whitespace-pre-line">
                        {sips.matchmaking.body}
                    </p>
                    <p className="text-2xl md:text-3xl font-heading font-bold text-[var(--primary)]">
                        &ldquo;{sips.matchmaking.value}&rdquo;
                    </p>
                </div>
            </section>

            {/* Audience Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                THE IDEAL PEER GROUP
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-none mb-10 tracking-tighter">
                                {sips.audience.h2}
                            </h2>
                            <div className="space-y-6 mb-10">
                                {sips.audience.items.map((item, i) => (
                                    <div key={i} className="flex items-start bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-200 hover:border-[var(--primary)] transition-colors">
                                        <div className="w-6 h-6 bg-[var(--primary)] rounded-full shrink-0 mr-4 mt-1 flex items-center justify-center shadow-[0_0_10px_rgba(219,24,41,0.3)]">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                        <span className="text-lg md:text-xl font-serif font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-[var(--primary)] text-white p-8 rounded-2xl shadow-xl transform skew-x-[-2deg]">
                                <p className="text-xl md:text-2xl font-heading font-bold italic text-center skew-x-[2deg]">
                                    {sips.audience.limitation}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-200 rounded-3xl translate-x-4 translate-y-4" />
                            <Image
                                src="/premium_invitation_envelope_white_1769640014114.png"
                                alt="Exclusive Invitation"
                                width={800}
                                height={800}
                                className="relative z-10 rounded-3xl shadow-deep"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Invitation Process (How to Attend) - Hyper Compact */}
            <section className="py-10 px-4 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
                {/* Subtle Background Pattern - Integrated */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--secondary) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                <div className="container mx-auto text-center max-w-3xl relative z-10">
                    <div className="mb-6">
                        <span className="text-[var(--primary)] font-bold tracking-[0.3em] uppercase text-[9px] block mb-2">
                            GETTING STARTED
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 tracking-tighter">
                            {sips.howToAttend.h2}
                        </h2>
                        <p className="text-base md:text-lg font-serif text-[var(--secondary)] leading-relaxed max-w-xl mx-auto italic whitespace-pre-line">
                            &ldquo;{sips.howToAttend.body}&rdquo;
                        </p>
                    </div>

                    {/* Process Flow - Hyper Tight Grid */}
                    <div className="relative mb-8">
                        {/* Connecting Line (Desktop) - Subtler */}
                        <div className="hidden lg:block absolute top-[22px] left-10 right-10 h-px bg-gray-200 z-0" />

                        <div className="grid lg:grid-cols-3 gap-4 relative z-10">
                            {sips.howToAttend.steps.map((step: string, i: number) => (
                                <div key={i} className="group flex flex-col items-center">
                                    <div className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[var(--secondary)] font-bold text-base mb-3 shadow-sm group-hover:border-[var(--primary)] group-hover:text-[var(--primary)] transition-all duration-500 relative z-20">
                                        {i + 1}
                                        {i === 0 && (
                                            <div className="absolute inset-0 rounded-full bg-[var(--primary)]/10 animate-ping -z-10" />
                                        )}
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full group-hover:border-[var(--primary)]/20 transition-all">
                                        <p className="text-xs font-heading font-bold uppercase tracking-widest text-[var(--secondary)]">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-6">
                        <div className="relative group">
                            <Link href="/ceo-sips-and-smoothies/reservation" className="px-10 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105 shadow-lg inline-block">
                                {sips.howToAttend.cta}
                            </Link>
                            <div className="absolute -top-3 -right-6 bg-[var(--secondary)] text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-lg">
                                30 Seconds
                            </div>
                        </div>

                        <p className="text-base md:text-lg font-serif italic text-gray-900 max-w-xl mx-auto pt-6 border-t border-gray-200 w-full whitespace-pre-line font-medium leading-relaxed">
                            {sips.howToAttend.alternative}
                        </p>
                    </div>
                </div>
            </section>

            {/* Your Host Section - Option 1: Executive Spotlight */}
            <section className="py-32 px-4 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
                <div className="container mx-auto">
                    {/* Restored Bold Headline */}
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-[var(--primary)] font-bold tracking-[0.4em] uppercase text-xs block mb-4">
                            LEADERSHIP & VISION
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter leading-none text-[var(--secondary)]">
                            {sips.host.h2}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start items-center">
                        {/* Portrait Aspect - 4:5 Portrait Oriented (No cutting head) */}
                        <div className="lg:col-span-5 relative group animate-fade-in-up">
                            <div className="absolute -inset-4 border border-gray-100 rounded-2xl group-hover:scale-95 transition-transform duration-700 pointer-events-none" />
                            <div className="absolute -inset-8 border border-gray-50 rounded-2xl group-hover:scale-105 transition-transform duration-1000 delay-100 pointer-events-none" />

                            <div className="relative rounded-2xl overflow-hidden shadow-deep aspect-[4/5] z-10 bg-gray-100">
                                <Image
                                    src="/tim-booker-real.jpg"
                                    alt="Tim Booker - Growth & AI Strategist"
                                    fill
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Host Bio & Corporate Support - Consistent Typography Column */}
                        <div className="lg:col-span-7 space-y-12 animate-fade-in-up delay-200">
                            <div className="space-y-8">
                                <h3 className="text-4xl md:text-5xl font-bold font-heading tracking-tighter text-[var(--secondary)]">
                                    {sips.host.name.split(',')[0]}
                                </h3>
                                <p className="text-xl font-bold font-heading text-[var(--primary)] uppercase tracking-[0.2em]">
                                    {sips.host.name.split(',').slice(1).join(',')}
                                </p>
                                <p className="text-2xl font-serif text-[var(--secondary)] leading-tight font-semibold italic border-l-4 border-[var(--primary)] pl-8 py-2">
                                    &ldquo;I help successful CEOs turn the chaos of growth into the clarity of a high-performance system.&rdquo;
                                </p>
                                <p className="text-xl font-serif text-[var(--secondary)] leading-relaxed opacity-90">
                                    {sips.host.bio}
                                </p>
                            </div>

                            <div className="pt-12 border-t border-gray-100">
                                <h4 className="text-lg font-heading font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-6">
                                    {sips.aboutMindFinders.h2}
                                </h4>
                                <p className="text-xl font-serif text-[var(--secondary)] leading-relaxed opacity-90">
                                    {sips.aboutMindFinders.body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About MindFinders AI - Visionary Spotlight (Premium Dark Mode Pivot) */}
            <section className="py-32 px-4 bg-black text-white relative overflow-hidden">
                {/* Background Textural Interest */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-[0.05]" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <span className="text-[var(--primary)] font-bold tracking-[0.4em] uppercase text-xs block mb-6">
                            THE ARCHITECTURE OF GROWTH
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-none mb-10 max-w-4xl mx-auto">
                            {sips.aboutMindFindersAI.h2}
                        </h2>
                        <div className="w-24 h-1.5 bg-[var(--primary)] mx-auto rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Narrative Column */}
                        <div className="space-y-8 animate-fade-in-up delay-200">
                            {sips.aboutMindFindersAI.body.slice(0, 4).map((para, i) => (para && (
                                <p key={i} className="text-xl font-serif text-white/80 leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-[var(--primary)] first-letter:mr-2 first-letter:float-left">
                                    {para}
                                </p>
                            )))}
                        </div>

                        {/* System Spotlight Column */}
                        <div className="relative animate-fade-in-up delay-400">
                            <div className="absolute -inset-4 bg-[var(--primary)]/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-3xl shadow-2xl">
                                {sips.aboutMindFindersAI.body.slice(4).map((para, i) => (para && (
                                    <div key={i} className="space-y-6">
                                        <p className={`text-2xl md:text-3xl font-heading font-bold leading-tight ${i === 0 ? 'text-[var(--primary)]' : 'text-white'}`}>
                                            {para}
                                        </p>
                                        <div className="h-px w-full bg-white/10" />
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>

                    {/* Strategic Bridge CTA */}
                    <div className="mt-20 text-center animate-fade-in-up">
                        <div className="inline-block py-10 px-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl max-w-2xl mx-auto shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-white">
                                Join us for a highly profitable evening
                            </h3>
                            <button className="group relative px-10 py-5 bg-[var(--primary)] text-white rounded-lg font-bold text-xl hover:bg-[#d01829] transition-all transform hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_30px_rgba(219,24,41,0.3)]">
                                <Link href="/ceo-sips-and-smoothies/reservation" className="absolute inset-0 z-20"></Link>
                                <span className="relative z-10">{sips.howToAttend.cta}</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Thought - Optimized Content Closure */}
            <section className="py-16 px-4 bg-gray-50 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
                <div className="container mx-auto max-w-2xl relative z-10">
                    <h2 className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed whitespace-pre-line text-[var(--secondary)]">
                        &ldquo;{sips.finalThought.body}&rdquo;
                    </h2>
                    <div className="mt-12 w-12 h-1 bg-[var(--primary)] mx-auto opacity-20" />
                </div>
            </section>
        </main>
    );
}
