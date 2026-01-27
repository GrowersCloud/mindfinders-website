"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto divide-y divide-[var(--border)]">
            {items.map((item, index) => (
                <div key={index} className="py-4">
                    <button
                        className="w-full text-left flex justify-between items-center py-2 focus:outline-none group"
                        onClick={() => toggleItem(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors">
                            {item.question}
                        </span>
                        <span className="ml-4 flex-shrink-0 text-[var(--primary)] text-2xl font-light">
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="text-[var(--text-primary)] leading-relaxed pb-2">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
