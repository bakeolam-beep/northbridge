"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/lib/constants";

// Minimal geometric "partner" marks — abstract logos matching the editorial aesthetic
function PartnerMark({ variant }: { variant: 1 | 2 | 3 }) {
    const base =
        "flex h-8 w-8 items-center justify-center text-ink/70";

    if (variant === 1) {
        return (
            <div className={base} aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
                    <path
                        d="M6 24 L16 6 L26 24 Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11 24 L16 15 L21 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        );
    }

    if (variant === 2) {
        return (
            <div className={base} aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
                    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>
        );
    }

    return (
        <div className={base} aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
                <rect
                    x="6"
                    y="6"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    d="M6 6 L26 26 M26 6 L6 26"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>
        </div>
    );
}

export function TrustStrip() {
    const ease = [0.19, 1, 0.22, 1] as const;

    return (
        <section
            className="border-y border-neutral-200 bg-mist"
            aria-labelledby="trust-heading"
        >
            <div className="container-main">
                <div className="grid grid-cols-1 gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-16">
                    {/* Left: partners */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease }}
                    >
                        <p className="text-overline font-medium uppercase text-neutral-500">
                            Trusted Global Partners
                        </p>
                        <h2
                            id="trust-heading"
                            className="mt-3 font-serif text-headline-sm text-ink sm:text-headline"
                        >
                            15+ Years of
                            <br />
                            <span className="font-medium">Strategic Excellence</span>
                        </h2>

                        <div className="mt-6 flex items-center gap-6" aria-label="Partner organizations">
                            <PartnerMark variant={1} />
                            <PartnerMark variant={2} />
                            <PartnerMark variant={3} />
                        </div>
                    </motion.div>

                    {/* Right: stats */}
                    <motion.dl
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1, ease }}
                        className="grid grid-cols-3 items-center gap-4 self-center sm:gap-8 lg:justify-self-end"
                    >
                        {TRUST_STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={
                                    i > 0
                                        ? "border-l border-neutral-300 pl-4 sm:pl-8"
                                        : ""
                                }
                            >
                                <dt className="sr-only">{stat.label}</dt>
                                <dd>
                                    <p className="font-serif text-headline text-ink sm:text-headline-lg">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-overline font-medium uppercase text-neutral-500">
                                        {stat.label}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>
            </div>
        </section>
    );
}