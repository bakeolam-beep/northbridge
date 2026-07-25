import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main
                id="main"
                className="flex min-h-screen items-center justify-center bg-ink"
            >
                <div className="container-main py-32 text-center">
                    <p className="text-overline font-medium uppercase text-white/50">
                        Error 404
                    </p>
                    <h1 className="mt-4 font-serif text-display-sm text-white sm:text-display lg:text-display-lg">
                        Page not <span className="italic">found</span>.
                    </h1>
                    <p className="mx-auto mt-6 max-w-md text-body text-white/70">
                        The page you&apos;re looking for doesn&apos;t exist or has been
                        moved.
                    </p>

                    <Link
                        href="/"
                        className="group mt-10 inline-flex items-center gap-3 border-b border-white pb-1 text-body-sm font-medium uppercase tracking-[0.14em] text-white transition-opacity duration-200 hover:opacity-70"
                    >
                        <ArrowLeft
                            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                        Back to home
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}