import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "LMS Solution Demo | MindFinders",
    description: "Interactive demo of the MindFinders LMS solution.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function LmsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* 
        We reuse the main root layout's header/footer by default since this layout is nested.
        However, to give it a distinct "Portal" feel, we might want to override some styles 
        or stick to the content area.
      */}
            <main className="w-full">{children}</main>
        </div>
    );
}
