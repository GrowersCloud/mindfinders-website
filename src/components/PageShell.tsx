import React from 'react';

interface PageShellProps {
    title: string;
    subtitle?: string | string[];
    children: React.ReactNode;
    className?: string;
}

export default function PageShell({ title, subtitle, children, className = "" }: PageShellProps) {
    return (
        <main className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[var(--accent)] text-white py-16 px-4 text-center">
                <div className="container mx-auto">
                    <h1 className="text-[length:var(--h1-size)] font-bold mb-4 font-heading">
                        {title}
                    </h1>
                    {subtitle && (
                        <div className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                            {Array.isArray(subtitle) ? (
                                subtitle.map((line, i) => (
                                    <p key={i} className="mb-2 last:mb-0">
                                        {line}
                                    </p>
                                ))
                            ) : (
                                <p>{subtitle}</p>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Main Content */}
            <section className={`flex-grow bg-[var(--background)] py-12 ${className}`}>
                <div className="container mx-auto">
                    {children}
                </div>
            </section>
        </main>
    );
}
