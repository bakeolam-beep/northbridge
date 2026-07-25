export function SkipLink() {
    return (
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-body-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
        >
            Skip to main content
        </a>
    );
}