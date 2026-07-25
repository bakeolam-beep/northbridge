"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
                isScrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
            )}
        >
            <div className="container-main">
                <nav
                    className="flex h-16 items-center justify-between sm:h-18"
                    aria-label="Primary"
                >
                    <div className="flex items-center gap-12">
                        <Logo variant="light" />

                        <ul className="hidden items-center gap-8 lg:flex">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="nav-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:flex">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-nav font-medium uppercase text-ink transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                        >
                            Book a Consultation
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((v) => !v)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
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
                    "fixed inset-x-0 top-16 bottom-0 z-40 bg-ink transition-transform duration-300 ease-out-expo lg:hidden",
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