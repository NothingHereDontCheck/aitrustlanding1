"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ShieldIcon from "./ShieldIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/course", label: "Course" },
  { href: "/templates", label: "Templates" },
  { href: "/blog", label: "Blog" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: "var(--navy)", borderBottom: "1px solid rgba(0,172,193,0.2)" }}
    >
      {/* Top accent bar */}
      <div className="accent-bar" />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label="AITrustAudit home">
          <ShieldIcon size="sm" glow />
          <span
            className="font-display font-bold hidden sm:block"
            style={{ fontSize: "14px", color: "var(--teal-lt)", letterSpacing: "1px" }}
          >
            AITrustAudit<span style={{ color: "white" }}>.com</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body font-semibold transition-colors"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", textDecoration: "none", letterSpacing: "0.5px" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--teal-lt)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/free-risk-overview" className="btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }}>
            Free Risk Overview
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ background: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body font-semibold py-2"
              style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/free-risk-overview" className="btn-primary text-center mt-2" onClick={() => setOpen(false)}>
            Free Risk Overview
          </Link>
        </nav>
      )}
    </header>
  );
}
