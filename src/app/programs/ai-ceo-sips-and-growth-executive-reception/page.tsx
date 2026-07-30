"use client";

/**
 * AI CEO Sips & Growth Executive Reception — landing page.
 * CRO-optimized version: removed 3 redundant sections (Social Context, AI Matchmaking, Event Details),
 * merged the host sections into one "Who's Hosting" (Tim Booker on-site main host, Kelli Gilmore
 * on-site co-host & moderator, Samuel Salter featured speaker joining remotely), and reordered to a
 * direct-response sequence:
 *   Hero -> Referrals (lead benefit) -> Agenda (the "sales letter" body) -> Walk Away (skimmer recap)
 *   -> Audience + "You're a Fit If" -> Who's Hosting -> How to Attend -> Final Thought.
 *
 * PORTED FROM GROWERSCLOUD. Source of truth is
 * growerscloud.ai/programs/ai-ceo-sips-and-growth-executive-reception - if the two pages
 * ever disagree, GrowersCloud wins. Copy, layout and design are a literal port; only the
 * brand colours (#ED1B2F / #231F20) and fonts are MindFinders'. Do not reword the agenda
 * or "What You Walk Away With" copy - it is authored sales copy, and content.ts is the
 * only place it should ever be edited. See
 * frontend-next/docs/ai-ceo-sips-port-spec.md
 */

import Image from 'next/image';
import { content } from '@/lib/content';
import { useState } from 'react';
import SipsBookingModal from '@/components/SipsBookingModal';

const sips = content.sipsAndSmoothies;

// Shapes inferred from content.ts rather than declared, so a change to the copy structure
// surfaces here at build time instead of silently rendering undefined.
type AgendaItem = (typeof sips.eveningProgram.items)[number];
type WalkAwayItem = (typeof sips.walkAway.items)[number];

