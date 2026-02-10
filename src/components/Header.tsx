"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Submenu = 'services' | 'agents' | 'programs' | null;

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<Submenu>(null);
    const [mounted, setMounted] = useState(false);

    // Set mounted to true on client (for Portal SSR safety)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
    };

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

                    {/* Programs Mega Menu */}
                    <div className="group relative h-full flex items-center">
                        <Link
                            href="/programs"
                            className={`flex items-center h-full border-b-2 px-1 transition-colors cursor-pointer ${isActive('/programs') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent group-hover:text-[var(--primary)]'}`}
                        >
                            PROGRAMS <span className="ml-1 text-xs">▼</span>
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-[var(--border)] shadow-[var(--shadow-deep)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-8 grid grid-cols-2 gap-8">
                            {/* Col 1: Events */}
                            <div>
                                <h3 className="font-bold mb-4 text-[var(--primary)] uppercase text-sm tracking-wider">Events</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link href="/ceo-sips-and-smoothies" className="hover:text-[var(--primary)] block py-1">AI CEO Sips & Smoothies</Link></li>
                                    <li><Link href="/ai-executive-roundtable" className="hover:text-[var(--primary)] block py-1">AI Executive Roundtable</Link></li>
                                </ul>
                            </div>

                            {/* Col 2: Placeholder */}
                            <div>
                                <h3 className="font-bold mb-4 text-[var(--primary)] uppercase text-sm tracking-wider opacity-50">More to come</h3>
                                <ul className="space-y-2 text-sm opacity-50">
                                    <li className="py-1">Upcoming Program...</li>
                                </ul>
                            </div>
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
                    aria-expanded={mobileMenuOpen}
                    aria-label="Open menu"
                >
                    {/* Hamburger Icon */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu - Rendered via Portal to document.body */}
            {mounted && createPortal(
                <MobileMenu
                    isOpen={mobileMenuOpen}
                    activeSubmenu={activeSubmenu}
                    setActiveSubmenu={setActiveSubmenu}
                    closeMenu={closeMenu}
                />,
                document.body
            )}
        </header>
    );
}

