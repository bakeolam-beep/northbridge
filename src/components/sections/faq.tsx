"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section id="faq" className="bg-white" aria-labelledby="faq-heading">
            <div className="container-main section-padding">
                <MotionWrapper className="mx-auto max-w-2xl text-center">
                    <p className="text-overline font-medium uppercase text-neutral-500">
                        Inquiries
                    </p>
                    <h2
                        id="faq-heading"
                        className="mt-4 font-serif text-headline-lg text-ink sm:text-display-sm"
                    >
                        Frequently Asked <span className="italic">Questions</span>
                    </h2>
                </MotionWrapper>

                <MotionWrapper delay={0.1} className="mx-auto mt-14 max-w-4xl lg:mt-20">
                    <ul className="border-t border-neutral-200">
                        {FAQ_ITEMS.map((item, index) => {
                            const isOpen = openIndex === index;
                            const panelId = `faq-panel-${index}`;
                            const buttonId = `faq-button-${index}`;

                            return (
                                <li
                                    key={item.question}
                                    className="border-b border-neutral-200"
                                >
                                    <h3>
                                        <button
                                            type="button"
                                            id={buttonId}
                                            onClick={() => toggle(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-ink/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4"
                                        >
                                            <span className="text-body font-medium text-ink sm:text-body-lg">
                                                {item.question}
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className={cn(
                                                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                                                    isOpen
                                                        ? "border-ink bg-ink text-white"
                                                        : "border-neutral-300 text-ink group-hover:border-ink"
                                                )}
                                            >
                                                {isOpen ? (
                                                    <Minus className="h-3.5 w-3.5" strokeWidth={1.6} />
                                                ) : (
                                                    <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
                                                )}
                                            </span>
                                        </button>
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                id={panelId}
                                                role="region"
                                                aria-labelledby={buttonId}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    height: {
                                                        duration: 0.35,
                                                        ease: [0.19, 1, 0.22, 1],
                                                    },
                                                    opacity: {
                                                        duration: 0.25,
                                                        ease: [0.19, 1, 0.22, 1],
                                                    },
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="max-w-2xl pb-6 pr-14 text-body text-neutral-600">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>
                </MotionWrapper>
            </div>
        </section>
    );
}