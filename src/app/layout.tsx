import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Security Audit Education | AITrustAudit.com",
  description:
    "Learn to audit AI systems, govern AI tools, and manage AI risk. Practitioner-level courses, frameworks, and templates. Free resources available.",
  openGraph: {
    title: "AI Security Audit Education | AITrustAudit.com",
    description:
      "Learn to audit AI systems, govern AI tools, and manage AI risk. Practitioner-level courses, frameworks, and templates.",
    url: "https://aitrustaudit.com",
    siteName: "AITrustAudit.com",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Security Audit Education | AITrustAudit.com",
    description: "Practitioner-level AI security audit education. Free resources, courses, and templates.",
    images: ["/og-default.png"],
  },
  metadataBase: new URL("https://aitrustaudit.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 btn-primary z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
