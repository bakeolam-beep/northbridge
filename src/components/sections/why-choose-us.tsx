"use client";

import { motion } from "framer-motion";
import { LineChart, Compass, Handshake, type LucideIcon } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
    LineChart,
    Compass,
    Handshake,
};

export function WhyChooseUs() {
    const ease = [0.19, 1, 0.22, 1] as const;

    return (
        <section
            id="about"
            className="bg-white"
            aria-labelledby="why-heading"
        >
            <div className="container-main section-padding">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p className="text-overline font-medium uppercase text-neutral-500">
                        The Advantage
                    </p>
                    <h2
                        id="why-heading"
                        className="mt-4 font-serif text-headline-lg text-ink sm:text-display-sm"
                    >
                        Why <span className="italic">Northbridge</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-body text-neutral-600 sm:text-body-lg">
                        We deliver more than advice. We provide the architectural blueprints
                        for enduring market leadership.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="mt-16 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-12">
                    {WHY_CHOOSE_ITEMS.map((item, index) => {
                        const Icon = ICON_MAP[item.icon];
                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1 * index,
                                    ease,
                                }}
                                className="flex flex-col"
                            >
                                <div className="mb-6 flex h-10 w-10 items-center justify-center">
                                    {Icon ? (
                                        <Icon
                                            className="h-6 w-6 text-ink"
                                            strokeWidth={1.4}
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                </div>

                                <h3 className="font-serif text-title text-ink">
                                    {item.title}
                                </h3>
                                <p className="mt-3 max-w-sm text-body-sm text-neutral-600 sm:text-body">
                                    {item.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}