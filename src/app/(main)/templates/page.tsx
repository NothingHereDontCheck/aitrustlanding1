import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CircuitPattern from "@/components/CircuitPattern";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "AI Security Templates & Frameworks | AITrustAudit.com",
  description:
    "Download AI security audit templates, AUP templates, vendor risk questionnaires, and risk matrices. Free and paid options available.",
};

const freeTemplates = [
  {
    name: "AI Security Risk Overview PDF",
    format: "PDF",
    description: "One-page overview of the five highest-priority AI security risks. Used by practitioners to brief SMB leadership before an audit.",
    href: "/free-risk-overview",
  },
  {
    name: "AI Acceptable Use Policy Template",
    format: "Word",
    description: "A complete AI AUP with all required sections pre-built. Customize the approved tool list and data classification restrictions, then get it signed.",
    href: "/free-risk-overview",
  },
];

const paidTemplates = [
  {
    name: "AI Tool Intake Questionnaire",
    format: "Word",
    price: "$29",
    description: "20 structured questions for interviewing department heads during the AI Tool Inventory phase. Designed to surface shadow AI that standard IT discovery misses.",
  },
  {
    name: "AI Vendor Risk Questionnaire",
    format: "Word",
    price: "$49",
    description: "A structured questionnaire for evaluating AI vendor security posture. Covers DPA review, sub-processor lists, breach notification, and security certifications.",
  },
  {
    name: "6-Domain Audit Workbook",
    format: "Excel",
    price: "$79",
    description: "The complete audit workbook for the 6-Domain Methodology. Pre-built scoring logic, evidence fields, and severity auto-calculation. The engine of the audit.",
  },
  {
    name: "Risk Matrix Template",
    format: "Excel",
    price: "$49",
    description: "Auto-color-coded risk matrix that maps findings to severity levels. Drop in your findings and the matrix handles prioritization.",
  },
  {
    name: "Full Audit Report Template",
    format: "Word",
    price: "$99",
    description: "Client-ready audit report template with executive summary, findings section, and appendix structure. Designed for a non-technical executive audience on the front end and a technical audience in the findings.",
  },
  {
    name: "90-Day Remediation Roadmap",
    format: "Word",
    price: "$49",
    description: "Turn audit findings into a structured 90-day remediation plan. Includes priority sequencing, responsible party fields, and progress tracking.",
  },
];

const formatColors: Record<string, string> = {
  PDF: "var(--red)",
  Word: "var(--teal)",
  Excel: "var(--green)",
};

function FormatBadge({ format }: { format: string }) {
  return (
    <span
      className="font-body font-bold uppercase text-xs px-2 py-0.5 rounded"
      style={{ background: `${formatColors[format]}18`, color: formatColors[format], letterSpacing: "1px" }}
    >
      {format}
    </span>
  );
}

export default function TemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.12} />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel text="TEMPLATE LIBRARY" className="justify-center flex" />
          <h1
            className="font-display font-black mt-3 glow-text"
            style={{ fontSize: "clamp(28px, 5vw, 52px)", color: "white" }}
          >
            AI Security{" "}
            <span style={{ color: "var(--teal-lt)" }}>Templates & Tools</span>
          </h1>
          <p
            className="font-body mt-4 mx-auto"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px", maxWidth: "520px" }}
          >
            Professional AI audit templates built for practitioners. Free options available.
            All paid templates included free with course enrollment.
          </p>
          <div
            className="inline-block mt-6 px-4 py-2 rounded font-body font-bold"
            style={{ background: "rgba(0,172,193,0.12)", border: "1px solid rgba(0,172,193,0.3)", color: "var(--teal-lt)", fontSize: "14px" }}
          >
            ✓ All paid templates included free with the{" "}
            <Link href="/course" style={{ color: "white", textDecoration: "underline" }}>
              AI Security Audit Fundamentals course
            </Link>
          </div>
        </div>
      </section>

      {/* Free Templates */}
      <section className="py-16 px-4" style={{ background: "var(--teal-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel text="FREE — EMAIL REQUIRED" />
          <h2 className="font-display font-bold mb-6 mt-2" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", color: "var(--navy)" }}>
            Free Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {freeTemplates.map((t) => (
              <div
                key={t.name}
                className="corner-bracket bg-white rounded-sm p-6"
                style={{ boxShadow: "0 2px 12px rgba(13,27,42,0.08)", border: "1px solid var(--divider)" }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <FormatBadge format={t.format} />
                  <span
                    className="font-display font-bold text-sm"
                    style={{ color: "var(--teal)" }}
                  >
                    FREE
                  </span>
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "16px", color: "var(--navy)" }}>
                  {t.name}
                </h3>
                <p className="font-body mb-4" style={{ fontSize: "14px", color: "var(--mid-gray)" }}>
                  {t.description}
                </p>
                <Link href={t.href} className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px" }}>
                  Download Free →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Templates */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel text="PAID TEMPLATES" />
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6 mt-2">
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", color: "var(--navy)" }}>
              Professional Templates
            </h2>
            <div
              className="font-body text-sm px-3 py-2 rounded shrink-0"
              style={{ background: "rgba(0,121,107,0.08)", color: "var(--teal)", border: "1px solid var(--teal)", whiteSpace: "nowrap" }}
            >
              All included free with the course
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {paidTemplates.map((t) => (
              <div
                key={t.name}
                className="corner-bracket bg-white rounded-sm p-6"
                style={{ boxShadow: "0 2px 12px rgba(13,27,42,0.08)", border: "1px solid var(--divider)" }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <FormatBadge format={t.format} />
                  <span
                    className="font-display font-bold"
                    style={{ color: "var(--navy)", fontSize: "18px" }}
                  >
                    {t.price}
                  </span>
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "15px", color: "var(--navy)" }}>
                  {t.name}
                </h3>
                <p className="font-body mb-4" style={{ fontSize: "14px", color: "var(--mid-gray)" }}>
                  {t.description}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="btn-primary"
                    style={{ fontSize: "13px", padding: "10px 20px" }}
                    aria-label={`Buy ${t.name} for ${t.price}`}
                  >
                    Buy Now — {t.price}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-sm text-center"
            style={{ background: "var(--navy)", border: "1px solid rgba(0,172,193,0.2)" }}
          >
            <p className="font-display font-bold mb-2" style={{ color: "white", fontSize: "18px" }}>
              Get all 8 templates for free with the course
            </p>
            <p className="font-body mb-5" style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px" }}>
              $483 in tools included with the AI Security Audit Fundamentals course at $297.
              Better methodology, better value.
            </p>
            <Link href="/course" className="btn-primary">
              View the Course — $297 →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Not sure which template to start with?"
        subhead="Start with the free risk overview. It'll tell you exactly which gaps need closing first."
        primaryCTA="Download Free Risk Overview"
        primaryHref="/free-risk-overview"
        secondaryCTA="View the Course"
        secondaryHref="/course"
      />
    </>
  );
}
