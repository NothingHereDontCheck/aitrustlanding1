import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import BlogCard, { type BlogCardProps } from "@/components/BlogCard";
import CircuitPattern from "@/components/CircuitPattern";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "AI Security Blog | AITrustAudit.com",
  description:
    "Practitioner-level AI security articles, framework guides, how-tos, and compliance coverage. No academic fluff — just actionable intel.",
};

const articles: BlogCardProps[] = [
  {
    title: "The Complete AI Security Audit Guide for 2026",
    excerpt:
      "A practitioner's end-to-end guide to auditing AI deployments. Covers all 6 domains, framework mapping, and report writing. The most thorough AI audit resource available.",
    category: "Framework Guides",
    readTime: "18 min read",
    date: "May 2026",
    hasTemplate: true,
    slug: "complete-ai-security-audit-guide-2026",
  },
  {
    title: "NIST AI RMF 1.0 Explained in Plain English",
    excerpt:
      "The federal AI risk management framework decoded for practitioners. What it actually requires, what's optional, and how to map it to your existing controls.",
    category: "Framework Guides",
    readTime: "9 min read",
    date: "April 2026",
    hasTemplate: false,
    slug: "nist-ai-rmf-explained-plain-english",
  },
  {
    title: "How to Write an AI Acceptable Use Policy (Free Template)",
    excerpt:
      "Your employees are using AI tools. You need a written policy before your next audit — and before the breach that makes it obvious why. Here's how to write one that actually works.",
    category: "Practitioner How-Tos",
    readTime: "7 min read",
    date: "April 2026",
    hasTemplate: true,
    slug: "how-to-write-ai-acceptable-use-policy",
  },
  {
    title: "Shadow AI: What It Is, Why It's Dangerous, and How to Find It",
    excerpt:
      "Shadow AI is the new shadow IT — except it learns from your client data. Here's how to identify every unauthorized AI tool in your organization before your next audit does it for you.",
    category: "AI Risk Education",
    readTime: "8 min read",
    date: "March 2026",
    hasTemplate: false,
    slug: "shadow-ai-what-it-is-why-dangerous-how-to-find",
  },
  {
    title: "OWASP LLM Top 10 — What Every Security Pro Needs to Know",
    excerpt:
      "The OWASP LLM Top 10 is the closest thing to a universal standard for AI application security. Here's what each item actually means and how to test for it.",
    category: "Framework Guides",
    readTime: "10 min read",
    date: "March 2026",
    hasTemplate: false,
    slug: "owasp-llm-top-10-security-guide",
  },
];

const pillars = [
  { name: "All", color: "var(--navy)" },
  { name: "AI Risk Education", color: "var(--red)" },
  { name: "Framework Guides", color: "var(--teal)" },
  { name: "Practitioner How-Tos", color: "var(--navy)" },
  { name: "Compliance", color: "var(--amber)" },
  { name: "SMB Spotlight", color: "var(--green)" },
];

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.12} />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel text="THE BLOG" className="justify-center flex" />
          <h1
            className="font-display font-black mt-3 glow-text"
            style={{ fontSize: "clamp(28px, 5vw, 52px)", color: "white" }}
          >
            AI Security Intel for{" "}
            <span style={{ color: "var(--teal-lt)" }}>Practitioners</span>
          </h1>
          <p
            className="font-body mt-4 mx-auto"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px", maxWidth: "520px" }}
          >
            No academic hand-waving. No enterprise marketing copy. Just what you need to know —
            and what to do about it.
          </p>
        </div>
      </section>

      {/* Pillar filters (static display) */}
      <section className="py-6 px-4" style={{ background: "var(--light-bg)", borderBottom: "1px solid var(--divider)" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {pillars.map((p) => (
            <span
              key={p.name}
              className="font-body font-semibold px-3 py-1 rounded-sm text-xs uppercase tracking-wider"
              style={{ background: `${p.color}14`, color: p.color, border: `1px solid ${p.color}30` }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 px-4" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <BlogCard key={a.slug} {...a} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-body mb-4" style={{ color: "var(--mid-gray)", fontSize: "15px" }}>
              New articles publish weekly. Subscribe to The AI Trust Briefing to get them first.
            </p>
            <a href="/newsletter" className="btn-primary">
              Subscribe to The AI Trust Briefing →
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want the free risk overview while you're here?"
        subhead="One page, five risks. The fastest way to understand your AI exposure."
        primaryCTA="Download Free Risk Overview"
        primaryHref="/free-risk-overview"
        secondaryCTA="View the Course"
        secondaryHref="/course"
      />
    </>
  );
}
