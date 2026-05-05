import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy | AITrustAudit.com",
  description: "AITrustAudit.com privacy policy — what data we collect, how we use it, and your rights.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionLabel text="LEGAL" />
        <h1 className="font-display font-bold mt-2 mb-2" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--navy)" }}>
          Privacy Policy
        </h1>
        <p className="font-body mb-10" style={{ color: "var(--mid-gray)", fontSize: "14px" }}>
          Last updated: May 2026
        </p>

        <div className="space-y-8 font-body" style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.7 }}>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>What Data We Collect</h2>
            <p>We collect your name and email address when you submit a form on this site. That&apos;s it. We do not collect payment information directly — that is handled by Stripe, our payment processor.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>How We Use Your Data</h2>
            <p>Your name and email are used to: deliver requested resources (templates, the free risk overview), send The AI Trust Briefing newsletter (if you subscribed), and communicate about course enrollment and access. We do not sell, rent, or share your personal data with third parties except as described below.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Third-Party Processors</h2>
            <ul className="space-y-2 ml-4">
              <li><strong style={{ color: "var(--navy)" }}>ConvertKit</strong> — Email marketing and newsletter delivery. Your email address is stored in ConvertKit. Their privacy policy governs their handling of that data.</li>
              <li><strong style={{ color: "var(--navy)" }}>Stripe</strong> — Payment processing for course and template purchases. We never see or store raw card data.</li>
              <li><strong style={{ color: "var(--navy)" }}>Plausible Analytics</strong> — Privacy-first web analytics. No cookies, no IP tracking, no personal data collected. GDPR-compliant by default.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Data Retention</h2>
            <p>We retain your email address for as long as you are subscribed to The AI Trust Briefing or have an active course enrollment. You can request deletion at any time.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Your Rights</h2>
            <p>You have the right to unsubscribe from all communications at any time using the unsubscribe link in any email. You have the right to request deletion of your personal data. You have the right to request a copy of the data we hold about you.</p>
          </div>
          <div>
            <h2 className="font-display font-bold mb-3" style={{ fontSize: "18px", color: "var(--navy)" }}>Contact for Privacy Inquiries</h2>
            <p>For any privacy-related request, contact us via the newsletter page or LinkedIn. We respond to privacy inquiries within 5 business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
