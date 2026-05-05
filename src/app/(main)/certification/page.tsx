import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CircuitPattern from "@/components/CircuitPattern";
import CTABanner from "@/components/CTABanner";
import ShieldIcon from "@/components/ShieldIcon";

export const metadata: Metadata = {
  title: "AITrustAudit.com Practitioner Certificate | AITrustAudit.com",
  description:
    "Earn the AITrustAudit.com Practitioner Certificate by completing the AI Security Audit Fundamentals course and capstone. Shareable on LinkedIn.",
};

const competencies = [
  "Conduct a structured AI security audit using the 6-Domain Methodology",
  "Identify and inventory AI systems including shadow AI",
  "Assess data classification risks across AI tool usage",
  "Evaluate AI vendor security posture and contractual coverage",
  "Map audit findings to NIST AI RMF, OWASP LLM Top 10, HIPAA, SOC 2, and GDPR",
  "Score findings with a defensible severity methodology",
  "Produce a client-ready AI security audit report",
  "Build a 90-day remediation roadmap from audit findings",
];

const steps = [
  { num: "01", title: "Enroll in the Course", desc: "Complete all 8 modules of AI Security Audit Fundamentals at your own pace. Lifetime access, no expiration." },
  { num: "02", title: "Complete the Capstone", desc: "Conduct a structured audit of the provided scenario organization and submit your completed audit report for review." },
  { num: "03", title: "Receive Your Certificate", desc: "Your AITrustAudit.com Practitioner Certificate is issued digitally — ready to share on LinkedIn and include in client proposals." },
];

const faqs = [
  {
    q: "Is this an accredited certification?",
    a: "No. The AITrustAudit.com Practitioner Certificate is a practitioner credential, not an accredited certification. It demonstrates competency in the AI security audit methodology covered in this course. I'm being honest about this because the industry has enough misleading credential marketing — you deserve to know what you're earning before you earn it.",
  },
  {
    q: "How is the capstone evaluated?",
    a: "Your submitted audit report is reviewed against the 6-Domain Methodology rubric. The evaluation focuses on completeness of coverage, accuracy of severity scoring, and quality of findings documentation. Feedback is provided on all submissions.",
  },
  {
    q: "How long does it take to receive the certificate?",
    a: "Certificate issuance typically takes 5–7 business days after capstone submission and review.",
  },
  {
    q: "Can I include the certificate in client proposals?",
    a: "Yes. The certificate is issued as a digital credential you can reference in proposals, LinkedIn, and professional profiles. A course description suitable for use in proposals and reimbursement requests is included.",
  },
  {
    q: "Is the standalone certificate option available?",
    a: "Yes — the certificate is included with course enrollment ($297) or available as a standalone credential ($297) for practitioners who want to demonstrate competency without completing the full course. Contact us for standalone enrollment.",
  },
];

export default function CertificationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.13} />
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,172,193,0.12) 0%, transparent 70%)",
            top: "-60px",
            right: "5%",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel text="CREDENTIAL" className="justify-center flex" />
          <h1
            className="font-display font-black mt-3 mb-4 glow-text"
            style={{ fontSize: "clamp(26px, 5vw, 52px)", color: "white", lineHeight: 1.1 }}
          >
            AITrustAudit.com{" "}
            <span style={{ color: "var(--teal-lt)" }}>Practitioner Certificate</span>
          </h1>
          <p
            className="font-body mb-8 mx-auto"
            style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: "580px" }}
          >
            Demonstrate competency in AI security auditing — from tool inventory through compliance
            mapping and report delivery. Earned by completing the capstone, not just watching videos.
          </p>
          <Link href="/course#enroll" className="btn-primary" style={{ fontSize: "17px", padding: "16px 40px" }}>
            Enroll to Earn It — $297
          </Link>
        </div>
      </section>

      {/* Certificate preview */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Certificate mockup */}
            <div
              className="corner-bracket rounded-sm flex flex-col items-center justify-center py-14 px-8 text-center"
              style={{
                background: "var(--navy)",
                border: "2px solid rgba(0,172,193,0.4)",
                minHeight: "320px",
              }}
              aria-label="Sample certificate preview"
            >
              <ShieldIcon size="lg" glow />
              <div
                className="mt-6 pb-3"
                style={{ borderBottom: "1px solid rgba(0,172,193,0.3)", width: "100%" }}
              >
                <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>
                  This certifies that
                </p>
                <p className="font-display font-bold mt-1" style={{ color: "var(--teal-lt)", fontSize: "20px" }}>
                  [Your Name]
                </p>
              </div>
              <p className="font-body mt-3" style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
                has demonstrated competency in AI Security Auditing
              </p>
              <p
                className="font-display font-bold mt-2"
                style={{ color: "white", fontSize: "14px", letterSpacing: "1px" }}
              >
                AITrustAudit.com Practitioner Certificate
              </p>
              <p className="font-body mt-2" style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>
                AITrustAudit.com · Jamel Rainey · 2026
              </p>
            </div>

            {/* Competencies */}
            <div>
              <SectionLabel text="WHAT IT DEMONSTRATES" />
              <h2 className="font-display font-bold mb-5 mt-2" style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "var(--navy)" }}>
                Competencies Covered
              </h2>
              <ul className="space-y-3">
                {competencies.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 font-body" style={{ fontSize: "14px", color: "var(--mid-gray)" }}>
                    <span style={{ color: "var(--teal)", marginTop: "3px", flexShrink: 0 }}>✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to earn it */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel text="HOW TO EARN IT" />
          <h2 className="font-display font-bold mb-8 mt-2" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", color: "var(--navy)" }}>
            Three Steps to Certified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="corner-bracket p-6 rounded-sm"
                style={{ background: "var(--light-bg)", border: "1px solid var(--divider)" }}
              >
                <div
                  className="font-display font-bold mb-4"
                  style={{ fontSize: "40px", color: "var(--teal-lt)", opacity: 0.4 }}
                >
                  {s.num}
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "15px", color: "var(--navy)" }}>
                  {s.title}
                </h3>
                <p className="font-body" style={{ fontSize: "14px", color: "var(--mid-gray)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn instructions */}
      <section className="py-16 px-4" style={{ background: "var(--teal-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="LINKEDIN CREDENTIAL" />
          <h2 className="font-display font-bold mb-4 mt-2" style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "var(--navy)" }}>
            How to Add It to LinkedIn
          </h2>
          <div className="space-y-3 font-body" style={{ color: "var(--mid-gray)", fontSize: "16px" }}>
            <p>After your certificate is issued:</p>
            <ol className="space-y-3 ml-4" style={{ listStyle: "decimal" }}>
              {[
                'Go to your LinkedIn profile and click "Add profile section"',
                'Select "Licenses & Certifications"',
                'Certification Name: AITrustAudit.com Practitioner Certificate',
                "Issuing Organization: AITrustAudit.com",
                "Issue date and credential ID will be provided with your certificate",
              ].map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="FAQ" />
          <h2 className="font-display font-bold mb-8 mt-2" style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "var(--navy)" }}>
            Honest Answers to Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-sm"
                style={{ background: "white", border: "1px solid var(--divider)" }}
              >
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "15px", color: "var(--navy)" }}>
                  {f.q}
                </h3>
                <p className="font-body" style={{ fontSize: "15px", color: "var(--mid-gray)" }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Earn the Practitioner Certificate"
        subhead="Enroll in the AI Security Audit Fundamentals course. Complete the capstone. Get certified."
        primaryCTA="Enroll Now — $297"
        primaryHref="/course#enroll"
        secondaryCTA="View the Curriculum"
        secondaryHref="/course"
      />
    </>
  );
}
