import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CircuitPattern from "@/components/CircuitPattern";
import CTABanner from "@/components/CTABanner";
import ShieldIcon from "@/components/ShieldIcon";

export const metadata: Metadata = {
  title: "About Jamel Rainey | AITrustAudit.com",
  description:
    "Jamel Rainey is an AI Security Leader and the creator of AITrustAudit.com — practitioner-level AI security education for people who actually do the work.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.12} />
        <div className="relative max-w-4xl mx-auto">
          <SectionLabel text="ABOUT" />
          <h1
            className="font-display font-black mt-3 glow-text"
            style={{ fontSize: "clamp(28px, 5vw, 52px)", color: "white" }}
          >
            Jamel Rainey
          </h1>
          <p className="font-body mt-2" style={{ color: "var(--teal-lt)", fontSize: "18px", fontWeight: 600 }}>
            AI Security Leader
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Photo placeholder */}
            <div
              className="corner-bracket rounded-sm flex items-center justify-center"
              style={{
                background: "var(--navy)",
                minHeight: "280px",
                border: "2px solid rgba(0,172,193,0.3)",
              }}
              aria-label="Jamel Rainey photo"
            >
              <div className="text-center p-6">
                <ShieldIcon size="lg" glow />
                <p className="font-body mt-4" style={{ color: "var(--teal-lt)", fontSize: "13px" }}>
                  Jamel Rainey
                </p>
                <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>
                  AI Security Leader
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-2 space-y-5 font-body" style={{ fontSize: "17px", color: "var(--mid-gray)", lineHeight: 1.7 }}>
              <p>
                I built AITrustAudit.com because the education gap was costing real organizations real money — and nobody was filling it at the practitioner level.
              </p>
              <p>
                There was no shortage of AI risk content. Academic white papers, enterprise vendor reports, framework documentation from NIST and OWASP that assumed you had a team of 20 and a six-figure tooling budget. What didn&apos;t exist was a practical, structured curriculum for the security practitioner, the GRC analyst, the IT consultant, and the SMB owner who just needed to know: what do I audit, how do I score it, and how do I write the report?
              </p>
              <p>
                That&apos;s what the AI Security Audit Fundamentals course is. It&apos;s built from real-world AI audit engagements with SMBs — the kind where you&apos;re the only security person in the room and you need a framework that actually works at that scale.
              </p>
              <p>
                I believe the best AI security education is written by people who have to do the work, for people who have to do the work. No enterprise hand-waving. No condescension toward practitioners. Just the methodology, the templates, and the plain-English explanations that make the work possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AITrustAudit */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="WHY THIS EXISTS" />
          <h2 className="font-display font-bold mb-6 mt-2" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", color: "var(--navy)" }}>
            The Gap in AI Security Education
          </h2>
          <div className="space-y-4 font-body" style={{ fontSize: "17px", color: "var(--mid-gray)", lineHeight: 1.7 }}>
            <p>
              When generative AI became mainstream, every organization faced the same problem simultaneously: employees were using AI tools, data was moving in ways nobody had mapped, and existing compliance frameworks had no specific controls for any of it.
            </p>
            <p>
              Enterprise organizations hired consultants. Academic researchers wrote papers. Framework bodies published guidance that took 18 months to finalize.
            </p>
            <p>
              Practitioners — the people actually responsible for security at organizations that can&apos;t afford a big consulting engagement — were left reading NIST documentation and trying to figure out how to turn it into a billable audit methodology.
            </p>
            <p>
              AITrustAudit.com is the resource I wish had existed then. The 6-Domain Audit Methodology, the template library, and The AI Trust Briefing are all built around one question: what does someone actually need to do this work?
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="relative overflow-hidden py-16 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.1} />
        <div className="relative max-w-3xl mx-auto">
          <SectionLabel text="THE AI TRUST BRIEFING" />
          <h2 className="font-display font-bold mb-4 mt-2" style={{ fontSize: "clamp(22px, 3.5vw, 32px)", color: "white" }}>
            Weekly AI Security Intel
          </h2>
          <p className="font-body mb-6" style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px" }}>
            Every Tuesday: one AI security risk, one practical technique, one tool or resource. No news aggregation, no sponsored content, no fluff. Just what you need to stay current.
          </p>
          <Link href="/newsletter" className="btn-primary">
            Subscribe to The AI Trust Briefing →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="GET IN TOUCH" />
          <h2 className="font-display font-bold mb-4 mt-2" style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "var(--navy)" }}>
            Speaking, Media & Inquiries
          </h2>
          <p className="font-body mb-6" style={{ color: "var(--mid-gray)", fontSize: "17px" }}>
            For speaking opportunities, media inquiries, course partnerships, or general questions, reach out directly. I respond to every message — just not same-day.
          </p>
          <div
            className="p-6 rounded-sm"
            style={{ background: "var(--light-bg)", border: "1px solid var(--divider)" }}
          >
            <p className="font-display font-bold mb-2" style={{ fontSize: "14px", color: "var(--navy)" }}>
              Contact
            </p>
            <p className="font-body" style={{ color: "var(--mid-gray)", fontSize: "15px" }}>
              Use the newsletter subscription form on the{" "}
              <Link href="/newsletter" style={{ color: "var(--teal)" }}>newsletter page</Link>{" "}
              or reach out via LinkedIn. Speaking and media inquiries are welcome — response time is
              typically 2–3 business days.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start with the Free Risk Overview"
        subhead="Five risks, one page. The fastest way to understand your AI exposure."
        primaryCTA="Download Free Risk Overview"
        primaryHref="/free-risk-overview"
        secondaryCTA="View the Course"
        secondaryHref="/course"
      />
    </>
  );
}
