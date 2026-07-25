import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const groups = [
        FOOTER_LINKS.expertise,
        FOOTER_LINKS.firm,
        FOOTER_LINKS.legal,
    ];

    return (
        <footer className="border-t border-neutral-200 bg-mist" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="container-main">
                {/* Top */}
                <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
                    {/* Brand column */}
                    <div className="lg:col-span-4">
                        <Logo variant="dark" />
                        <p className="mt-5 max-w-xs text-body-sm text-neutral-600">
                            Architecting competitive advantage for the modern global
                            enterprise.
                        </p>
                    </div>

                    {/* Link groups */}
                    <nav
                        aria-label="Footer"
                        className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:gap-16"
                    >
                        {groups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-overline font-medium uppercase text-neutral-500">
                                    {group.title}
                                </h3>
                                <ul className="mt-5 space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-body-sm text-ink/80 transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-mist"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom */}
                <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 py-8 sm:flex-row sm:items-center">
                    <p className="text-caption font-medium uppercase text-neutral-500">
                        © {currentYear} {SITE_CONFIG.name} Consulting. All rights reserved.
                    </p>

                    <div
                        aria-hidden="true"
                        className="flex h-6 w-6 items-center justify-center rounded-[3px] bg-ink"
                    >
                        <span className="h-2.5 w-2.5 rotate-45 bg-white" />
                    </div>
                </div>
            </div>
        </footer>
    );
}