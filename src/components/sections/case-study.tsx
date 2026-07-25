import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDY } from "@/lib/constants";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

export function CaseStudy() {
    return (
        <section
            id="case-study"
            className="bg-mist"
            aria-labelledby="case-study-heading"
        >
            <div className="container-main section-padding">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left column: content */}
                    <div className="lg:col-span-7">
                        <MotionWrapper>
                            <p className="text-overline font-medium uppercase text-neutral-500">
                                {CASE_STUDY.overline}
                            </p>
                            <h2
                                id="case-study-heading"
                                className="mt-4 font-serif text-headline-lg text-ink sm:text-display-sm"
                            >
                                {CASE_STUDY.title}{" "}
                                <span className="italic">{CASE_STUDY.titleAccent}</span>
                            </h2>
                        </MotionWrapper>

                        {/* Metrics */}
                        <MotionWrapper delay={0.1}>
                            <dl className="mt-10 grid grid-cols-3 border-t border-neutral-300 pt-6">
                                {CASE_STUDY.metrics.map((metric, i) => (
                                    <div
                                        key={metric.label}
                                        className={
                                            i > 0 ? "border-l border-neutral-300 pl-4 sm:pl-8" : ""
                                        }
                                    >
                                        <dt className="sr-only">{metric.label}</dt>
                                        <dd>
                                            <p className="font-serif text-headline text-ink sm:text-headline-lg">
                                                {metric.value}
                                            </p>
                                            <p className="mt-2 text-overline font-medium uppercase text-neutral-500">
                                                {metric.label}
                                            </p>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </MotionWrapper>

                        {/* Text blocks */}
                        <MotionWrapper delay={0.15}>
                            <div className="mt-10 space-y-6">
                                <div>
                                    <p className="text-overline font-medium uppercase text-neutral-500">
                                        {CASE_STUDY.challenge.label}
                                    </p>
                                    <p className="mt-3 max-w-xl text-body text-neutral-700">
                                        {CASE_STUDY.challenge.body}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-overline font-medium uppercase text-neutral-500">
                                        {CASE_STUDY.outcome.label}
                                    </p>
                                    <p className="mt-3 max-w-xl text-body text-neutral-700">
                                        {CASE_STUDY.outcome.body}
                                    </p>
                                </div>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2}>
                            <Link
                                href="#case-studies"
                                className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-1 text-body-sm font-medium uppercase tracking-[0.14em] text-ink transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-mist"
                            >
                                Explore Case Studies
                                <ArrowRight
                                    className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                            </Link>
                        </MotionWrapper>
                    </div>

                    {/* Right column: image */}
                    <div className="lg:col-span-5">
                        <MotionWrapper delay={0.15} className="h-full">
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200 lg:aspect-auto lg:h-full lg:min-h-[520px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1200&q=80"
                                    alt={CASE_STUDY.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 40vw, 100vw"
                                    className="object-cover"
                                    priority={false}
                                />
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}