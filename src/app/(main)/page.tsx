import Link from "next/link";
import ShieldIcon from "@/components/ShieldIcon";
import RiskCard from "@/components/RiskCard";
import SectionLabel from "@/components/SectionLabel";
import StatBand from "@/components/StatBand";
import CTABanner from "@/components/CTABanner";
import CircuitPattern from "@/components/CircuitPattern";
import NewsletterInlineForm from "@/components/NewsletterInlineForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Security Audit Education | AITrustAudit.com",
  description:
    "Learn to audit AI systems, govern AI tools, and manage AI risk. Practitioner-level courses, frameworks, and templates. Free resources available.",
};

const risks = [
  {
    severity: "critical" as const,
    number: 1,
    title: "Shadow AI: The Invisible Attack Surface",
    description:
      "Your employees are using AI tools you don't know about — on client data you can't see moving. Shadow AI is the new shadow IT, except it learns from your data.",
    question: "Do you know every AI tool your team used this week?",
  },
  {
    severity: "high" as const,
    number: 2,
    title: "Client Data in AI Training Pipelines",
    description:
      "That confidential intake form pasted into ChatGPT? It may have just become training data. Most AI tools have vague data retention policies and no-one reads them.",
    question: "Have you audited what your team actually pastes into AI tools?",
  },
  {
    severity: "high" as const,
    number: 3,
    title: "No AI Acceptable Use Policy",
    description:
      "If you don't have a written AI AUP, your team is making it up as they go. That's not a policy — it's a liability waiting to be discovered during your next audit.",
    question: "Can you produce a signed AI Acceptable Use Policy right now?",
  },
  {
    severity: "high" as const,
    number: 4,
    title: "Compliance Exposure (HIPAA, GDPR, SOC 2)",
    description:
      "AI tools process data. Data processing triggers compliance obligations. Most AI vendors do not sign BAAs, DPAs, or meet the standards your existing compliance posture requires.",
    question: "Which AI vendors in your stack have signed your BAA or DPA?",
  },
  {
    severity: "medium" as const,
    number: 5,
    title: "Unchecked AI Vendor & Third-Party Risk",
    description:
      "Your AI vendor's security posture is now your security posture. When was the last time you reviewed their sub-processors, data retention, and breach notification terms?",
    question: "When did you last review your AI vendor's sub-processor list?",
  },
];

const stats = [
  { value: "80%", label: "of AI data leaks come from inside the organization" },
  { value: "73%", label: "of SMBs have zero AI security policy" },
  { value: "$4.9M", label: "average cost of an AI-related breach" },
  { value: "5", label: "frameworks covered: NIST AI RMF, OWASP LLM Top 10, ISO 42001, GDPR, HIPAA" },
];

