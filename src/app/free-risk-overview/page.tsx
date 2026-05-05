import type { Metadata } from "next";
import Link from "next/link";
import ShieldIcon from "@/components/ShieldIcon";
import LeadMagnet from "@/components/LeadMagnet";

export const metadata: Metadata = {
  title: "Free AI Security Risk Overview | AITrustAudit.com",
  description:
    "Download the free AI Security Risk Overview. One page, five risks, used by security consultants to brief SMB leadership. Instant download.",
  robots: { index: true, follow: true },
};

export default function FreeRiskOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--light-bg)" }}>
      {/* Minimal header — no nav on lead magnet page */}
      <header
        className="py-4 px-6 flex items-center justify-center"
        style={{ background: "var(--navy)", borderBottom: "3px solid var(--teal-lt)" }}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Return to AITrustAudit home">
          <ShieldIcon size="sm" glow />
          <span
            className="font-display font-bold"
            style={{ fontSize: "14px", color: "var(--teal-lt)" }}
          >
            AITrustAudit<span style={{ color: "white" }}>.com</span>
          </span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-5xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* PDF Preview */}
            <div
              className="corner-bracket rounded-sm flex flex-col items-center justify-center py-16 px-8"
              style={{
                background: "var(--navy)",
                border: "1px solid rgba(0,172,193,0.3)",
                minHeight: "360px",
              }}
            >
              <ShieldIcon size="lg" glow />
              <div
                className="mt-6 text-center"
              >
                <p
                  className="font-display font-bold"
                  style={{ color: "var(--teal-lt)", fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase" }}
                >
                  AITrustAudit.com
                </p>
                <h2
                  className="font-display font-bold mt-3"
                  style={{ color: "white", fontSize: "18px", lineHeight: 1.3 }}
                >
                  AI Security Risk Overview
                </h2>
                <p
                  className="font-body mt-2"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}
                >
                  One page · Five risks · Free download
                </p>
                <div
                  className="mt-6 flex flex-col gap-2"
                  style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
                >
                  {["Shadow AI", "Client Data Exposure", "No AI AUP", "Compliance Gaps", "Vendor Risk"].map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <span style={{ color: "var(--amber)" }}>▸</span>
                      <span className="font-body">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              className="corner-bracket rounded-sm p-8"
              style={{ background: "white", border: "1px solid var(--divider)", boxShadow: "0 4px 24px rgba(13,27,42,0.1)" }}
            >
              <div className="mb-2" style={{ fontSize: "11px", color: "var(--teal-lt)", letterSpacing: "4px", textTransform: "uppercase" }}>
                // FREE DOWNLOAD
              </div>
              <LeadMagnet
                headline="The 5 AI Security Risks Threatening Your Business Right Now"
                subhead="A free 1-page overview used by security consultants to brief SMB leadership. Download instantly — no fluff, no pitch."
                dark={false}
              />
            </div>
          </div>

          {/* Social proof */}
          <div className="text-center mt-12">
            <p className="font-body" style={{ color: "var(--mid-gray)", fontSize: "14px" }}>
              Trusted by security practitioners, compliance teams, and SMB operators.{" "}
              <Link href="/newsletter" style={{ color: "var(--teal)" }}>
                Subscribe to The AI Trust Briefing →
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-6 px-4 text-center" style={{ borderTop: "1px solid var(--divider)" }}>
        <p className="font-body" style={{ fontSize: "12px", color: "var(--mid-gray)" }}>
          © 2026 AITrustAudit.com ·{" "}
          <Link href="/privacy" style={{ color: "var(--teal)" }}>Privacy Policy</Link>
          {" · "}
          <Link href="/" style={{ color: "var(--teal)" }}>Back to site</Link>
        </p>
      </footer>
    </div>
  );
}
