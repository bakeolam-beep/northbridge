import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northbridge | Strategic Management Consulting",
  description:
    "We partner with ambitious businesses to engineer strategy, streamline operations, and ignite sustainable growth.",
  keywords: [
    "management consulting",
    "business strategy",
    "operations improvement",
    "growth advisory",
    "executive coaching",
  ],
  openGraph: {
    title: "Northbridge | Strategic Management Consulting",
    description:
      "We partner with ambitious businesses to engineer strategy, streamline operations, and ignite sustainable growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbridge | Strategic Management Consulting",
    description:
      "We partner with ambitious businesses to engineer strategy, streamline operations, and ignite sustainable growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}