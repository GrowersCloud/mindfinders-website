"use client";

import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";

/**
 * Click-to-open registration modal for the AI CEO Sips page.
 *
 * Deliberately a modal and not an inline embed: the GHL widget is only mounted once the
 * visitor asks for it, so the landing page never pays for a third-party iframe it may not
 * need. There is no page-level <script> tag either - this component injects GHL's
 * form_embed.js itself, once per page session, the first time it opens. Pasting GHL's
 * own snippet (its <iframe> markup plus an eager <script src=".../form_embed.js">) into
 * the page is exactly what that avoids; we take the embed's src and nothing else.
 *
 * The widget is a GHL *form*, not a booking calendar. form_embed.js drives auto-resize
 * for /widget/form/ the same way it does for /widget/booking/, so there is no height
 * handling to special-case.
 */

// MindFinders' GHL is hosted on the GrowersCloud domain - that is intentional, not a
// leftover. The two sites use different widget IDs, so submissions are already
// distinguishable by which widget they arrived through; no source parameter is needed.
const GHL_ORIGIN = "https://links.growerscloud.ai";
const FORM_IFRAME_SRC = `${GHL_ORIGIN}/widget/form/fehFJkNbVkqrJVrDORNO`;
const FORM_EMBED_SCRIPT = `${GHL_ORIGIN}/js/form_embed.js`;

// If the widget has not painted by now, assume it is not coming and show a way through.
const LOAD_TIMEOUT_MS = 10000;

type LoadState = "loading" | "loaded" | "failed";

interface SipsBookingModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
}

const DEFAULT_TITLE = "Request an Invitation";

/**
 * The dialog only exists while it is open, so its load state resets on unmount rather
 * than being reset by an effect on the way down. Keeps the iframe out of the DOM - and
 * off the network - until a visitor actually asks for the form.
 */
export default function SipsBookingModal({ open, onClose, title }: SipsBookingModalProps) {
    if (!open) return null;
    return <BookingDialog onClose={onClose} title={title ?? DEFAULT_TITLE} />;
}

function BookingDialog({ onClose, title }: { onClose: () => void; title: string }) {
    const [loadState, setLoadState] = useState<LoadState>("loading");
    const panelRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // ESC to dismiss, and lock the page behind the modal so the backdrop doesn't scroll.
    useEffect(() => {
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
    }, [onClose]);

    // Inject GHL's helper script on first open, then leave it in place for the session.
    useEffect(() => {
        if (document.querySelector('script[data-ghl-form-script="true"]')) return;

        const script = document.createElement("script");
        script.src = FORM_EMBED_SCRIPT;
        script.async = true;
        script.dataset.ghlFormScript = "true";
        document.body.appendChild(script);
    }, []);

    // Give the iframe a deadline; handleIframeLoad clears it if the form arrives first.
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setLoadState((current) => (current === "loading" ? "failed" : current));
        }, LOAD_TIMEOUT_MS);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // GHL posts resize and completion events from its own origin. Anything from elsewhere
    // is not ours, so check the origin before reading the payload.
    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.origin !== GHL_ORIGIN) return;
            // No analytics is loaded on this site today, so there is nothing to fire here.
            // When GA4 or a pixel is added, this is where a form_submitted event belongs.
        }

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    function handleIframeLoad() {
        setLoadState("loaded");
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

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

                <div className="relative flex-1 bg-white overflow-y-auto">
                    {/*
                        GHL widgets hide themselves via inline styles set by form_embed.js
                        (opacity: 0; visibility: hidden; pointer-events: none; left: -9999px).
                        The iframe needs a unique id and an !important override targeting that
                        id, or the widget loads and stays invisible.

                        height: 100% fills the modal body and lets form_embed.js resize the
                        frame to the form's real height over postMessage. Do not give it a
                        fixed minHeight - if the floor is taller than the content, form_embed
                        cannot shrink below it and GHL centres its card in the oversized frame,
                        leaving dead space above the form and forcing the modal to scroll. Do
                        not position: absolute it either - a pinned iframe cannot grow for
                        taller forms.
                    */}
                    <style>{`
                        iframe#ghl-sips-form-iframe {
                            opacity: 1 !important;
                            visibility: visible !important;
                            pointer-events: auto !important;
                            position: static !important;
                            left: auto !important;
                            top: auto !important;
                        }
                    `}</style>

                    {loadState !== "failed" && (
                        <iframe
                            src={FORM_IFRAME_SRC}
                            id="ghl-sips-form-iframe"
                            title={title}
                            onLoad={handleIframeLoad}
                            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                        />
                    )}

                    {loadState === "loading" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-10">
                            <div className="w-12 h-12 border-[4px] border-[var(--primary)]/30 border-t-[var(--primary)] rounded-full animate-spin" />
                            <p className="mt-4 text-sm font-heading font-bold uppercase tracking-widest text-[var(--secondary)]">
                                Loading form…
                            </p>
                        </div>
                    )}

                    {loadState === "failed" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center bg-white">
                            <div className="max-w-md">
                                <h3 className="text-xl md:text-2xl font-bold font-heading text-[var(--secondary)] mb-2">
                                    Trouble loading the form
                                </h3>
                                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                                    The registration form is taking too long to load. Open it in a new
                                    tab instead.
                                </p>
                                <a
                                    href={FORM_IFRAME_SRC}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-6 py-3 font-bold border-[3px] border-[var(--secondary)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-heading uppercase tracking-wide text-sm"
                                >
                                    Open the form in a new tab <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
