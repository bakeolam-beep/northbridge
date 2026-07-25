import { TESTIMONIALS } from "@/lib/constants";
import {
    MotionWrapper,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/motion-wrapper";

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-white"
            aria-labelledby="testimonials-heading"
        >
            <div className="container-main section-padding-lg">
                <MotionWrapper className="mx-auto max-w-2xl text-center">
                    <p className="text-overline font-medium uppercase text-neutral-500">
                        Client Perspectives
                    </p>
                    <h2
                        id="testimonials-heading"
                        className="mt-4 font-serif text-headline-lg text-ink sm:text-display-sm"
                    >
                        Enduring <span className="italic">Partnerships</span>
                    </h2>
                </MotionWrapper>

                <StaggerContainer
                    className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16"
                    staggerDelay={0.15}
                >
                    {TESTIMONIALS.map((testimonial) => (
                        <StaggerItem key={testimonial.author} as="article">
                            <figure className="flex h-full flex-col">
                                {/* Decorative opening quote */}
                                <span
                                    aria-hidden="true"
                                    className="font-serif text-[4rem] leading-none text-ink/25 sm:text-[5rem]"
                                >
                                    &ldquo;
                                </span>

                                <blockquote className="-mt-4">
                                    <p className="font-serif text-title text-ink sm:text-headline-sm">
                                        <span className="italic">{testimonial.quote}</span>
                                    </p>
                                </blockquote>

                                <figcaption className="mt-8 border-t border-neutral-200 pt-6">
                                    <p className="text-body-sm font-medium text-ink">
                                        {testimonial.author}
                                    </p>
                                    <p className="mt-1 text-overline font-medium uppercase text-neutral-500">
                                        {testimonial.title}
                                    </p>
                                </figcaption>
                            </figure>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}