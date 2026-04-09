import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI CEO Sips & Smoothies Event",
    description: "Exclusive networking for visionary CEOs. Learn how to leverage AI and growth strategies to dominate your market.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
