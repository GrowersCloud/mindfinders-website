"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * Click-to-open registration modal for the AI CEO Sips page.
 *
 * Deliberately a modal and not an inline embed: the GHL widget is only mounted once the
 * visitor asks for it, so the landing page never pays for a third-party iframe it may
 * not need. There is no page-level <script> tag either - this component injects GHL's
 * form_embed.js itself when it first opens.
 *
 * This commit lands the accessible shell only (backdrop, focus trap, ESC, scroll lock).
 * The GHL form goes in the "modal" commit that follows.
 */

interface SipsBookingModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
}

const DEFAULT_TITLE = "Request an Invitation";

export default function SipsBookingModal({
    open,
    onClose,
    title = DEFAULT_TITLE,
}: SipsBookingModalProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // ESC to dismiss, and lock the page behind the modal so the backdrop doesn't scroll.
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={(event) => {
                if (!panelRef.current?.contains(event.target as Node)) onClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sips-booking-modal-title"
        >
            <div
                ref={panelRef}
                className="flex flex-col w-full max-w-4xl h-[92vh] max-h-[92vh] bg-white rounded-none border-[3px] border-[var(--secondary)] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden"
            >
                <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b-[2px] border-[var(--secondary)] bg-white shrink-0">
                    <h2
                        id="sips-booking-modal-title"
                        className="font-heading font-bold text-base sm:text-lg text-[var(--secondary)]"
                    >
                        {title}
                    </h2>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="p-1 text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="relative flex-1 bg-white overflow-y-auto" />
            </div>
        </div>
    );
}
