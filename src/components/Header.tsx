"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Mobile accordion states
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileAgentsOpen, setMobileAgentsOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileAgentsOpen(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="MindFinders Logo"
                        width={200}
                        height={50}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center h-full">
                    <Link
                        href="/"
                        className={`flex items-center h-full border-b-2 px-1 transition-colors ${isActive('/') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent hover:text-[var(--primary)]'}`}
                    >
                        HOME
                    </Link>

                    {/* Services Mega Menu */}
                    <div className="group relative h-full flex items-center">
                        <Link
                            href="/services"
                            className={`flex items-center h-full border-b-2 px-1 transition-colors cursor-pointer ${isActive('/services') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent group-hover:text-[var(--primary)]'}`}
                        >
                            SERVICES <span className="ml-1 text-xs">▼</span>
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white border border-[var(--border)] shadow-[var(--shadow-deep)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-8 grid grid-cols-3 gap-8">
                            {/* Col 1 */}
                            <div>
                                <h3 className="font-bold mb-4 text-[var(--primary)] uppercase text-sm tracking-wider">AI Solutions</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/services#voice-ai" className="hover:text-[var(--primary)] block py-1">Voice AI & Virtual Assistants</Link></li>
                                    <li><Link href="/services#smart-automations" className="hover:text-[var(--primary)] block py-1">Smart Automations & Workflows</Link></li>
                                    <li><Link href="/services#funnel-optimization" className="hover:text-[var(--primary)] block py-1">Funnel & CRM Optimization</Link></li>
                                </ul>
                            </div>

                            {/* Col 2 */}
                            <div>
                                <h3 className="font-bold mb-4 text-[var(--primary)] uppercase text-sm tracking-wider">AI-Enabled Workforce</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/services#workforce-optimization" className="hover:text-[var(--primary)] block py-1">Workforce & Talent Optimization</Link></li>
                                    <li><Link href="/services#executive-advisory" className="hover:text-[var(--primary)] block py-1">Executive Advisory</Link></li>
                                    <li><Link href="/services#change-management" className="hover:text-[var(--primary)] block py-1">Org Change Management</Link></li>
                                </ul>
                            </div>

                            {/* Col 3 */}
                            <div>
                                <h3 className="font-bold mb-4 text-[var(--primary)] uppercase text-sm tracking-wider">Human Capital</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/services#hcm" className="hover:text-[var(--primary)] block py-1">HCM for Execution</Link></li>
                                    <li><Link href="/services#talent-ecosystem" className="hover:text-[var(--primary)] block py-1">AI-Ready Talent Ecosystem</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* AI Agents Dropdown */}
                    <div className="group relative h-full flex items-center">
                        <Link
                            href="/ai-agents"
                            className={`flex items-center h-full border-b-2 px-1 transition-colors cursor-pointer ${isActive('/ai-agents') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent group-hover:text-[var(--primary)]'}`}
                        >
                            AI AGENTS <span className="ml-1 text-xs">▼</span>
                        </Link>

                        <div className="absolute top-full left-0 w-64 bg-white border border-[var(--border)] shadow-[var(--shadow-deep)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-4">
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/ai-agents#ai-interview-agent" className="hover:text-[var(--primary)] block py-1">AI Interview Agents</Link></li>
                                <li><Link href="/ai-agents#database-reactivation" className="hover:text-[var(--primary)] block py-1">AI Database Reactivation</Link></li>
                                <li><Link href="/ai-agents#speed-to-lead" className="hover:text-[var(--primary)] block py-1">AI Speed to Lead</Link></li>
                                <li><Link href="/ai-agents#out-of-hours" className="hover:text-[var(--primary)] block py-1">AI Out of Hours</Link></li>
                                <li><Link href="/ai-agents#google-reviews" className="hover:text-[var(--primary)] block py-1">AI Google Reviews</Link></li>
                                <li><Link href="/ai-agents#voice" className="hover:text-[var(--primary)] block py-1">AI Voice Agents</Link></li>
                                <li><Link href="/ai-agents#abandoned-cart" className="hover:text-[var(--primary)] block py-1">AI Abandoned Cart</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Link
                        href="/training-and-talent"
                        className={`flex items-center h-full border-b-2 px-1 transition-colors ${isActive('/training-and-talent') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent hover:text-[var(--primary)]'}`}
                    >
                        TRAINING & TALENT
                    </Link>

                    <Link
                        href="/about"
                        className={`flex items-center h-full border-b-2 px-1 transition-colors ${isActive('/about') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent hover:text-[var(--primary)]'}`}
                    >
                        ABOUT
                    </Link>

                    <Link
                        href="/get-started"
                        className="ml-4 px-5 py-2 border border-[var(--primary)] text-[var(--primary)] rounded hover:bg-[var(--primary)] hover:text-white transition-colors font-medium"
                    >
                        GET STARTED
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-[var(--accent)]"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    {/* Hamburger Icon */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[60] transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <nav className="relative w-4/5 max-w-sm h-full bg-white ml-auto flex flex-col p-6 shadow-2xl overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <span className="font-bold text-xl text-[var(--accent)]">Menu</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link href="/" className="text-lg font-medium border-b border-gray-100 pb-2">HOME</Link>

                        {/* Mobile Services */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="flex justify-between items-center w-full text-lg font-medium border-b border-gray-100 pb-2"
                            >
                                SERVICES <span>{mobileServicesOpen ? '-' : '+'}</span>
                            </button>
                            <div className={`${mobileServicesOpen ? 'block' : 'hidden'} pl-4 py-2 space-y-3`}>
                                <Link href="/services" className="block text-sm text-[var(--primary)] font-semibold mb-2">View All Services</Link>
                                <div className="space-y-2">
                                    <p className="text-xs uppercase text-gray-400 font-bold">AI Solutions</p>
                                    <Link href="/services#voice-ai" className="block text-sm pl-2">Voice AI & Virtual Assistants</Link>
                                    <Link href="/services#smart-automations" className="block text-sm pl-2">Smart Automations</Link>
                                    <Link href="/services#funnel-optimization" className="block text-sm pl-2">Funnel & CRM</Link>
                                </div>
                                <div className="space-y-2 mt-4">
                                    <p className="text-xs uppercase text-gray-400 font-bold">Workforce Solutions</p>
                                    <Link href="/services#workforce-optimization" className="block text-sm pl-2">Workforce Optimization</Link>
                                    <Link href="/services#executive-advisory" className="block text-sm pl-2">Executive Advisory</Link>
                                    <Link href="/services#change-management" className="block text-sm pl-2">Change Management</Link>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Agents */}
                        <div>
                            <button
                                onClick={() => setMobileAgentsOpen(!mobileAgentsOpen)}
                                className="flex justify-between items-center w-full text-lg font-medium border-b border-gray-100 pb-2"
                            >
                                AI AGENTS <span>{mobileAgentsOpen ? '-' : '+'}</span>
                            </button>
                            <div className={`${mobileAgentsOpen ? 'block' : 'hidden'} pl-4 py-2 space-y-2`}>
                                <Link href="/ai-agents" className="block text-sm text-[var(--primary)] font-semibold mb-2">View All Agents</Link>
                                <Link href="/ai-agents#ai-interview-agent" className="block text-sm">AI Interview Agents</Link>
                                <Link href="/ai-agents#database-reactivation" className="block text-sm">Database Reactivation</Link>
                                <Link href="/ai-agents#speed-to-lead" className="block text-sm">Speed to Lead</Link>
                                <Link href="/ai-agents#out-of-hours" className="block text-sm">Out of Hours</Link>
                            </div>
                        </div>

                        <Link href="/training-and-talent" className="text-lg font-medium border-b border-gray-100 pb-2">TRAINING & TALENT</Link>
                        <Link href="/about" className="text-lg font-medium border-b border-gray-100 pb-2">ABOUT</Link>

                        <Link href="/get-started" className="mt-4 text-center px-5 py-3 bg-[var(--primary)] text-white rounded font-medium">
                            GET STARTED
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
