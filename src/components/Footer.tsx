import Link from 'next/link';
import Image from 'next/image';
import { content } from '@/lib/content';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-10 lg:gap-0">

                    {/* Left: Logo & Copyright */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="relative w-48 h-16 mb-4">
                            <Image
                                src="/logo-full.png"
                                alt="MindFinders Logo"
                                fill
                                className="object-contain lg:object-left"
                            />
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                            © {new Date().getFullYear()} MindFinders.<br />
                            All rights reserved.
                        </div>
                    </div>

                    {/* Center: Address */}
                    <div className="text-center font-serif text-[var(--secondary)]">
                        <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-2 font-heading">Corporate</h4>
                        <p className="leading-relaxed text-[15px]">
                            1120 Connecticut Ave NW Suite 500<br />
                            Washington, D.C. 20036
                        </p>
                        <a href="tel:2024002602" className="block mt-2 font-bold text-[var(--primary)] hover:underline">
                            (202) 400-2602
                        </a>
                    </div>

                    {/* Right: Navigation */}
                    <nav className="flex flex-col md:flex-row gap-6 text-sm font-medium">
                        <Link href="/faq" className="hover:text-[var(--primary)] transition-colors">
                            FAQ
                        </Link>
                        <Link href="/privacy-policy" className="hover:text-[var(--primary)] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-[var(--primary)] transition-colors">
                            Terms of Service
                        </Link>
                    </nav>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center space-y-2 border-t border-gray-200 pt-6">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-widest opacity-90">
                        MindFinders.ai is a Silver Partner of
                    </span>
                    <Link href="https://GrowersCloud.ai" target="_blank" rel="noopener noreferrer" className="relative w-72 h-20 transition-transform hover:scale-105 opacity-100 hover:opacity-80">
                        <Image
                            src="/growers-cloud-logo.png"
                            alt="Growers Cloud AI"
                            fill
                            className="object-contain"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
