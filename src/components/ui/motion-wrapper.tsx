"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number;
    variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";
}

const variants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function MotionWrapper({
    children,
    className,
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.2,
    variant = "fadeUp",
}: MotionWrapperProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    once = true,
    amount = 0.2,
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
    amount?: number;
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
    variant = "fadeUp",
    duration = 0.5,
}: {
    children: ReactNode;
    className?: string;
    variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";
    duration?: number;
}) {
    return (
        <motion.div
            className={className}
            variants={variants[variant]}
            transition={{
                duration,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}