import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Terms of Use | AITrustAudit.com",
  description: "AITrustAudit.com terms of use.",
};

export default function TermsPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="LEGAL" />
        <h1 className="font-display font-bold mt-2 mb-2" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--navy)" }}>
          Terms of Use
        </h1>
        <p className="font-body mb-10" style={{ color: "var(--mid-gray)", fontSize: "14px" }}>
          Last updated: May 2026
        </p>
        <div className="space-y-8 font-body" style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.7 }}>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Use of Content</h2>
            <p>All content on AITrustAudit.com — articles, templates, course materials — is copyright Jamel Rainey / AITrustAudit.com. You may not reproduce, redistribute, or resell any content without written permission. Personal use and reference is permitted.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Course & Template Access</h2>
            <p>Course enrollment grants you personal, non-transferable access to course materials. Templates are licensed for use in your own professional engagements. Resale or redistribution of templates is not permitted.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>No Professional Advice</h2>
            <p>Content on AITrustAudit.com is for educational purposes only. It does not constitute legal, compliance, or professional security advice. Apply materials to your specific context with appropriate professional judgment.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Disclaimer</h2>
            <p>AITrustAudit.com is an independent education brand. Not affiliated with NIST, OWASP, or ISO. Framework references are for educational purposes; official guidance should be obtained from the respective bodies.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Refund Policy</h2>
            <p>The AI Security Audit Fundamentals course comes with a 30-day money-back guarantee. If you&apos;re not satisfied for any reason within 30 days of purchase, contact us for a full refund — no questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
