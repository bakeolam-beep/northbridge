"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number | "some" | "all";
    variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";
    as?: "div" | "section" | "article" | "header" | "footer";
}

const variants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1 },
    },
};

export function MotionWrapper({
    children,
    className,
    delay = 0,
    duration = 0.7,
    once = true,
    amount = 0.15,
    variant = "fadeUp",
    as = "div",
}: MotionWrapperProps) {
    const prefersReduced = useReducedMotion();
    const MotionTag = motion[as];

    if (prefersReduced) {
        return <MotionTag className={className}>{children}</MotionTag>;
    }

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: "0px 0px -80px 0px" }}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.19, 1, 0.22, 1],
            }}
        >
            {children}
        </MotionTag>
    );
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.08,
    once = true,
    amount = 0.15,
    as = "div",
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
    amount?: number | "some" | "all";
    as?: "div" | "section" | "article" | "ul" | "ol";
}) {
    const prefersReduced = useReducedMotion();
    const MotionTag = motion[as];

    if (prefersReduced) {
        return <MotionTag className={className}>{children}</MotionTag>;
    }

    return (
        <MotionTag
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: "0px 0px -80px 0px" }}
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
        </MotionTag>
    );
}

export function StaggerItem({
    children,
    className,
    variant = "fadeUp",
    duration = 0.6,
    as = "div",
}: {
    children: ReactNode;
    className?: string;
    variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";
    duration?: number;
    as?: "div" | "article" | "li" | "section";
}) {
    const MotionTag = motion[as];

    return (
        <MotionTag
            className={className}
            variants={variants[variant]}
            transition={{
                duration,
                ease: [0.19, 1, 0.22, 1],
            }}
        >
            {children}
        </MotionTag>
    );
}