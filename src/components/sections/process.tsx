import { PROCESS_STEPS } from "@/lib/constants";
import {
    MotionWrapper,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/motion-wrapper";

export function Process() {
    return (
        <section
            id="process"
            className="bg-white"
            aria-labelledby="process-heading"
        >
            <div className="container-main section-padding">
                <MotionWrapper className="max-w-3xl">
                    <p className="text-overline font-medium uppercase text-neutral-500">
                        Methodology
                    </p>
                    <h2
                        id="process-heading"
                        className="mt-4 font-serif text-headline-lg text-ink sm:text-display-sm"
                    >
                        How We <span className="italic">Work</span>
                    </h2>
                </MotionWrapper>

                <StaggerContainer
                    className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8"
                    staggerDelay={0.1}
                    as="ol"
                >
                    {PROCESS_STEPS.map((step) => (
                        <StaggerItem
                            key={step.number}
                            as="li"
                            className="group relative flex flex-col border-t border-ink/80 pt-6"
                        >
                            {/* Animated top rail on hover */}
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-x-100"
                            />

                            <p className="font-serif text-headline-lg text-ink sm:text-display-sm">
                                {step.number}
                            </p>

                            <p className="mt-6 text-overline font-medium uppercase tracking-[0.18em] text-ink">
                                {step.title}
                            </p>

                            <p className="mt-3 max-w-[22ch] text-body-sm text-neutral-600">
                                {step.description}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}