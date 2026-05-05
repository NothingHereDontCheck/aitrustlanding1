"use client";
import Link from "next/link";
import ShieldIcon from "./ShieldIcon";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", borderTop: "1px solid rgba(0,172,193,0.15)" }}>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ShieldIcon size="sm" glow />
              <span className="font-display font-bold" style={{ color: "var(--teal-lt)", fontSize: "14px" }}>
                AITrustAudit.com
              </span>
            </div>
            <p className="font-body mb-4" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", maxWidth: "320px" }}>
              Securing the Intelligent Future. Practitioner-level AI security education for the people who have to do the work.
            </p>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
              Jamel Rainey | AI Security Leader
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/course", label: "Course" },
                { href: "/templates", label: "Templates" },
                { href: "/blog", label: "Blog" },
                { href: "/newsletter", label: "Newsletter" },
                { href: "/about", label: "About" },
                { href: "/certification", label: "Certification" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body transition-colors"
                    style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--teal-lt)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="section-label mb-4">The AI Trust Briefing</p>
            <p className="font-body mb-4" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
              One AI security risk. One practical tip. One resource. Every Tuesday. Free.
            </p>
            <Link href="/newsletter" className="btn-primary" style={{ fontSize: "13px", padding: "10px 18px" }}>
              Subscribe Free →
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="font-body" style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>
            © 2026 AITrustAudit.com · All rights reserved
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="font-body" style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body" style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", textDecoration: "none" }}>
              Terms of Use
            </Link>
          </div>
          <p className="font-body text-center md:text-right" style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", maxWidth: "300px" }}>
            AITrustAudit.com is an independent education brand. Not affiliated with NIST, OWASP, or ISO.
          </p>
        </div>
      </div>
    </footer>
  );
}
