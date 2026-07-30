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
 * The widget is a GHL *form*, not a booking calendar, and that difference does matter for
 * sizing. The port spec assumed form_embed.js would auto-resize /widget/form/ the same way
 * it does /widget/booking/. It does not: iframe-resizer posts a single init on load and
 * then never drives the height. So the modal sizes itself to the form rather than handing
 * the form a viewport-sized box to rattle around in. See FORM_HEIGHT_PX, and
 * frontend-next/docs/ai-ceo-sips-port-spec.md §8.7 for the full write-up.
 */

// MindFinders' GHL is hosted on the GrowersCloud domain - that is intentional, not a
// leftover. The two sites use different widget IDs, so submissions are already
// distinguishable by which widget they arrived through; no source parameter is needed.
const GHL_ORIGIN = "https://links.growerscloud.ai";
const FORM_IFRAME_SRC = `${GHL_ORIGIN}/widget/form/fehFJkNbVkqrJVrDORNO`;
const FORM_EMBED_SCRIPT = `${GHL_ORIGIN}/js/form_embed.js`;

// If the widget has not painted by now, assume it is not coming and show a way through.
const LOAD_TIMEOUT_MS = 10000;

// Height of the GHL form. Measured, not guessed: GHL reports the form as 650x549 and it
// renders at ~580px tall once the consent paragraph wraps. See the note by the iframe -
// this widget does not auto-resize, so the height is ours to set.
const FORM_HEIGHT_PX = 640;

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
    const iframeRef = useRef<HTMLIFrameElement>(null);
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

    /*
      form_embed.js does not just load the widget - it reaches back into our iframe after
      load and overwrites BOTH the height (to ~720px) and the scrolling attribute (back to
      "yes"). That is where the dead space and the stray scrollbar came from: a ~580px form
      in a 720px box, overflowing by a few pixels because GHL's page sizes itself to
      whatever viewport it is handed. Static JSX props cannot win that argument, so we
      re-assert after it has had its turn.

      Safe to do: iframe-resizer writes once at init and then goes quiet - it ignored three
      manual height changes afterwards - so this is a single correction, not a tug of war.
      The counter is a backstop in case a future GHL build starts fighting back.
    */
    useEffect(() => {
        const el = iframeRef.current;
        if (!el) return;

        let corrections = 0;
        const enforce = () => {
            if (el.getAttribute("scrolling") !== "no") el.setAttribute("scrolling", "no");
            if (el.style.height !== `${FORM_HEIGHT_PX}px`) el.style.height = `${FORM_HEIGHT_PX}px`;
        };

        const observer = new MutationObserver(() => {
            if (corrections++ > 20) {
                observer.disconnect();
                return;
            }
            enforce();
        });

        observer.observe(el, { attributes: true, attributeFilter: ["style", "scrolling", "height"] });
        return () => observer.disconnect();
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
                /*
                  Sized to the form, not to the viewport. GHL reports this widget as 650px
                  wide; at max-w-4xl with a 92vh height the modal was 896x787 around a
                  ~650x580 form, which read as a small form marooned in a large white box.
                  Width caps just above GHL's own, and the height follows the content.
                  95vh rather than 92vh so the whole thing clears more short laptop
                  windows before the body has to scroll at all.
                */
                className="flex flex-col w-full max-w-[700px] max-h-[95vh] bg-white rounded-none border-[3px] border-[var(--secondary)] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] overflow-hidden"
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

                {/*
                    min-h matters: in the failed state the iframe is unmounted, and without a
                    floor this box collapses to zero height, taking the absolutely-positioned
                    fallback with it.
                */}
                <div className="relative flex-1 min-h-[320px] bg-white overflow-y-auto">
                    {/*
                        GHL widgets hide themselves via inline styles set by form_embed.js
                        (opacity: 0; visibility: hidden; pointer-events: none; left: -9999px).
                        The iframe needs a unique id and an !important override targeting that
                        id, or the widget loads and stays invisible.

                        The height is set explicitly because this widget does NOT auto-resize.
                        form_embed.js loads iframe-resizer, which posts one
                        [iFrameSizer]...:init on load and then goes silent - it never drives
                        the height, and the child does not answer a re-measure request either.
                        Verified in the browser, not assumed.

                        So height: 100% is wrong here. GHL's page fills whatever height it is
                        handed and reports that back, so tying the iframe to a 92vh panel just
                        pads the form out to the viewport. FORM_HEIGHT_PX fits the current
                        form; the container scrolls if GHL ever makes it taller, so a stale
                        value degrades to a scrollbar rather than a clipped form.
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
                            ref={iframeRef}
                            src={FORM_IFRAME_SRC}
                            id="ghl-sips-form-iframe"
                            title={title}
                            onLoad={handleIframeLoad}
                            /*
                              scrolling="no" kills a scrollbar that is GHL's, not ours: their
                              page overflows whatever height it is handed by a few pixels, so
                              one appeared at 640, 720 and 760 alike. We cannot restyle
                              cross-origin content, so the attribute is the only lever - and
                              form_embed.js resets it, which is what the observer above is
                              for. FORM_HEIGHT_PX clears the form's real height, so hiding
                              the scrollbar cannot clip it.
                            */
                            scrolling="no"
                            style={{ width: "100%", height: FORM_HEIGHT_PX, border: "none", display: "block" }}
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
