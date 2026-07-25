"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
    const ease = [0.19, 1, 0.22, 1] as const;

    return (
        <section
            className="relative overflow-hidden bg-ink text-white"
            aria-labelledby="hero-heading"
        >
            {/* Subtle grain / vignette layer */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)]"
            />

            <div className="container-main relative pt-32 sm:pt-36 lg:pt-40">
                <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 pb-20 lg:min-h-[640px] lg:grid-cols-12 lg:pb-28">
                    {/* Left: copy */}
                    <div className="lg:col-span-7 xl:col-span-6">
                        <motion.h1
                            id="hero-heading"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease }}
                            className={cn(
                                "font-serif font-normal tracking-tight text-white",
                                "text-[2.75rem] leading-[1.05] sm:text-display-sm md:text-display lg:text-display-lg xl:text-display-xl"
                            )}
                        >
                            Architecting
                            <br />
                            Competitive
                            <br />
                            Advantage.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.15, ease }}
                            className="mt-6 max-w-xl text-body-lg text-white/70 sm:mt-8"
                        >
                            We partner with ambitious businesses to engineer strategy,
                            streamline operations, and ignite sustainable growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3, ease }}
                            className="mt-10 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-8"
                        >
                            <Link href="#contact" className="btn-white">
                                Book a Consultation
                            </Link>

                            <Link
                                href="#case-study"
                                className="group inline-flex items-center gap-2 text-body-sm font-medium uppercase tracking-[0.14em] text-white/90 transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none"
                            >
                                <span className="relative">
                                    Explore Case Studies
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-300 ease-out-expo group-hover:scale-x-0"
                                    />
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: subtle atmospheric element */}
                    <div
                        aria-hidden="true"
                        className="hidden lg:col-span-5 lg:block xl:col-span-6"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.4, delay: 0.4, ease }}
                            className="relative aspect-[4/5] w-full max-w-md justify-self-end"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.08),transparent_70%)]" />
                            <div className="absolute right-0 top-1/2 h-px w-24 -translate-y-1/2 bg-white/20" />
                            <div className="absolute right-6 top-1/2 h-24 w-px -translate-y-1/2 bg-white/20" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}