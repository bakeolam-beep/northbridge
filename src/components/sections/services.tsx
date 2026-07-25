import {
    TrendingUp,
    Settings2,
    Sprout,
    Users,
    type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import {
    MotionWrapper,
    StaggerContainer,
    StaggerItem,
} from "@/components/ui/motion-wrapper";

const ICON_MAP: Record<string, LucideIcon> = {
    TrendingUp,
    Settings2,
    Sprout,
    Users,
};

export function Services() {
    return (
        <section
            id="services"
            className="bg-mist"
            aria-labelledby="services-heading"
        >
            <div className="container-main section-padding">
                <MotionWrapper className="max-w-3xl">
                    <p className="text-overline font-medium uppercase text-neutral-500">
                        Core Competencies
                    </p>
                    <h2
                        id="services-heading"
                        className="mt-4 font-serif text-headline-lg text-ink sm:text-display-sm"
                    >
                        Our <span className="italic">Expertise</span>
                    </h2>
                    <p className="mt-5 max-w-xl text-body text-neutral-600 sm:text-body-lg">
                        Targeted solutions designed to architect your competitive advantage
                        through rigorous analysis and bold execution.
                    </p>
                </MotionWrapper>

                <StaggerContainer
                    className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:mt-20"
                    staggerDelay={0.1}
                >
                    {SERVICES.map((service) => {
                        const Icon = ICON_MAP[service.icon];
                        return (
                            <StaggerItem
                                key={service.title}
                                as="article"
                                className="group relative flex flex-col bg-mist p-8 transition-colors duration-300 hover:bg-white sm:p-10 lg:p-12"
                            >
                                <div className="mb-8 flex h-11 w-11 items-center justify-center border border-ink/15">
                                    {Icon ? (
                                        <Icon
                                            className="h-5 w-5 text-ink"
                                            strokeWidth={1.4}
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                </div>

                                <h3 className="font-serif text-title text-ink sm:text-headline-sm">
                                    {service.title}
                                </h3>
                                <p className="mt-3 max-w-md text-body-sm text-neutral-600 sm:text-body">
                                    {service.description}
                                </p>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}