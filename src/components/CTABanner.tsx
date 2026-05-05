import Link from "next/link";
import CircuitPattern from "./CircuitPattern";

interface CTABannerProps {
  headline: string;
  subhead: string;
  primaryCTA: string;
  primaryHref: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline,
  subhead,
  primaryCTA,
  primaryHref,
  secondaryCTA,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 px-4" style={{ background: "var(--navy)" }}>
      <div className="accent-bar absolute top-0 left-0 right-0" />
      <CircuitPattern opacity={0.12} />
      {/* Glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,172,193,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2
          className="font-display font-bold mb-4 glow-text"
          style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "white" }}
        >
          {headline}
        </h2>
        <p className="font-body mb-8" style={{ fontSize: "18px", color: "var(--teal-lt)" }}>
          {subhead}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary text-center">
            {primaryCTA}
          </Link>
          {secondaryCTA && secondaryHref && (
            <Link href={secondaryHref} className="btn-ghost text-center">
              {secondaryCTA}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
