import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ModuleCard from "@/components/ModuleCard";
import CircuitPattern from "@/components/CircuitPattern";
import CTABanner from "@/components/CTABanner";
import ShieldIcon from "@/components/ShieldIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Security Audit Fundamentals Course | AITrustAudit.com",
  description:
    "Learn to conduct a complete AI security audit in 6.5 hours. 8 modules, 35 lessons, full template library, and a practitioner certificate. $297.",
  openGraph: {
    title: "AI Security Audit Fundamentals Course | AITrustAudit.com",
    description: "From Zero to Audit-Ready in 6.5 hours. 8 modules, 35 lessons, full template library.",
    images: [{ url: "/og-course.png", width: 1200, height: 630 }],
  },
};

const modules = [
  {
    number: 0,
    title: "Welcome & Course Orientation",
    duration: "20 min",
    lessons: ["How to use the course materials", "What you'll be able to do when you're done", "Downloading your template library"],
    outcome: "You know exactly what you're getting into and have your tools ready.",
  },
  {
    number: 1,
    title: "The AI Risk Landscape",
    duration: "45 min",
    lessons: ["What makes AI different from traditional software risk", "The threat model: insider risk, shadow AI, vendor exposure", "Why existing security frameworks fall short", "Reading the OWASP LLM Top 10 without the jargon"],
    outcome: "You can brief a non-technical executive on the actual AI risk landscape in 10 minutes.",
  },
  {
    number: 2,
    title: "Frameworks & Standards",
    duration: "55 min",
    lessons: ["NIST AI RMF — the federal AI risk management framework explained plain English", "OWASP LLM Top 10 — the practitioner's guide", "ISO 42001 — what it is and who needs to care", "Mapping frameworks to each other and to your existing controls"],
    outcome: "You can navigate NIST AI RMF, OWASP LLM Top 10, and ISO 42001 without a glossary.",
  },
  {
    number: 3,
    title: "Pre-Audit Preparation",
    duration: "50 min",
    lessons: ["Scoping the engagement", "Stakeholder interviews — who to talk to and what to ask", "Document collection: policies, contracts, vendor agreements", "Using the AI Tool Intake Questionnaire", "Setting client expectations"],
    outcome: "You walk into the audit with a complete scope, stakeholder list, and document checklist.",
  },
  {
    number: 4,
    title: "The 6-Domain Audit Methodology — Core Module",
    duration: "90 min",
    lessons: [
      "Domain 1: AI Tool Inventory — find every AI system, including shadow AI",
      "Domain 2: Data Classification & Handling — what's going into the model and where",
      "Domain 3: Access Controls & Identity — MFA, RBAC, least privilege for AI tools",
      "Domain 4: Vendor & Third-Party Risk — reading DPAs, assessing AI vendor policies",
      "Domain 5: Policy & Governance — auditing AUPs, training records, accountability",
      "Domain 6: Compliance Alignment — mapping findings to HIPAA, SOC 2, GDPR, state laws",
      "Using the 6-Domain Audit Workbook in real-time",
    ],
    outcome: "You can run a complete, structured AI security audit across any organization.",
  },
  {
    number: 5,
    title: "Risk Scoring & Findings Documentation",
    duration: "45 min",
    lessons: ["How to score findings consistently using the Risk Matrix", "Severity levels: Critical, High, Medium, Low — with examples", "Writing findings that clients can actually act on", "Prioritizing remediation by business impact"],
    outcome: "Every finding in your audit has a defensible severity score and clear remediation path.",
  },
  {
    number: 6,
    title: "Writing the Audit Report",
    duration: "60 min",
    lessons: ["Anatomy of a professional AI security audit report", "Executive summary: what to include and what to cut", "Technical findings section — clarity over completeness", "Using the Full Audit Report Template", "Delivering the report: how to present findings without losing the client"],
    outcome: "You produce a client-ready audit report that a CEO can read and a CISO can act on.",
  },
  {
    number: 7,
    title: "Building the Ongoing Engagement",
    duration: "35 min",
    lessons: ["Turning a one-time audit into a recurring engagement", "The 90-Day Remediation Roadmap Template", "Quarterly check-in frameworks", "Pricing AI audit engagements", "Building referral pipelines from audit clients"],
    outcome: "Your first audit client has a path to becoming a recurring client.",
  },
  {
    number: 8,
    title: "Capstone & Certification",
    duration: "45 min",
    lessons: ["Capstone exercise: audit a realistic scenario organization", "Completing and submitting your capstone for review", "Earning the AITrustAudit.com Practitioner Certificate", "Adding the credential to LinkedIn"],
    outcome: "You hold a practitioner certificate and have a real audit artifact in your portfolio.",
  },
];

