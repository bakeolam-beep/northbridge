export default function Loading() {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
            role="status"
            aria-live="polite"
        >
            <span className="sr-only">Loading</span>
            <div
                aria-hidden="true"
                className="flex h-6 w-6 animate-pulse items-center justify-center rounded-[3px] bg-white"
            >
                <span className="h-2.5 w-2.5 rotate-45 bg-ink" />
            </div>
        </div>
    );
}