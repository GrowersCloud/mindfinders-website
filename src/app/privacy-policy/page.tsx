import PageShell from "@/components/PageShell";
import type { Metadata } from "next";
import { content } from "@/lib/content";

export const metadata: Metadata = {
    title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
    const { privacyPolicy } = content.legal;

    return (
        <PageShell title={privacyPolicy.h1}>
            <div className="container-standard prose max-w-none whitespace-pre-line">
                <p>{privacyPolicy.body}</p>
            </div>
        </PageShell>
    );
}
