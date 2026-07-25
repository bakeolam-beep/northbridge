import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    overline?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    titleAs?: "h1" | "h2" | "h3";
    dark?: boolean;
    className?: string;
}

export function SectionHeader({
    overline,
    title,
    description,
    align = "left",
    titleAs: Tag = "h2",
    dark = false,
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "max-w-3xl",
                align === "center" && "mx-auto text-center",
                className
            )}
        >
            {overline && (
                <p
                    className={cn(
                        "mb-4 text-overline font-medium uppercase tracking-widest",
                        dark ? "text-neutral-400" : "text-neutral-500"
                    )}
                >
                    {overline}
                </p>
            )}
            <Tag
                className={cn(
                    "font-heading font-semibold tracking-tight",
                    "text-headline-lg sm:text-display-sm lg:text-display",
                    dark ? "text-white" : "text-primary-900"
                )}
            >
                {title}
            </Tag>
            {description && (
                <p
                    className={cn(
                        "mt-4 text-body-lg sm:mt-5",
                        dark ? "text-neutral-300" : "text-neutral-600"
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}