const audiences = [
  {
    icon: "🔒",
    title: "Security Practitioners",
    desc: "Need AI-specific audit skills to stay current. Your existing playbook doesn't cover LLM prompt injection or AI vendor risk assessment. It should.",
  },
  {
    icon: "📋",
    title: "Compliance & GRC Teams",
    desc: "AI broke your existing frameworks — here's what replaces them. NIST AI RMF isn't optional anymore, and neither is knowing how it maps to your existing controls.",
  },
  {
    icon: "🏢",
    title: "SMB Operators",
    desc: "Using AI tools with zero governance and zero idea what that costs. You don't need an enterprise security team. You need a practitioner-level starting point.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-4"
        style={{ background: "var(--navy)" }}
      >
        <CircuitPattern opacity={0.15} />
        {/* Glow orbs */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,172,193,0.15) 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,121,107,0.12) 0%, transparent 70%)",
            bottom: "-80px",
            left: "10%",
            filter: "blur(80px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Animated shield */}
          <div className="flex justify-center mb-8">
            <ShieldIcon size="lg" glow />
          </div>

          <h1
            className="font-display font-black mb-6 glow-text"
            style={{
              fontSize: "clamp(36px, 7vw, 72px)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Is Your AI Stack a{" "}
            <span style={{ color: "var(--teal-lt)" }}>Security Liability?</span>
          </h1>

          <p
            className="font-body mb-10 mx-auto"
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "var(--teal-lt)",
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            AITrustAudit.com teaches practitioners, compliance teams, and SMB operators how to audit
            AI systems — with real frameworks, real templates, and zero enterprise budget required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-risk-overview" className="btn-primary">
              Start Learning Free
            </Link>
          </div>

          <p
            className="font-body mt-6"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
          >
            Join The AI Trust Briefing — free weekly AI security intel, every Tuesday.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <StatBand stats={stats} />

      {/* 5 AI Risks */}
      <section className="py-20 px-4 scan-lines" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel text="WHAT WE TEACH YOU TO FIND" />
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--navy)" }}
            >
              The 5 AI Risks Hiding in Your Organization Right Now
            </h2>
            <p className="font-body mt-3 mx-auto" style={{ maxWidth: "560px", color: "var(--mid-gray)" }}>
              80% of AI data leaks come from inside your organization. Your team is the threat vector.
              Here&apos;s how to find them before your next audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risks.slice(0, 4).map((r) => (
              <RiskCard key={r.number} {...r} />
            ))}
            <div className="md:col-span-2 md:max-w-2xl md:mx-auto w-full">
              <RiskCard {...risks[4]} />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/free-risk-overview" className="btn-primary">
              Download the Free Risk Overview →
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.1} />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel text="YOUR PEOPLE" />
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "white" }}
            >
              Built for People Who Have to Do the Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="corner-bracket rounded-sm p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(0,172,193,0.2)",
                }}
              >
                <div className="text-3xl mb-4" aria-hidden="true">{a.icon}</div>
                <h3
                  className="font-display font-bold mb-3"
                  style={{ fontSize: "16px", color: "var(--teal-lt)" }}
                >
                  {a.title}
                </h3>
                <p className="font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section
        className="py-20 px-4"
        style={{ background: "var(--teal-bg)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel text="FREE DOWNLOAD" />
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--navy)" }}
            >
              Start Here — It&apos;s Free
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* PDF preview placeholder */}
            <div
              className="corner-bracket rounded-sm flex items-center justify-center"
              style={{
                background: "var(--navy)",
                minHeight: "280px",
                border: "1px solid rgba(0,172,193,0.3)",
              }}
            >
              <div className="text-center p-8">
                <ShieldIcon size="lg" glow />
                <p
                  className="font-display font-bold mt-4"
                  style={{ color: "var(--teal-lt)", fontSize: "14px", letterSpacing: "1px" }}
                >
                  AI SECURITY RISK OVERVIEW
                </p>
                <p className="font-body mt-2" style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>
                  One page · Five risks · Instant download
                </p>
              </div>
            </div>

            {/* Download */}
            <div>
              <h3 className="font-display font-bold mb-2" style={{ color: "white", fontSize: "clamp(18px, 3vw, 24px)" }}>
                The AI Security Risk Overview — Free Download
              </h3>
              <p className="font-body mb-6" style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>
                One page. Five risks. Instant download. Used by security consultants to brief SMB leadership.
              </p>
              <a
                href="/AITrustAudit_5RiskOverview.pdf"
                download
                className="btn-primary flex items-center justify-center gap-2"
                style={{ display: "flex" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Free — Instant Access
              </a>
              <p className="font-body mt-3 text-center" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                Free PDF — no sign-up required
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Newsletter teaser */}
      <section className="relative overflow-hidden py-16 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.1} />
        <div className="relative max-w-2xl mx-auto text-center">
          <SectionLabel text="THE AI TRUST BRIEFING" className="justify-center flex" />
          <h2
            className="font-display font-bold mb-3 mt-2"
            style={{ fontSize: "clamp(22px, 3.5vw, 32px)", color: "white" }}
          >
            The AI Trust Briefing
          </h2>
          <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.7)", fontSize: "17px" }}>
            One AI security risk, one practical tip, one tool or resource. Every Tuesday. Free.
          </p>
          <NewsletterInlineForm />
          <p className="font-body mt-3" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        headline="Ready to Audit Your AI Stack?"
        subhead="Download the free risk overview. Five risks, one page, no fluff."
        primaryCTA="Get the Free Risk Overview"
        primaryHref="/free-risk-overview"
      />
    </>
  );
}
