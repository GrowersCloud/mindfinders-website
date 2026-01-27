import PageShell from "@/components/PageShell";
import { content } from "@/lib/content";

export default function TermsOfServicePage() {
    const { termsOfService } = content.legal;

    return (
        <PageShell title={termsOfService.h1}>
            <div className="container-standard prose max-w-none whitespace-pre-line">
                <p>{termsOfService.body}</p>
            </div>
        </PageShell>
    );
}
