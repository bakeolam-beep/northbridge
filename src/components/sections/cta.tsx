import Link from "next/link";
import { CTA_CONTENT } from "@/lib/constants";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

export function CTA() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-ink text-white"
            aria-labelledby="cta-heading"
        >
            {/* Subtle atmospheric glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(255,255,255,0.06),transparent_60%)]"
            />

            <div className="container-main relative section-padding-lg">
                <MotionWrapper className="mx-auto max-w-3xl text-center">
                    <p className="text-overline font-medium uppercase text-white/50">
                        {CTA_CONTENT.overline}
                    </p>

                    <h2
                        id="cta-heading"
                        className="mt-5 font-serif text-headline-lg text-white sm:text-display-sm lg:text-display"
                    >
                        {CTA_CONTENT.title}{" "}
                        <span className="italic">{CTA_CONTENT.titleAccent}</span>?
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-body text-white/70 sm:text-body-lg">
                        {CTA_CONTENT.description}
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-4">
                        <Link href="#contact" className="btn-white w-full sm:w-auto">
                            Book a Consultation
                        </Link>
                        <Link
                            href="#case-study"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/30 bg-transparent px-6 py-3.5 text-body-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98] sm:w-auto"
                        >
                            Explore Case Studies
                        </Link>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}