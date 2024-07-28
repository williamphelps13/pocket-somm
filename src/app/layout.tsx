// 1. Google ads integration that does not shift or delay page content
// 2. Email from GitHub every month of results of  functionality and visual testing (GitHub Actions/Playwright)

// Check on Google Search Console
// Fix Lighthouse Failure: Background and foreground colors do not have a sufficient contrast ratio.

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket Somm",
  description:
    "Pocket Somm is a wine varietal recommendation app. Simply select the tasting notes that fit your mood and immediately discover the varietals that match it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-least-contrast text-most-contrast`}>
        {children}
        <SpeedInsights />
      </body>
      <Script
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9658916488433416"
      />
    </html>
  );
}