// Bio copy marks emphasis with **double asterisks**. Split on the markers and wrap the
// odd-indexed segments in <strong> — avoids dangerouslySetInnerHTML for author-controlled copy.
function renderEmphasis(text: string) {
    return text.split('**').map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

// "Request an Invitation" opens the GHL form in a click-to-open modal - never an eager
// inline iframe, and no page-level <script> tag. SipsBookingModal injects GHL's
// form_embed.js itself, once, the first time it opens.

export default function SipsAndGrowthExecutiveReceptionPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);

    // Repeating conversion prompt closing out each section. The page is long — especially on a
    // phone — so a reader who is sold at any point can act there instead of scrolling back to the
    // hero or on to the footer. Full-width on mobile for an easy thumb target, auto width from sm.
    const sectionCta = () => (
        <div className="mt-16 flex justify-center px-4">
            <button
                type="button"
                onClick={openBooking}
                aria-haspopup="dialog"
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#ED1B2F] text-[#231F20] rounded-none font-bold text-lg sm:text-xl hover:bg-[#C4162A] transition-all transform hover:scale-105 active:scale-95 overflow-hidden shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20] inline-block"
            >
                <span className="relative z-10">{sips.howToAttend.cta}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
        </div>
    );

    return (
        <main className="sips-page min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden bg-[#231F20] text-[#F2F1EB]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sips-hero-polo-casual.webp"
                        alt="Upscale Social Executive Reception"
                        fill
                        className="object-cover opacity-60 md:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 px-4 mx-auto w-full max-w-[1600px]">
                    <div className="max-w-4xl lg:max-w-7xl">
                        {sips.hero.eyebrow && (
                            <div className="inline-block mb-6 animate-fade-in-up">
                                <span className="text-xs font-bold uppercase tracking-[0.4em] bg-white/10 border border-[#231F20] px-6 py-2.5 rounded-none text-[#ED1B2F] shadow-[6px_6px_0px_0px_#231F20]">
                                    {sips.hero.eyebrow}
                                </span>
                            </div>
                        )}

                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-heading leading-[0.85] mb-6 animate-fade-in-up tracking-tighter">
                            {Array.isArray(sips.hero.h1) ? sips.hero.h1.map((line, i) => (
                                <span key={i} className={`block leading-[0.85] ${i === 0 ? "text-[#ED1B2F]" : "text-white"} ${i === 2 ? "text-3xl sm:text-5xl md:text-7xl lg:text-8xl mt-2 md:mt-3 lg:mt-4" : ""}`}>
                                    {line}
                                </span>
                            )) : sips.hero.h1}
                        </h1>

                        <div className="text-lg md:text-2xl font-heading mb-4 text-gray-200 max-w-2xl animate-fade-in-up delay-100 border-l-2 border-[#ED1B2F] pl-6 py-2 whitespace-pre-line">
                            {sips.hero.subtitle}
                        </div>

                        {/* Reassurance line rescued from the deleted "Social Context" section */}
                        <p className="text-base md:text-lg text-[#ED1B2F] font-bold mb-8 max-w-2xl animate-fade-in-up delay-100 pl-6">
                            A social, peer-level evening — not a pitch, not a sales event.
                        </p>

                        {/* Ticket-style Details */}
                        <div className="flex flex-wrap items-center gap-y-6 gap-x-12 mb-8 animate-fade-in-up delay-200 bg-white/5 border border-[#231F20] p-6 md:p-8 rounded-none max-w-fit">
                            {sips.hero.details.map((detail, i) => (
                                <div key={i} className={`relative ${i === 0 ? "pr-0 md:pr-12" : ""}`}>
                                    <span className="text-[11px] md:text-[10px] uppercase tracking-[0.3em] text-[#ED1B2F] font-bold block mb-2">
                                        {i === 0 ? "When" : "Where"}
                                    </span>
                                    {/* At text-lg, "Thursday, August 6 | 5:00-8:00 PM" is 313px; plus the
                                        section px-4 and this box's p-6 that demanded a 395px viewport and
                                        forced horizontal scroll on every common phone (390/375/360).
                                        text-base on mobile fits it on one line down to ~360px, and nowrap
                                        is deferred to sm so the narrowest phones wrap instead of overflow. */}
                                    <div className="text-base sm:text-lg md:text-xl font-bold text-white sm:whitespace-nowrap">
                                        {detail}
                                    </div>
                                    {i === 0 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20" />}
                                </div>
                            ))}
                        </div>

                        <button type="button" onClick={openBooking} aria-haspopup="dialog" className="group relative px-10 py-5 bg-[#ED1B2F] text-[#231F20] rounded-none font-bold text-xl hover:bg-[#C4162A] transition-all transform hover:scale-105 active:scale-95 animate-fade-in-up delay-300 overflow-hidden shadow-[8px_8px_0px_0px_#231F20] inline-block">
                            <span className="relative z-10">{sips.hero.cta}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>

                        <p className="text-xs md:text-sm text-gray-400 mt-4 animate-fade-in-up delay-300 max-w-md">
                            Limited to CEOs running $3M-$1B companies. Application required.
                        </p>
                    </div>
                </div>
            </section>

            {/* [2] Executive Social — establishes the caliber/vibe of the event BEFORE the
                 strategic-partnership carrot, so the offer doesn't read as a straight pitch. */}
            <section className="py-24 px-4 bg-gray-50/50">
                <div className="sips-container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#ED1B2F] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                EXECUTIVE SOCIAL
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-[0.95] mb-8 tracking-tighter">
                                {/* The two lines are block-level for the stacked headline look, so their
                                    text nodes would otherwise concatenate as "An Executive Social.Not a Pitch."
                                    when read by a screen reader or copied. The explicit space keeps the
                                    sentence break intact in the accessible/text version on every viewport. */}
                                {Array.isArray(sips.socialContext.h2) ? sips.socialContext.h2.map((line: string, i: number, arr: string[]) => (
                                    <span key={i} className="block lg:whitespace-nowrap">
                                        {line}{i < arr.length - 1 ? ' ' : ''}
                                    </span>
                                )) : sips.socialContext.h2}
                            </h2>
                            <p className="text-xl md:text-2xl font-sans leading-relaxed mb-10 text-[#231F20]">
                                {sips.socialContext.body}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {sips.socialContext.offerings.map((item: string, i: number) => (
                                    <div key={i} className="group bg-white p-5 rounded-none border-l-4 border-[#ED1B2F] shadow-[4px_4px_0px_0px_#ED1B2F] border-[3px] border-[#231F20] hover:shadow-[4px_4px_0px_0px_#231F20] border-[3px] border-[#231F20] transition-all">
                                        <p className="text-base md:text-lg font-sans font-medium leading-snug group-hover:text-[#ED1B2F] transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xl text-[#231F20] italic font-sans font-semibold border-t border-gray-200 pt-8">
                                {sips.socialContext.footer}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#ED1B2F]/5 rounded-none rotate-3 scale-105" />
                            <Image
                                src="/executive_lounge_vibe_1769639909462.webp"
                                alt="Executive Social Atmosphere"
                                width={800}
                                height={1000}
                                className="relative z-10 rounded-none shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20] object-cover aspect-[4/5]"
                            />
                        </div>
                    </div>
                    {sectionCta()}
                </div>
            </section>

            {/* [4] AGENDA SECTION - ZIG-ZAG FLOWCHART (the "sales letter" body — moved up, right behind the lead benefit) */}
            <section className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-white z-10 overflow-hidden">
                <div className="sips-container mx-auto relative px-4 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 relative z-20">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[0.95] tracking-tighter text-balance">
                            Agenda
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[0.95] tracking-tighter text-balance">
                            {sips.eveningProgram.h2}
                        </h2>
                        {/* Wider measure + text-balance: at max-w-3xl this paragraph dropped a single
                            word ("live.") onto its own last line. See CLAUDE.md rule 7 — no widows. */}
                        <p className="text-lg md:text-xl font-sans text-[#231F20] font-medium leading-relaxed max-w-4xl mx-auto mb-10 text-balance">
                            {sips.eveningProgram.intro}
                        </p>

                        {/* Qualification gate - set the bar before the visitor invests time reading the agenda */}
                        <div className="bg-[#231F20] text-white max-w-3xl mx-auto p-5 md:p-6 border-[3px] border-[#ED1B2F] shadow-[8px_8px_0px_0px_#ED1B2F] text-left mb-12">
                            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#ED1B2F] font-bold mb-2">
                                You&apos;re a Fit If
                            </p>
                            <p className="text-base md:text-lg leading-relaxed">
                                You&apos;re the CEO (not VP/Director), your company does $3M&ndash;$1B in revenue, and you&apos;re excited about the potential AI offers to grow your business.
                            </p>
                        </div>
                    </div>

                    {(() => {
                        const renderNewsCard = (item: AgendaItem, index: number, imagePosition: 'left' | 'right' = 'left') => {
                            const images = item.imageDirection.split(',');

                            return (
                                <div key={index} className="w-full h-full bg-white border-[3px] border-[#231F20] shadow-[8px_8px_0px_0px_#231F20] group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_#ED1B2F] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ED1B2F] transition-all duration-300 overflow-hidden group">
                                    <div className="p-6 md:p-8 w-full h-full">

                                        <div className="block mb-4">
                                            <span className="font-black text-2xl md:text-3xl text-[#231F20] tracking-wider opacity-30 group-hover:opacity-100 group-hover:text-[#ED1B2F] transition-all duration-300 align-middle mr-4 inline-block">{item.number}</span>
                                            <span className="font-bold font-heading text-lg md:text-xl text-[#231F20] border-l-[3px] border-[#231F20] pl-4 py-1 leading-none align-middle inline-block">{item.time}</span>
                                        </div>

                                        {item.subtitle && (
                                            <div className="mb-3">
                                                <span className="inline-block px-3 py-1 font-bold text-xs tracking-[0.08em] sm:tracking-[0.2em] uppercase border-[2px] border-[#231F20] bg-gray-50 text-[#231F20] shadow-[3px_3px_0px_0px_#231F20]">
                                                    {item.subtitle}
                                                </span>
                                            </div>
                                        )}

                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading mb-3 text-[#231F20] leading-tight group-hover:text-[#ED1B2F] transition-colors duration-300">
                                            {/* Trailing space on every line but the last: the lines are separate
                                                block spans, so without it the text content reads
                                                "Executive Briefing #1:How AI..." with no space after the colon. */}
                                            {item.title.split('\n').map((line: string, i: number, arr: string[]) => (
                                                <span key={i} className={i > 0 ? 'block text-lg sm:text-xl lg:text-2xl mt-1 opacity-90' : ''}>
                                                    {line}{i < arr.length - 1 ? ' ' : ''}
                                                </span>
                                            ))}
                                        </h3>

                                        {/* Image sits AFTER the headline so the number, eyebrow, and h3 stay full
                                            width. Only the body copy wraps around it — floating it above the
                                            headline squeezed titles like "Arrival & Casual Networking" onto two
                                            cramped lines. Block on mobile, floated from sm+. */}
                                        {images.length > 0 && item.imageDirection.trim() !== '' && (
                                            <div className={`relative w-full h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-3 lg:mb-4 ${imagePosition === 'left' ? 'sm:float-left sm:mr-5 lg:mr-6' : 'sm:float-right sm:ml-5 lg:ml-6'} shadow-[4px_4px_0px_0px_#231F20] border-[3px] border-[#231F20] overflow-hidden group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_#ED1B2F] transition-all duration-300 bg-[#f8f9fa]`}>
                                                <Image src={images[0].trim()} alt={item.title} fill className="object-contain p-1 group-hover:scale-105 transition-transform duration-700" />
                                            </div>
                                        )}

                                        <div className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                                            {item.description}
                                        </div>

                                        {/* Clearfix */}
                                        <div className="clear-both"></div>
                                    </div>
                                </div>
                            );
                        };

                        const renderCard = (item: AgendaItem, index: number, isHalf: boolean) => {
                            const hasImage = item.imageDirection && item.imageDirection.trim() !== '';
                            const images = hasImage ? item.imageDirection.split(',') : [];

                            return (
                                <div key={index} className={`w-full h-full bg-white border-[3px] border-[#231F20] shadow-[8px_8px_0px_0px_#231F20] group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_#ED1B2F] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#ED1B2F] transition-all duration-300 overflow-hidden flex flex-col ${isHalf || !hasImage ? '' : 'lg:flex-row'} group`}>

                                    {/* Text Content */}
                                    <div className={`p-6 md:p-10 flex flex-col justify-center ${isHalf || !hasImage ? 'w-full' : 'lg:w-1/2 flex-grow'}`}>
                                        <div className="flex items-center gap-4 mb-5">
                                            <span className="font-black text-3xl md:text-4xl text-[#231F20] tracking-wider opacity-30 group-hover:opacity-100 group-hover:text-[#ED1B2F] transition-all duration-300">{item.number}</span>
                                            <span className="font-bold font-heading text-xl md:text-2xl text-[#231F20] border-l-[3px] border-[#231F20] pl-4 leading-none">{item.time}</span>
                                        </div>

                                        {item.subtitle && (
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 font-bold text-xs tracking-[0.08em] sm:tracking-[0.2em] uppercase border-[2px] border-[#231F20] bg-gray-50 text-[#231F20] shadow-[4px_4px_0px_0px_#231F20]">
                                                    {item.subtitle}
                                                </span>
                                            </div>
                                        )}

                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading mb-4 text-[#231F20] leading-tight group-hover:text-[#ED1B2F] transition-colors duration-300">
                                            {/* See note in renderNewsCard: the space keeps "Executive Briefing #1: How AI..."
                                                readable in the text/accessible version despite the block-span line break. */}
                                            {item.title.split('\n').map((line: string, i: number, arr: string[]) => (
                                                <span key={i} className={i > 0 ? 'block text-xl sm:text-2xl lg:text-3xl mt-4 sm:mt-6 opacity-90' : ''}>
                                                    {line}{i < arr.length - 1 ? ' ' : ''}
                                                </span>
                                            ))}
                                        </h3>

                                        <div className="text-lg text-gray-700 leading-relaxed font-medium">
                                            {item.description}
                                        </div>
                                    </div>

                                    {/* Image(s) */}
                                    {hasImage && (
                                        <div className={`${isHalf ? 'w-full border-t-[3px]' : 'w-full lg:w-1/2 border-t-[3px] lg:border-t-0 lg:border-l-[3px]'} border-[#231F20] bg-[#ED1B2F]/5 p-6 md:p-10 flex items-center justify-center`}>
                                            <div className={`relative w-full ${item.imageType === 'custom_concept' ? 'aspect-square' : 'h-full min-h-[300px] lg:min-h-[400px]'} ${item.imageType === 'logo_pair' || item.imageType === 'logo_triple' ? 'flex items-center justify-center gap-6' : 'shadow-[6px_6px_0px_0px_#231F20] border-[3px] border-[#231F20] overflow-hidden group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_#ED1B2F] transition-all duration-300'}`}>
                                                {images.map((imgSrc: string, i: number) => (
                                                    item.imageType === 'logo_pair' || item.imageType === 'logo_triple' ? (
                                                        <div key={i} className="relative flex-1 h-full max-h-[160px] py-2">
                                                            <Image src={imgSrc.trim()} alt="Logo" fill className="object-contain" />
                                                        </div>
                                                    ) : (
                                                        <Image key={i} src={imgSrc.trim()} alt={item.title} fill className={`${item.imageType === 'diagram' ? 'object-contain bg-white' : 'object-cover'} group-hover:scale-105 transition-transform duration-700`} />
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        };

                        return (
                            <div className="flex flex-col gap-10 md:gap-12 relative z-10 w-full">
                                {/* Row 1: Items 1 & 2 (Side by Side, News layout) */}
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12">
                                    {renderNewsCard(sips.eveningProgram.items[0], 0, 'right')}
                                    {renderNewsCard(sips.eveningProgram.items[1], 1, 'right')}
                                </div>

                                {/* Row 2: Item 3 (Full Width) */}
                                {renderCard(sips.eveningProgram.items[2], 2, false)}

                                {/* Row 3: Items 4 & 5 (Side by Side) */}
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12">
                                    {renderCard(sips.eveningProgram.items[3], 3, true)}
                                    {renderCard(sips.eveningProgram.items[4], 4, true)}
                                </div>

                                {/* Row 4: Item 6 (Full Width) */}
                                {renderCard(sips.eveningProgram.items[5], 5, false)}

                                {/* Row 5: Item 7 (Full Width) */}
                                {renderCard(sips.eveningProgram.items[6], 6, false)}
                            </div>
                        );
                    })()}
                    {sectionCta()}
                </div>
            </section>

            {/* [3] Referral Networking Section — LEAD BENEFIT (moved up: strongest, most differentiated) */}
            <section className="py-32 px-4 bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-[#ED1B2F]/5 rounded-none pointer-events-none" />
                <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-[#444]/5 rounded-none pointer-events-none" />

                <div className="sips-container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1 relative h-[500px] sm:h-[700px] lg:h-[950px] flex flex-col justify-between">
                            <div className="relative w-full h-[30%] z-20 group/img1 animate-fade-in-up">
                                <div className="absolute inset-0 bg-[#ED1B2F]/10 rounded-none rotate-1 scale-105 group-hover/img1:rotate-0 group-hover/img1:scale-105 transition-all duration-700" />
                                <div className="relative rounded-none overflow-hidden shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20] h-full">
                                    <Image src="/referral-networking-main-casual-v2.webp" alt="CEOs Networking" fill className="object-cover transform group-hover/img1:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>

                            <div className="flex gap-6 h-[55%]">
                                <div className="w-1/2 h-full pt-12 animate-fade-in-up delay-200">
                                    <div className="relative h-[85%] group/img2">
                                        <div className="relative rounded-none overflow-hidden shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20] h-full border-4 border-white">
                                            <Image src="/referral-partnership-luxury-polo.webp" alt="Luxury Dealership Referral" fill className="object-cover transform group-hover/img2:scale-105 transition-transform duration-1000" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 h-full pb-12 animate-fade-in-up delay-400">
                                    <div className="relative h-[85%] mt-auto group/img3">
                                        <div className="absolute inset-0 bg-[#ED1B2F]/5 rounded-none rotate-2 scale-105 group-hover/img3:rotate-0 transition-all duration-700" />
                                        <div className="relative rounded-none overflow-hidden shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20] h-full border-4 border-white">
                                            <Image src="/referral-partnership-financial-clean.webp" alt="Financial Services Referral" fill className="object-cover transform group-hover/img3:scale-105 transition-transform duration-1000" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full text-center mt-8 pb-4">
                                <button type="button" onClick={openBooking} aria-haspopup="dialog" className="group relative px-8 py-4 bg-[#ED1B2F] text-[#231F20] rounded-none font-bold text-lg hover:bg-[#C4162A] transition-all transform hover:scale-105 active:scale-95 overflow-hidden shadow-[6px_6px_0px_0px_#231F20] border-[3px] border-[#231F20] inline-block">
                                    <span className="relative z-10">{sips.howToAttend.cta}</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
                            <div className="animate-fade-in-up">
                                <span className="text-[#ED1B2F] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                    THE CEO NETWORK EFFECT
                                </span>
                                <h2 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-8 tracking-tighter text-balance">
                                    {sips.referrals.h2}
                                </h2>
                                <p className="text-xl md:text-2xl font-sans leading-relaxed text-[#231F20] font-medium max-w-3xl mb-6">
                                    {sips.referrals.body}
                                </p>
                                <ul className="space-y-4 max-w-3xl">
                                    {sips.referrals.bullets.map((bullet: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-2 w-2 h-2 rounded-full bg-[#ED1B2F] flex-shrink-0" />
                                            <span className="text-lg md:text-xl font-sans text-[#231F20] font-medium">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="animate-fade-in-up delay-100 relative group">
                                <div className="relative bg-white/80 p-6 sm:p-8 md:p-10 rounded-none shadow-[6px_6px_0px_0px_#231F20] border-[3px] border-[#231F20] border-l-[6px] border-[#ED1B2F] transform transition-transform duration-500 group-hover:-translate-y-1">
                                    <p className="text-xl md:text-2xl font-sans italic text-[#231F20] leading-tight font-semibold">
                                        &ldquo;{sips.referrals.valueProp}&rdquo;
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8 animate-fade-in-up delay-200">
                                <p className="text-lg md:text-xl font-heading font-bold uppercase tracking-[0.2em] text-gray-400">
                                    {sips.referrals.imagine}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {sips.referrals.scenarios.map((scenario: string, i: number) => (
                                        <div key={i} className="group/card bg-white p-8 rounded-none shadow-[4px_4px_0px_0px_#ED1B2F] border-[3px] border-[#231F20] hover:shadow-[8px_8px_0px_0px_#231F20] hover:border-[#ED1B2F]/20 transition-all duration-500 flex flex-col justify-between h-full">
                                            <div>
                                                <div className="w-12 h-12 rounded-none bg-[#ED1B2F]/5 flex items-center justify-center text-[#ED1B2F] mb-6 font-bold text-xl group-hover/card:bg-[#ED1B2F] group-hover/card:text-white transition-all duration-500">
                                                    0{i + 1}
                                                </div>
                                                <p className="text-lg md:text-xl font-sans text-[#231F20] leading-relaxed group-hover/card:text-[#ED1B2F] transition-colors duration-500">
                                                    {scenario}
                                                </p>
                                            </div>
                                            <div className="mt-8 h-1 w-12 bg-gray-100 group-hover/card:w-full group-hover/card:bg-[#ED1B2F] transition-all duration-700" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-200 animate-fade-in-up delay-300">
                                <p className="text-2xl md:text-3xl font-heading font-bold text-[#231F20] leading-tight">
                                    {sips.referrals.conclusion}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* [5] Walk Away Section — benefit recap after the argument */}
            <section className="py-24 px-4 bg-gray-50/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ED1B2F] to-transparent opacity-20" />

                <div className="sips-container mx-auto relative z-10">
                    <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight tracking-tighter text-balance">
                            {sips.walkAway.h2}
                        </h2>
                        {/* Wider measure + text-balance so the closing sentence doesn't strand two or
                            three words on the last line. See CLAUDE.md rule 7 — no widows. */}
                        <p className="text-xl md:text-2xl font-sans text-[#231F20] font-medium leading-relaxed max-w-4xl mx-auto text-balance">
                            {sips.walkAway.intro}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {sips.walkAway.items.map((benefit: WalkAwayItem, i: number) => (
                            <div key={i}
                                style={{ animationDelay: `${i * 150}ms` }}
                                className="group relative bg-white/80 p-6 sm:p-8 md:p-10 rounded-none shadow-[6px_6px_0px_0px_#231F20] border-[3px] border-[#231F20] hover:shadow-[8px_8px_0px_0px_#231F20] transition-all duration-500 border-t-4 border-[#ED1B2F] flex flex-col items-start text-left animate-fade-in-up">
                                <div className="w-16 h-16 bg-[#ED1B2F]/5 rounded-none flex items-center justify-center mb-8 group-hover:bg-[#ED1B2F] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    <svg className="w-8 h-8 text-[#ED1B2F] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-[#231F20] group-hover:text-[#ED1B2F] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-lg font-sans leading-relaxed text-[#231F20]">
                                    {benefit.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center animate-fade-in-up delay-500">
                        <div className="inline-block p-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8 w-1/3" />
                        <p className="text-2xl md:text-3xl font-heading font-bold italic text-[#231F20] max-w-2xl mx-auto leading-tight">
                            &ldquo;{sips.walkAway.footer}&rdquo;
                        </p>
                        {sectionCta()}
                    </div>
                </div>
            </section>

            {/* [6] Audience Section — who's in the room + scarcity + "You're a Fit If" */}
            <section className="py-24 px-4 bg-white">
                <div className="sips-container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#ED1B2F] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                                THE IDEAL PEER GROUP
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-none mb-10 tracking-tighter">
                                {sips.audience.h2}
                            </h2>
                            <div className="space-y-6 mb-10">
                                {sips.audience.items.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start bg-gray-50 p-6 rounded-none border-l-4 border-gray-200 hover:border-[#ED1B2F] transition-colors">
                                        <div className="w-6 h-6 bg-[#ED1B2F] rounded-none shrink-0 mr-4 mt-1 flex items-center justify-center shadow-[4px_4px_0px_0px_#231F20]">
                                            <div className="w-2 h-2 bg-white rounded-none" />
                                        </div>
                                        <span className="text-lg md:text-xl font-sans font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>



                            <div className="bg-[#ED1B2F] text-white p-8 rounded-none shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20] transform skew-x-[-2deg]">
                                <p className="text-xl md:text-2xl font-heading font-bold italic text-center skew-x-[2deg]">
                                    {sips.audience.limitation}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gray-200 rounded-none translate-x-4 translate-y-4" />
                            <Image src="/premium_invitation_envelope_white_1769640014114.webp" alt="Exclusive Invitation" width={800} height={800} className="relative z-10 rounded-none shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#231F20]" />
                        </div>
                    </div>
                    {sectionCta()}
                </div>
            </section>

            {/* [7] Invitation Process (How to Attend) */}
            <section className="py-10 px-4 bg-gray-50 border-y border-[#231F20] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#231F20 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                <div className="sips-container mx-auto text-center max-w-3xl relative z-10">
                    <div className="mb-6">
                        <span className="text-[#ED1B2F] font-bold tracking-[0.3em] uppercase text-[11px] md:text-[9px] block mb-2">
                            GETTING STARTED
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 tracking-tighter">
                            {sips.howToAttend.h2}
                        </h2>
                        <p className="text-base md:text-lg font-sans text-[#231F20] leading-relaxed max-w-xl mx-auto italic whitespace-pre-line">
                            &ldquo;{sips.howToAttend.body}&rdquo;
                        </p>
                    </div>

                    <div className="relative mb-8">
                        <div className="hidden lg:block absolute top-[22px] left-10 right-10 h-px bg-gray-200 z-0" />
                        <div className="grid lg:grid-cols-3 gap-4 relative z-10">
                            {sips.howToAttend.steps.map((step: string, i: number) => (
                                <div key={i} className="group flex flex-col items-center">
                                    <div className="w-11 h-11 rounded-none bg-white border border-gray-200 flex items-center justify-center text-[#231F20] font-bold text-base mb-3 shadow-[4px_4px_0px_0px_#ED1B2F] border-[3px] border-[#231F20] group-hover:border-[#ED1B2F] group-hover:text-[#ED1B2F] transition-all duration-500 relative z-20">
                                        {i + 1}
                                        {i === 0 && <div className="absolute inset-0 rounded-none bg-[#ED1B2F]/10 animate-ping -z-10" />}
                                    </div>
                                    <div className="bg-white p-4 rounded-none shadow-[4px_4px_0px_0px_#ED1B2F] border-[3px] border-[#231F20] w-full group-hover:border-[#ED1B2F]/20 transition-all">
                                        <p className="text-xs font-heading font-bold uppercase tracking-widest text-[#231F20]">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-6">
                        <div className="relative group">
                            <button type="button" onClick={openBooking} aria-haspopup="dialog" className="px-10 py-4 bg-[#ED1B2F] text-[#231F20] rounded-none font-bold text-lg hover:bg-[#C4162A] transition-all transform hover:scale-105 shadow-[6px_6px_0px_0px_#231F20] border-[3px] border-[#231F20] inline-block">
                                {sips.howToAttend.cta}
                            </button>
                            <div className="absolute -top-3 -right-6 bg-[#231F20] text-white text-[8px] font-bold px-2 py-0.5 rounded-none uppercase tracking-tighter shadow-[6px_6px_0px_0px_#231F20] border-[3px] border-[#231F20]">
                                30 Seconds
                            </div>
                        </div>
                        <p className="text-base md:text-lg font-sans italic text-gray-900 max-w-xl mx-auto pt-6 border-t border-gray-200 w-full whitespace-pre-line font-medium leading-relaxed">
                            {sips.howToAttend.alternative}
                        </p>
                    </div>
                </div>
            </section>

            {/* [8] WHO'S HOSTING — merged Evening Host + Co-Hosts. Tim = main host; MindFinders = local partner; Kelli = co-host; Samuel = remote. */}
            <section className="py-28 px-4 bg-white text-[#231F20] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #231F20 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="sips-container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter leading-none mb-6 max-w-4xl mx-auto text-[#231F20]">
                            Your Hosts For The Evening.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Hosted on the ground by <span className="text-[#231F20] font-bold">MindFinders</span>, a DMV-based firm, in partnership with <span className="text-[#231F20] font-bold">GrowersCloud.ai</span>.
                        </p>
                        <div className="w-24 h-1.5 bg-[#ED1B2F] mx-auto rounded-none mt-8" />
                    </div>

                    {/* Lead: Tim Booker — on-site main host */}
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 bg-white border-[3px] border-[#231F20] shadow-[8px_8px_0px_0px_#231F20] p-6 sm:p-8 md:p-10">
                        <div className="lg:col-span-4 relative group animate-fade-in-up">
                            <div className="relative rounded-none overflow-hidden shadow-[8px_8px_0px_0px_#231F20] border-[3px] border-[#ED1B2F] aspect-[4/5] bg-gray-50">
                                <Image src={sips.coHosts.mindFinders.photoPlaceholder} alt={sips.coHosts.mindFinders.leaderName} fill className="object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                        </div>
                        <div className="lg:col-span-8 space-y-5 animate-fade-in-up delay-100">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#231F20] bg-[#ED1B2F] px-4 py-1.5">
                                    On-Site Main Host
                                </span>
                                <div className="h-10 relative w-32">
                                    <Image src={sips.coHosts.mindFinders.logoPlaceholder} alt={sips.coHosts.mindFinders.name} fill className="object-contain object-left" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold font-heading tracking-tighter text-[#231F20]">
                                {sips.coHosts.mindFinders.leaderName}
                            </h3>
                            <p className="text-base font-bold font-heading text-[#ED1B2F] uppercase tracking-[0.2em]">
                                {sips.coHosts.mindFinders.leaderTitle}
                            </p>
                            <div className="text-lg font-sans text-gray-700 leading-relaxed">
                                {sips.coHosts.mindFinders.bio.split('\n\n').map((paragraph: string, i: number) => (
                                    <p key={i} className={i > 0 ? 'mt-4' : ''}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Co-hosts: Kelli (MindFinders, co-host) + Samuel (Growers Cloud, remote) */}
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Kelli Gilmore — COO, MindFinders (co-host) */}
                        <div className="bg-white border-[3px] border-[#231F20] p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#231F20]">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[10px] font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-[#ED1B2F] border-[2px] border-[#ED1B2F] px-3 py-1">
                                        On-Site Co-Host &amp; Moderator
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center border-b border-gray-200 pb-5">
                                    <div className="w-40 h-52 relative rounded-none overflow-hidden border-[3px] border-[#ED1B2F] shadow-[4px_4px_0px_0px_#231F20] shrink-0">
                                        <Image src={sips.eveningHost.photoPlaceholder} alt={sips.eveningHost.name} fill className="object-cover object-top" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#231F20]">{sips.eveningHost.name}</h3>
                                        <p className="text-xs font-bold tracking-widest text-[#ED1B2F] uppercase">{sips.eveningHost.title}</p>
                                    </div>
                                </div>
                                <div className="text-base font-sans leading-relaxed text-gray-700">
                                    {/* Trimmed Kelli's bio: keep the intro + what she does on the night; drop the long resume paragraph */}
                                    {sips.eveningHost.bio.split('\n\n')
                                        .filter((_: string, i: number) => i !== 1)
                                        .map((paragraph: string, i: number) => (
                                            <p key={i} className={i > 0 ? 'mt-3' : ''}>{paragraph}</p>
                                        ))}
                                </div>
                            </div>
                        </div>

                        {/* Samuel Salter — Growers Cloud (remote) */}
                        <div className="bg-white border-[3px] border-[#231F20] p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#231F20]">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="h-10 relative w-32">
                                        <Image src={sips.coHosts.growersCloud.logoPlaceholder} alt={sips.coHosts.growersCloud.name} fill className="object-contain object-left" />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase text-gray-600 border-[2px] border-gray-300 px-3 py-1">
                                        Featured Speaker, Joining Remotely
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center border-b border-gray-200 pb-5">
                                    <div className="w-40 h-52 relative rounded-none overflow-hidden border-[3px] border-[#ED1B2F] shadow-[4px_4px_0px_0px_#231F20] shrink-0">
                                        <Image src={sips.coHosts.growersCloud.photoPlaceholder} alt={sips.coHosts.growersCloud.leaderName} fill className="object-cover object-top" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#231F20]">{sips.coHosts.growersCloud.leaderName}</h3>
                                        <p className="text-xs font-bold tracking-widest text-[#ED1B2F] uppercase">{sips.coHosts.growersCloud.leaderTitle}</p>
                                    </div>
                                </div>
                                <div className="text-base font-sans leading-relaxed text-gray-700">
                                    {/* President Reagan and Sam Salter photo (block on mobile to prevent text squeezing, floated on sm+) */}
                                    <div className="relative w-full h-44 mb-4 sm:float-right sm:w-60 sm:h-40 sm:ml-5 sm:mb-3 rounded-none overflow-hidden border-[3px] border-[#231F20] shadow-[4px_4px_0px_0px_#ED1B2F]">
                                        <Image src={sips.coHosts.growersCloud.reaganPhoto} alt="President Reagan" fill className="object-cover object-top" />
                                    </div>
                                    {sips.coHosts.growersCloud.bio.split('\n\n').map((paragraph: string, i: number) => (
                                        <p key={i} className={i > 0 ? 'mt-3' : ''}>{renderEmphasis(paragraph)}</p>
                                    ))}
                                    <div className="clear-both"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {sectionCta()}
                </div>
            </section>
{/* [9] Final Thought — closing CTA. When/Where reassurance folded in here. */}
            <section className="py-32 px-4 bg-gray-50 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#231F20]" />
                <div className="sips-container mx-auto max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif italic mb-12 leading-relaxed whitespace-pre-line text-[#231F20]">
                        &ldquo;{sips.finalThought.body}&rdquo;
                    </h2>

                    <div className="flex flex-col items-center gap-6">
                        <button type="button" onClick={openBooking} aria-haspopup="dialog" className="group relative px-12 py-6 bg-[#ED1B2F] text-[#231F20] rounded-none font-bold text-2xl hover:bg-[#C4162A] transition-all transform hover:scale-105 shadow-[12px_12px_0px_0px_#231F20] border-[3px] border-[#231F20] inline-block w-full md:w-auto">
                            <span className="relative z-10">{sips.finalThought.cta}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        {/* When/Where reassurance rescued from the deleted Details section */}
                        <p className="text-sm font-bold text-[#231F20] uppercase tracking-widest mt-2">
                            {sips.details.date} · {sips.details.time} · The Capital Grille, McLean VA
                        </p>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-widest">
                            {sips.finalThought.microcopy}
                        </p>
                    </div>
                </div>
            </section>

            <SipsBookingModal open={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </main>
    );
}