const templates = [
  { name: "AI Security Risk Overview PDF", value: "$29" },
  { name: "AI Tool Intake Questionnaire (20 questions)", value: "$29" },
  { name: "AI Acceptable Use Policy Template (Word)", value: "$79" },
  { name: "AI Vendor Risk Questionnaire", value: "$49" },
  { name: "6-Domain Audit Workbook (Excel with scoring)", value: "$99" },
  { name: "Risk Matrix Template (Excel, auto-color-coded)", value: "$49" },
  { name: "Full Audit Report Template (Word, client-ready)", value: "$99" },
  { name: "90-Day Remediation Roadmap Template", value: "$49" },
];

const enrollReasons = [
  "You're a security practitioner who needs AI-specific audit skills",
  "You're in GRC or compliance and AI just blew up your framework",
  "You're an IT consultant whose clients are asking about AI risk",
  "You're an SMB operator who wants to understand your own exposure",
  "You're transitioning into AI security from another cybersecurity discipline",
];

const faqs = [
  { q: "How long do I have access?", a: "Lifetime, including all future updates. The course evolves as the threat landscape does." },
  { q: "Do I need a cybersecurity background?", a: "Helpful but not required. Module 1 covers the AI risk landscape foundations for anyone new to this space." },
  { q: "What format is the course?", a: "Self-paced video, downloadable templates, and written exercises you can complete on your own schedule." },
  { q: "Is there a certificate?", a: "Yes. Complete the capstone module and you receive a shareable AITrustAudit.com Practitioner Certificate. LinkedIn-ready." },
  { q: "Can I expense this?", a: "Yes. A receipt and full course description are available for reimbursement. Most employers cover practitioner training." },
];

