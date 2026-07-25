import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f7f7f7",
                    100: "#e3e3e3",
                    200: "#c8c8c8",
                    300: "#a4a4a4",
                    400: "#818181",
                    500: "#666666",
                    600: "#515151",
                    700: "#434343",
                    800: "#262626",
                    900: "#141414",
                    950: "#0a0a0a",
                },
                ink: "#0f0f0f",
                canvas: "#ffffff",
                mist: "#f4f4f2",
                neutral: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    150: "#efefec",
                    200: "#e5e5e5",
                    300: "#d4d4d4",
                    400: "#a3a3a3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                serif: ["var(--font-fraunces)", "Georgia", "serif"],
                display: ["var(--font-fraunces)", "Georgia", "serif"],
            },
            fontSize: {
                "display-xl": ["5.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
                "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
                "display": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
                "display-sm": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "headline-lg": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
                "headline": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
                "headline-sm": ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
                "title": ["1.25rem", { lineHeight: "1.4" }],
                "body-lg": ["1.125rem", { lineHeight: "1.65" }],
                "body": ["1rem", { lineHeight: "1.65" }],
                "body-sm": ["0.875rem", { lineHeight: "1.55" }],
                "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
                "overline": ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.18em" }],
                "nav": ["0.75rem", { lineHeight: "1", letterSpacing: "0.16em" }],
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "30": "7.5rem",
                "34": "8.5rem",
            },
            maxWidth: {
                "8xl": "88rem",
            },
            transitionTimingFunction: {
                "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
            },
        },
    },
    plugins: [],
};

export default config;