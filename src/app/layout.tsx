import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cikizeng.com"),
  title: {
    default: "Ciki Zeng — One Person x AI = One Team",
    template: "%s — Ciki Zeng",
  },
  description:
    "3 SaaS products. One person. No team. See how AI partnership and a systematic methodology turn one developer into a full product team.",
  openGraph: {
    title: "Ciki Zeng — One Person x AI = One Team",
    description:
      "3 SaaS products built solo with AI. Methodology, case studies, and templates.",
    type: "website",
    url: "https://cikizeng.com",
    siteName: "Ciki Zeng",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Ciki Zeng",
      url: "https://cikizeng.com",
      description:
        "3 SaaS products built solo with AI partnership and systematic methodology.",
    },
    {
      "@type": "Person",
      name: "Ciki Zeng",
      url: "https://cikizeng.com",
      jobTitle: "Solo SaaS Builder",
      knowsAbout: [
        "AI Engineering",
        "SaaS Development",
        "AI Workflow Methodology",
        "Figure Skating Analytics",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
