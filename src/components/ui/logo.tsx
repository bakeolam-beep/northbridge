import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

interface LogoProps {
    variant?: "light" | "dark";
    className?: string;
    href?: string;
}

export function Logo({ variant = "light", className, href = "/" }: LogoProps) {
    const isLight = variant === "light";

    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex items-center gap-2.5 focus-visible:outline-none",
                className
            )}
            aria-label={`${SITE_CONFIG.name} home`}
        >
            <span
                className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-[3px] transition-transform duration-300 group-hover:rotate-45",
                    isLight ? "bg-white" : "bg-ink"
                )}
                aria-hidden="true"
            >
                <span
                    className={cn(
                        "h-2.5 w-2.5 rotate-45",
                        isLight ? "bg-ink" : "bg-white"
                    )}
                />
            </span>
            <span
                className={cn(
                    "font-serif text-[1.0625rem] font-medium tracking-tight",
                    isLight ? "text-white" : "text-ink"
                )}
            >
                {SITE_CONFIG.name}
            </span>
        </Link>
    );
}