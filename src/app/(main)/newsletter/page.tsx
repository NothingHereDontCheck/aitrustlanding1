import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import CircuitPattern from "@/components/CircuitPattern";
import CTABanner from "@/components/CTABanner";
import LeadMagnet from "@/components/LeadMagnet";

export const metadata: Metadata = {
  title: "The AI Trust Briefing — Weekly AI Security Newsletter | AITrustAudit.com",
  description:
    "Weekly AI security intel for practitioners who actually have to act on it. One risk, one tip, one resource. Every Tuesday. Free.",
};

const sampleIssue = {
  title: "Issue #12: The Shadow AI Audit You're Not Running",
  preview: `This week: most AI security audits miss the biggest surface area entirely — not because the risks are hidden, but because the audit methodology doesn't account for AI tools that look like productivity apps.

**The Risk:** Shadow AI is now embedded in tools you've already approved. Grammarly, Notion, Zoom, Salesforce — all processing data with AI that your DPA with those vendors may not cover.

**The Technique:** During your next AI Tool Inventory, don't ask "what AI tools are you using?" Ask "what tools help you write faster, summarize documents, or answer questions?" You'll get a completely different list.

**The Resource:** The OWASP LLM Top 10 is the most practical technical reference for AI application security right now. Read items LLM01 (Prompt Injection) and LLM06 (Excessive Agency) first if you're pressed for time.`,
};

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.14} />
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,172,193,0.12) 0%, transparent 70%)",
            top: "-80px",
            right: "0",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <SectionLabel text="FREE WEEKLY NEWSLETTER" className="justify-center flex" />
          <h1
            className="font-display font-black mt-3 mb-4 glow-text"
            style={{ fontSize: "clamp(32px, 6vw, 60px)", color: "white" }}
          >
            The AI Trust Briefing
          </h1>
          <p
            className="font-body mb-8 mx-auto"
            style={{ fontSize: "clamp(16px, 2.5vw, 19px)", color: "var(--teal-lt)", maxWidth: "520px" }}
          >
            Weekly AI security intel — for practitioners who actually have to act on it.
          </p>

          {/* Social proof */}
          <div
            className="flex flex-wrap justify-center gap-6 mb-10 font-body"
            style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}
          >
            <span>📅 Every Tuesday</span>
            <span>📧 500–700 words</span>
            <span>🔒 No spam, ever</span>
          </div>

          {/* Inline subscribe */}
          <div className="max-w-md mx-auto">
            <LeadMagnet
              headline=""
              subhead=""
              dark={true}
            />
          </div>
        </div>
      </section>

      {/* What's in each issue */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel text="WHAT YOU GET" />
          <h2 className="font-display font-bold mb-8 mt-2" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", color: "var(--navy)" }}>
            Every Tuesday, Four Things
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "01", title: "One Risk", desc: "A current AI security risk or news item, explained in plain English with context for what it means in practice." },
              { num: "02", title: "One Technique", desc: "A practical tip, technique, or methodology update you can apply immediately. Not theory — actionable." },
              { num: "03", title: "One Resource", desc: "A tool, framework, template, or reference explained with enough context to know whether it matters to you." },
              { num: "04", title: "One CTA", desc: "Usually a course module, template, or article. One per issue, always relevant to what we just covered." },
            ].map((item) => (
              <div
                key={item.num}
                className="corner-bracket p-5 rounded-sm"
                style={{ background: "white", border: "1px solid var(--divider)" }}
              >
                <div
                  className="font-display font-bold mb-3"
                  style={{ fontSize: "28px", color: "var(--teal-lt)", opacity: 0.5 }}
                >
                  {item.num}
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "14px", color: "var(--navy)" }}>
                  {item.title}
                </h3>
                <p className="font-body" style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample issue */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="SAMPLE ISSUE" />
          <h2 className="font-display font-bold mb-6 mt-2" style={{ fontSize: "clamp(20px, 3vw, 26px)", color: "var(--navy)" }}>
            What a Typical Tuesday Looks Like
          </h2>
          <div
            className="corner-bracket rounded-sm p-8"
            style={{ background: "var(--light-bg)", border: "1px solid var(--divider)" }}
          >
            <p
              className="font-display font-bold mb-4"
              style={{ fontSize: "11px", color: "var(--teal-lt)", letterSpacing: "3px", textTransform: "uppercase" }}
            >
              {sampleIssue.title}
            </p>
            <div className="space-y-4 font-body" style={{ fontSize: "16px", color: "var(--mid-gray)", lineHeight: 1.7 }}>
              {sampleIssue.preview.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--navy)">$1</strong>'),
                  }}
                />
              ))}
            </div>
            <div
              className="mt-6 pt-4 font-body italic"
              style={{ borderTop: "1px solid var(--divider)", fontSize: "13px", color: "var(--mid-gray)" }}
            >
              — End of sample. Subscribe to get the full issue every Tuesday.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom subscribe */}
      <section className="relative overflow-hidden py-16 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.1} />
        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="font-display font-bold mb-3" style={{ fontSize: "clamp(22px, 3.5vw, 32px)", color: "white" }}>
            Join the Briefing
          </h2>
          <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>
            Every Tuesday. Free. Unsubscribe any time.
          </p>
          <LeadMagnet headline="" subhead="" dark={true} />
        </div>
      </section>

      <CTABanner
        headline="While you're here — the course."
        subhead="If the newsletter is the weekly briefing, the course is the methodology. 6.5 hours to audit-ready."
        primaryCTA="View the Course"
        primaryHref="/course"
        secondaryCTA="Free Risk Overview"
        secondaryHref="/free-risk-overview"
      />
    </>
  );
}