// Mobile Menu Component - Rendered via Portal to escape header stacking context
function MobileMenu({
    isOpen,
    activeSubmenu,
    setActiveSubmenu,
    closeMenu,
}: {
    isOpen: boolean;
    activeSubmenu: 'services' | 'agents' | 'programs' | null;
    setActiveSubmenu: (submenu: 'services' | 'agents' | 'programs' | null) => void;
    closeMenu: () => void;
}) {
    return (
        <div
            className={`fixed inset-0 z-[100] bg-white lg:hidden flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
                }`}
            aria-hidden={!isOpen}
        >
            {/* Menu Header */}
            <div className="flex-shrink-0 flex justify-between items-center px-6 h-20 border-b border-gray-100">
                <span className="font-bold text-xl text-[var(--accent)]">Menu</span>
                <button
                    onClick={closeMenu}
                    className="p-2 -mr-2"
                    aria-label="Close menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Two-Level Navigation Container */}
            <div className="flex-1 relative overflow-hidden">
                {/* Level 1: Main Menu */}
                <div
                    className={`absolute inset-0 flex flex-col px-6 py-8 overflow-y-auto transition-transform duration-300 ease-out ${activeSubmenu ? '-translate-x-full' : 'translate-x-0'
                        }`}
                >
                    <nav className="flex flex-col gap-2">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="flex items-center py-4 text-xl font-medium border-b border-gray-100"
                        >
                            Home
                        </Link>

                        <button
                            onClick={() => setActiveSubmenu('services')}
                            className="flex items-center justify-between py-4 text-xl font-medium border-b border-gray-100 w-full text-left"
                        >
                            Services
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => setActiveSubmenu('agents')}
                            className="flex items-center justify-between py-4 text-xl font-medium border-b border-gray-100 w-full text-left"
                        >
                            AI Agents
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={() => setActiveSubmenu('programs')}
                            className="flex items-center justify-between py-4 text-xl font-medium border-b border-gray-100 w-full text-left"
                        >
                            Programs
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <Link
                            href="/training-and-talent"
                            onClick={closeMenu}
                            className="flex items-center py-4 text-xl font-medium border-b border-gray-100"
                        >
                            Training & Talent
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="flex items-center py-4 text-xl font-medium border-b border-gray-100"
                        >
                            About
                        </Link>
                    </nav>

                    <Link
                        href="/get-started"
                        onClick={closeMenu}
                        className="mt-8 text-center py-4 bg-[var(--primary)] text-white text-lg font-medium rounded-lg"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Level 2: Services Submenu */}
                <div
                    className={`absolute inset-0 flex flex-col px-6 py-8 overflow-y-auto transition-transform duration-300 ease-out ${activeSubmenu === 'services' ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <button
                        onClick={() => setActiveSubmenu(null)}
                        className="flex items-center gap-2 text-[var(--primary)] font-medium mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    <h2 className="text-2xl font-bold mb-6">Services</h2>

                    <nav className="flex flex-col gap-1">
                        <Link href="/services" onClick={closeMenu} className="py-3 text-lg text-[var(--primary)] font-semibold">
                            View All Services
                        </Link>

                        <p className="text-xs uppercase text-gray-400 font-bold mt-4 mb-2">AI Solutions</p>
                        <Link href="/services#voice-ai" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Voice AI & Virtual Assistants
                        </Link>
                        <Link href="/services#smart-automations" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Smart Automations & Workflows
                        </Link>
                        <Link href="/services#funnel-optimization" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Funnel & CRM Optimization
                        </Link>

                        <p className="text-xs uppercase text-gray-400 font-bold mt-4 mb-2">Workforce Solutions</p>
                        <Link href="/services#workforce-optimization" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Workforce Optimization
                        </Link>
                        <Link href="/services#executive-advisory" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Executive Advisory
                        </Link>
                        <Link href="/services#change-management" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Change Management
                        </Link>
                    </nav>
                </div>

                {/* Level 2: AI Agents Submenu */}
                <div
                    className={`absolute inset-0 flex flex-col px-6 py-8 overflow-y-auto transition-transform duration-300 ease-out ${activeSubmenu === 'agents' ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <button
                        onClick={() => setActiveSubmenu(null)}
                        className="flex items-center gap-2 text-[var(--primary)] font-medium mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    <h2 className="text-2xl font-bold mb-6">AI Agents</h2>

                    <nav className="flex flex-col gap-1">
                        <Link href="/ai-agents" onClick={closeMenu} className="py-3 text-lg text-[var(--primary)] font-semibold">
                            View All Agents
                        </Link>
                        <Link href="/ai-agents#ai-interview-agent" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            AI Interview Agents
                        </Link>
                        <Link href="/ai-agents#database-reactivation" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Database Reactivation
                        </Link>
                        <Link href="/ai-agents#speed-to-lead" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Speed to Lead
                        </Link>
                        <Link href="/ai-agents#out-of-hours" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Out of Hours
                        </Link>
                        <Link href="/ai-agents#google-reviews" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Google Reviews
                        </Link>
                        <Link href="/ai-agents#voice" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Voice Agents
                        </Link>
                        <Link href="/ai-agents#abandoned-cart" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            Abandoned Cart
                        </Link>
                    </nav>
                </div>

                {/* Level 2: Programs Submenu */}
                <div
                    className={`absolute inset-0 flex flex-col px-6 py-8 overflow-y-auto transition-transform duration-300 ease-out ${activeSubmenu === 'programs' ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <button
                        onClick={() => setActiveSubmenu(null)}
                        className="flex items-center gap-2 text-[var(--primary)] font-medium mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>

                    <h2 className="text-2xl font-bold mb-6">Programs</h2>

                    <nav className="flex flex-col gap-1">
                        <p className="text-xs uppercase text-gray-400 font-bold mb-2">Events</p>
                        <Link href="/ceo-sips-and-smoothies" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            AI CEO Sips & Smoothies
                        </Link>
                        <Link href="/ai-executive-roundtable" onClick={closeMenu} className="py-3 text-lg border-b border-gray-50">
                            AI Executive Roundtable
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
