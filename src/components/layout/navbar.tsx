"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Consider "scrolled" once we're past ~85% of viewport height (past the hero)
            const threshold = window.innerHeight * 0.85;
            setScrolled(window.scrollY > threshold);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const isLight = !scrolled;

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-out",
                scrolled
                    ? "border-b border-neutral-200 bg-white/90 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
            )}
        >
            <div className="container-main">
                <nav
                    className="flex h-16 items-center justify-between sm:h-18"
                    aria-label="Primary"
                >
                    <div className="flex items-center gap-12">
                        <Logo variant={isLight ? "light" : "dark"} />

                        <ul className="hidden items-center gap-8 lg:flex">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-nav font-medium uppercase transition-colors duration-200",
                                            isLight
                                                ? "text-white/70 hover:text-white"
                                                : "text-ink/60 hover:text-ink"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:flex">
                        <Link
                            href="#contact"
                            className={cn(
                                "inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-nav font-medium uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                                isLight
                                    ? "bg-white text-ink hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-ink"
                                    : "bg-ink text-white hover:bg-primary-800 focus-visible:ring-ink focus-visible:ring-offset-white"
                            )}
                        >
                            Book a Consultation
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((v) => !v)}
                        className={cn(
                            "inline-flex h-10 w-10 items-center justify-center rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 lg:hidden",
                            isLight
                                ? "text-white hover:bg-white/10 focus-visible:ring-white"
                                : "text-ink hover:bg-ink/5 focus-visible:ring-ink"
                        )}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={cn(
                    "fixed inset-x-0 top-16 bottom-0 z-40 bg-ink transition-transform duration-500 ease-out lg:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
                aria-hidden={!isOpen}
            >
                <div className="container-main flex h-full flex-col justify-between pb-12 pt-8">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block border-b border-white/10 py-5 font-serif text-headline text-white transition-colors hover:text-white/70"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex w-full items-center justify-center rounded-sm bg-white px-6 py-4 text-body-sm font-medium text-ink transition-colors hover:bg-white/90"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
}