import { TRUST_STATS } from "@/lib/constants";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

function PartnerMark({ variant }: { variant: 1 | 2 | 3 }) {
    const base = "flex h-7 w-7 items-center justify-center text-ink/60";

    if (variant === 1) {
        return (
            <div className={base} aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" className="h-full w-full">
                    <path
                        d="M6 24 L16 6 L26 24 Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11 24 L16 15 L21 24"
                        stroke="currentColor"
                        strokeWidth="1.4"
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
                    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.4" />
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
                    strokeWidth="1.4"
                />
                <path
                    d="M6 6 L26 26 M26 6 L6 26"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />
            </svg>
        </div>
    );
}

export function TrustStrip() {
    return (
        <section
            className="border-b border-neutral-200 bg-mist"
            aria-labelledby="trust-heading"
        >
            <div className="container-main">
                <div className="grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-16 lg:py-16">
                    {/* Left: partners */}
                    <MotionWrapper className="lg:col-span-5">
                        <p className="text-overline font-medium uppercase text-neutral-500">
                            Trusted Global Partners
                        </p>
                        <h2
                            id="trust-heading"
                            className="mt-3 font-serif text-headline-sm text-ink sm:text-headline"
                        >
                            <span className="block font-normal text-neutral-500">
                                15+ Years of
                            </span>
                            <span className="block font-medium">Strategic Excellence</span>
                        </h2>

                        <div
                            className="mt-6 flex items-center gap-5"
                            aria-label="Partner organizations"
                        >
                            <PartnerMark variant={1} />
                            <PartnerMark variant={2} />
                            <PartnerMark variant={3} />
                        </div>
                    </MotionWrapper>

                    {/* Right: stats */}
                    <MotionWrapper
                        delay={0.1}
                        className="lg:col-span-7 lg:justify-self-end"
                    >
                        <dl className="flex items-start gap-8 sm:gap-14 lg:gap-16">
                            {TRUST_STATS.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={
                                        i > 0
                                            ? "border-l border-neutral-300 pl-8 sm:pl-14 lg:pl-16"
                                            : ""
                                    }
                                >
                                    <dt className="sr-only">{stat.label}</dt>
                                    <dd>
                                        <p className="font-serif text-headline text-ink sm:text-headline-lg lg:text-[2.5rem] lg:leading-none">
                                            {stat.value}
                                        </p>
                                        <p className="mt-3 whitespace-nowrap text-overline font-medium uppercase text-neutral-500">
                                            {stat.label}
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}