export default function CoursePage() {
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
            background: "radial-gradient(circle, rgba(0,172,193,0.14) 0%, transparent 70%)",
            top: "-80px",
            right: "5%",
            filter: "blur(80px)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel text="THE COURSE" className="justify-center flex" />
          <h1
            className="font-display font-black mb-5 mt-3 glow-text"
            style={{ fontSize: "clamp(28px, 5.5vw, 60px)", color: "white", lineHeight: 1.1 }}
          >
            Learn to Audit Any AI Deployment{" "}
            <span style={{ color: "var(--teal-lt)" }}>in 6.5 Hours</span>
          </h1>
          <p
            className="font-body mb-8 mx-auto"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.75)", maxWidth: "660px" }}
          >
            The only practitioner-level AI security audit course built for professionals who have to
            produce a real report — not just pass a test.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="#enroll" className="btn-primary" style={{ fontSize: "17px", padding: "16px 40px" }}>
              Enroll Now — $297
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-center gap-6 font-body"
            style={{ fontSize: "14px", color: "var(--teal-lt)" }}
          >
            {["8 Modules", "35 Lessons", "Full Template Library", "Certificate Included"].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <span style={{ color: "var(--teal)" }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Is this for you? */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="IS THIS FOR YOU?" />
          <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(22px, 3.5vw, 30px)", color: "var(--navy)" }}>
            You Should Enroll If...
          </h2>
          <ul className="space-y-4">
            {enrollReasons.map((r, i) => (
              <li key={i} className="flex items-start gap-3 font-body" style={{ fontSize: "17px", color: "var(--mid-gray)" }}>
                <span
                  className="font-display font-bold shrink-0"
                  style={{ color: "var(--teal-lt)", marginTop: "1px" }}
                >
                  ▸
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Module 4 Feature — The flagship */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto">
          <SectionLabel text="FLAGSHIP MODULE" />
          <h2 className="font-display font-bold mb-2" style={{ fontSize: "clamp(22px, 3.5vw, 32px)", color: "var(--navy)" }}>
            Module 4: The 6-Domain Audit Methodology
          </h2>
          <p className="font-body mb-8" style={{ color: "var(--mid-gray)", fontSize: "17px" }}>
            The core of the course. 90 minutes that teach you exactly how to run a structured AI
            security audit — domain by domain, finding by finding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: "01", title: "AI Tool Inventory", desc: "Find every AI system in the organization, including the shadow AI your team doesn't think you know about." },
              { num: "02", title: "Data Classification & Handling", desc: "Map what's going into AI models and where it goes. The data flow is the risk." },
              { num: "03", title: "Access Controls & Identity", desc: "MFA, RBAC, and least-privilege for AI tools. Most orgs haven't touched this." },
              { num: "04", title: "Vendor & Third-Party Risk", desc: "Reading DPAs, assessing AI vendor security posture, and knowing what to flag." },
              { num: "05", title: "Policy & Governance", desc: "Auditing AUPs, training records, and the accountability structures (or lack thereof)." },
              { num: "06", title: "Compliance Alignment", desc: "Map findings to HIPAA, SOC 2, GDPR, and applicable state laws. The report section that clients actually care about." },
            ].map((d) => (
              <div
                key={d.num}
                className="corner-bracket p-5 rounded-sm"
                style={{ background: "var(--light-bg)", border: "1px solid var(--divider)" }}
              >
                <div
                  className="font-display font-bold mb-2"
                  style={{ fontSize: "28px", color: "var(--teal-lt)", opacity: 0.6 }}
                >
                  {d.num}
                </div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: "14px", color: "var(--navy)" }}>
                  {d.title}
                </h3>
                <p className="font-body" style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="FULL CURRICULUM" />
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "clamp(22px, 3.5vw, 32px)", color: "var(--navy)" }}>
            All 8 Modules — 35 Lessons — ~6.5 Hours
          </h2>
          <div className="space-y-3">
            {modules.map((m) => (
              <ModuleCard key={m.number} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Template Library */}
      <section className="py-16 px-4" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel text="BONUS TEMPLATES" />
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(22px, 3.5vw, 32px)", color: "var(--navy)" }}>
              8 Templates — Included Free
            </h2>
            <div
              className="font-display font-bold px-4 py-2 rounded"
              style={{ background: "rgba(0,121,107,0.08)", color: "var(--teal)", fontSize: "14px", border: "1px solid var(--teal)", whiteSpace: "nowrap" }}
            >
              $483 in tools — yours free
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {templates.map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-sm"
                style={{ background: "var(--light-bg)", border: "1px solid var(--divider)" }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--teal)" }}>✓</span>
                  <span className="font-body" style={{ fontSize: "14px", color: "var(--navy)" }}>
                    {t.name}
                  </span>
                </div>
                <span
                  className="font-body font-bold shrink-0"
                  style={{ fontSize: "13px", color: "var(--mid-gray)", textDecoration: "line-through", marginLeft: "12px" }}
                >
                  {t.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-4" style={{ background: "var(--teal-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="YOUR INSTRUCTOR" />
          <div className="flex flex-col sm:flex-row gap-8 items-start mt-4">
            <div
              className="shrink-0 rounded-sm flex items-center justify-center"
              style={{
                width: 120,
                height: 120,
                background: "var(--navy)",
                border: "2px solid var(--teal-lt)",
              }}
              aria-label="Instructor photo placeholder"
            >
              <ShieldIcon size="md" glow />
            </div>
            <div>
              <h2 className="font-display font-bold mb-1" style={{ fontSize: "22px", color: "var(--navy)" }}>
                Jamel Rainey
              </h2>
              <p className="font-body mb-3" style={{ color: "var(--teal)", fontWeight: 600 }}>
                AI Security Leader
              </p>
              <p className="font-body" style={{ color: "var(--mid-gray)", fontSize: "16px" }}>
                I built this curriculum out of real-world AI audit engagements with SMBs. There
                wasn&apos;t a practitioner-level course that covered the full audit lifecycle — from
                scoping the engagement to writing the report. So I made one. No enterprise budget
                required, no PhD needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="enroll" className="relative overflow-hidden py-20 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.1} />
        <div className="relative max-w-2xl mx-auto text-center">
          <SectionLabel text="ENROLLMENT" className="justify-center flex" />
          <h2
            className="font-display font-bold mb-2 mt-3"
            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "white" }}
          >
            <span
              className="font-body font-normal"
              style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", textDecoration: "line-through", display: "block", marginBottom: "4px" }}
            >
              Standard price: $497
            </span>
            <span style={{ color: "var(--teal-lt)" }}>$297</span>{" "}
            <span style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)" }}>launch price</span>
          </h2>
          <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>
            Launch pricing won&apos;t last. Enroll now, get lifetime access.
          </p>

          <div
            className="corner-bracket rounded-sm p-8 mb-8 text-left"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,172,193,0.25)" }}
          >
            <p className="font-display font-bold mb-4" style={{ color: "var(--teal-lt)", fontSize: "14px", letterSpacing: "2px" }}>
              // WHAT&apos;S INCLUDED
            </p>
            <ul className="space-y-3">
              {[
                "8 Modules · 35 Lessons · ~6.5 hours of content",
                "8 professional templates valued at $483",
                "AITrustAudit.com Practitioner Certificate",
                "Lifetime access including all future updates",
                "30-day money-back guarantee — no questions asked",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body" style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: "var(--teal-lt)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link href="#" className="btn-primary" style={{ fontSize: "18px", padding: "18px 48px", display: "inline-block" }}>
            Enroll Now — $297
          </Link>
          <p className="font-body mt-4" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            30-day money-back guarantee. Secure checkout via Stripe.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="FAQ" />
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "clamp(22px, 3vw, 30px)", color: "var(--navy)" }}>
            Questions You&apos;re Probably Asking
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
        headline="Still on the fence? Start with the free risk overview."
        subhead="One page. Five risks. No credit card. No pitch."
        primaryCTA="Download Free Risk Overview"
        primaryHref="/free-risk-overview"
        secondaryCTA="Enroll in the Course"
        secondaryHref="#enroll"
      />
    </>
  );
}
