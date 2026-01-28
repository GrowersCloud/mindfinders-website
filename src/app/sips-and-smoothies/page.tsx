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
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0">
                    <Image
                        src="/sips-hero.png"
                        alt="Upscale Social Cocktail Party"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                <div className="container relative z-10 px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6 animate-fade-in-up">
                            {sips.hero.h1}
                        </h1>
                        <p className="text-xl md:text-3xl font-heading mb-8 text-gray-100 max-w-2xl animate-fade-in-up delay-100">
                            {sips.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up delay-200">
                            {sips.hero.details.map((detail, i) => (
                                <div key={i} className="flex items-center text-lg font-medium">
                                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3" />
                                    {detail}
                                </div>
                            ))}
                        </div>
                        <p className="text-lg md:text-xl font-serif text-gray-200 mb-10 max-w-2xl animate-fade-in-up delay-300 italic">
                            {sips.hero.description}
                        </p>
                        <button className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105 active:scale-95 animate-fade-in-up delay-300">
                            {sips.hero.cta}
                        </button>
                    </div>
                </div>
            </section>

            {/* Social Context Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--primary)] font-bold tracking-[0.2em] uppercase text-sm block mb-4">
                                EXECUTIVE SOCIAL
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8">
                                {sips.socialContext.h2}
                            </h2>
                            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                                {sips.socialContext.body}
                            </p>
                            <p className="text-lg text-[var(--text-muted)] italic font-serif">
                                {sips.socialContext.footer}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-10 rounded-2xl shadow-natural border-t-4 border-[var(--primary)]">
                            <h3 className="text-2xl font-bold font-heading mb-6 uppercase tracking-wider">You&apos;ll enjoy:</h3>
                            <ul className="space-y-4">
                                {sips.socialContext.offerings.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-6 h-6 text-[var(--primary)] mt-1 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-lg md:text-xl font-serif">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            {sips.benefits.h2}
                        </h2>
                        <p className="text-xl font-serif text-[var(--text-muted)] leading-relaxed">
                            {sips.benefits.intro}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {sips.benefits.items.map((benefit, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-natural border-t-4 border-[var(--primary)] flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                    <span className="text-[var(--primary)] font-bold text-xl">{i + 1}</span>
                                </div>
                                <p className="text-lg md:text-xl font-serif font-medium leading-snug">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-2xl font-heading font-bold italic text-[var(--secondary)]">
                            &ldquo;{sips.benefits.footer}&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience & Demos Section */}
            <section className="py-24 px-4 bg-white overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-10 leading-tight">
                                {sips.experience.h2}
                            </h2>
                            <div className="mb-12">
                                <h3 className="text-3xl font-serif italic mb-4">{sips.experience.flow.title}</h3>
                                <p className="text-xl font-serif text-[var(--text-muted)] leading-relaxed">
                                    {sips.experience.flow.text}
                                </p>
                            </div>
                        </div>

                        <div className="bg-[var(--secondary)] text-white p-12 rounded-2xl shadow-deep relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                                </svg>
                            </div>
                            <span className="inline-block px-4 py-1 bg-[var(--primary)] text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                THE HIGHLIGHT
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 leading-tight">
                                {sips.experience.demos.title}
                            </h3>
                            <p className="text-xl text-gray-300 font-serif leading-relaxed mb-8">
                                {sips.experience.demos.text}
                            </p>
                            <p className="text-2xl font-heading font-bold italic text-[var(--primary)] border-t border-gray-700 pt-6">
                                {sips.experience.demos.footer}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Referral Networking Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-deep aspect-[4/3]">
                            <Image
                                src="/referral-partnership.png"
                                alt="CEOs Networking"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-8">
                                {sips.referrals.h2}
                            </h2>
                            <p className="text-xl font-serif leading-relaxed mb-6">
                                {sips.referrals.body}
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-natural border-l-4 border-[var(--primary)] mb-8">
                                <p className="text-lg md:text-xl font-serif italic text-[var(--secondary)] leading-relaxed">
                                    {sips.referrals.valueProp}
                                </p>
                            </div>
                            <div className="space-y-6">
                                {sips.referrals.scenarios.map((scenario, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0 mr-4 mt-1 font-bold">
                                            {i + 1}
                                        </div>
                                        <p className="text-lg md:text-xl font-serif">{scenario}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-xl font-heading font-bold text-[var(--secondary)]">
                                {sips.referrals.conclusion}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Matchmaking */}
            <section className="py-24 px-4 bg-[var(--secondary)] text-white">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                        {sips.matchmaking.h2}
                    </h2>
                    <p className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed mb-8">
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
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-8">
                                {sips.audience.h2}
                            </h2>
                            <ul className="space-y-4">
                                {sips.audience.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="w-6 h-6 border-2 border-[var(--primary)] rounded-full shrink-0 mr-4 mt-1 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                                        </div>
                                        <span className="text-lg md:text-xl font-serif">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 bg-[var(--primary)]/10 p-6 rounded-xl border border-[var(--primary)]/20">
                                <p className="text-xl font-heading font-bold text-[var(--primary)] italic text-center">
                                    {sips.audience.limitation}
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-12 text-center shadow-natural">
                            <h3 className="text-3xl font-bold font-heading mb-8 uppercase tracking-widest">{sips.details.h2}</h3>
                            <div className="space-y-6 text-xl">
                                <div className="border-b border-gray-200 pb-4">
                                    <span className="text-xs uppercase text-[var(--text-muted)] font-bold tracking-widest block mb-1">Event</span>
                                    <span className="font-bold">{sips.details.event}</span>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <span className="text-xs uppercase text-[var(--text-muted)] font-bold tracking-widest block mb-1">Date & Time</span>
                                    <span className="font-bold">{sips.details.date} | {sips.details.time}</span>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <span className="text-xs uppercase text-[var(--text-muted)] font-bold tracking-widest block mb-1">Location</span>
                                    <span className="font-bold">{sips.details.location}</span>
                                </div>
                                <p className="text-[var(--text-muted)] italic leading-relaxed pt-2">
                                    {sips.details.amenities}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Attend */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                        {sips.howToAttend.h2}
                    </h2>
                    <p className="text-xl md:text-2xl font-serif text-[var(--text-muted)] leading-relaxed mb-12">
                        {sips.howToAttend.body}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                        {sips.howToAttend.steps.map((step, i) => (
                            <div key={i} className="flex-1">
                                <span className="text-4xl font-bold text-[var(--primary)] opacity-20 block mb-2 leading-none">0{i + 1}</span>
                                <p className="text-lg font-heading font-bold uppercase tracking-wider">{step}</p>
                            </div>
                        ))}
                    </div>
                    <button className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105">
                        {sips.howToAttend.cta}
                    </button>
                    <p className="text-lg font-serif italic text-[var(--text-muted)] mt-12">
                        {sips.howToAttend.alternative}
                    </p>
                </div>
            </section>

            {/* About Host Section */}
            <section className="py-24 px-4 bg-white border-t border-gray-100">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:col-span-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-deep aspect-[4/5] max-w-md mx-auto">
                                <Image
                                    src="/tim-booker-real.jpg"
                                    alt="Tim Booker"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <span className="text-[var(--primary)] font-bold tracking-[0.2em] uppercase text-sm block mb-4">
                                YOUR HOST
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                                {sips.host.name}
                            </h2>
                            <p className="text-xl font-serif text-[var(--text-muted)] leading-relaxed mb-10">
                                {sips.host.bio}
                            </p>

                            <hr className="my-12 border-gray-100" />

                            <h3 className="text-2xl font-bold font-heading mb-6 uppercase tracking-wider">{sips.aboutMindFinders.h2}</h3>
                            <p className="text-lg font-serif text-[var(--text-muted)] leading-relaxed mb-10">
                                {sips.aboutMindFinders.body}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About MindFinders AI (CEO focus) */}
            <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10 text-center uppercase tracking-widest leading-snug">
                        {sips.aboutMindFindersAI.h2}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            {sips.aboutMindFindersAI.body.slice(0, 4).map((para, i) => (para && (
                                <p key={i} className="text-lg font-serif text-[var(--text-muted)] leading-relaxed">
                                    {para}
                                </p>
                            )))}
                        </div>
                        <div className="space-y-6 bg-white p-8 rounded-2xl shadow-natural self-start">
                            {sips.aboutMindFindersAI.body.slice(4).map((para, i) => (para && (
                                <p key={i} className={`text-lg font-serif leading-relaxed ${i === 0 ? 'font-bold text-[var(--secondary)]' : 'text-[var(--text-muted)]'}`}>
                                    {para}
                                </p>
                            )))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Thought */}
            <section className="py-24 px-4 bg-black text-white text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-serif italic mb-12 leading-relaxed">
                        &ldquo;{sips.finalThought.body}&rdquo;
                    </h2>
                    <button className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg font-bold text-lg hover:bg-[#d01829] transition-all transform hover:scale-105">
                        {sips.finalThought.cta}
                    </button>
                    <div className="mt-16 pt-8 border-t border-gray-800">
                        <Image
                            src="/logo.png"
                            alt="MindFinders Logo"
                            width={150}
                            height={40}
                            className="mx-auto brightness-0 invert opacity-50"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
