"use client";

interface ShieldIconProps {
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  className?: string;
}

const sizes = { sm: 32, md: 56, lg: 96 };

export default function ShieldIcon({ size = "md", glow = false, className = "" }: ShieldIconProps) {
  const px = sizes[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={glow ? { filter: "drop-shadow(0 0 10px rgba(0,172,193,0.6))" } : undefined}
      aria-label="AITrustAudit shield logo"
    >
      {/* Outer shield */}
      <path
        d="M50 4 L90 20 L90 55 C90 78 72 96 50 106 C28 96 10 78 10 55 L10 20 Z"
        stroke="#00ACC1"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner shield */}
      <path
        d="M50 14 L82 28 L82 54 C82 73 68 88 50 98 C32 88 18 73 18 54 L18 28 Z"
        fill="#0D1B2A"
      />
      {/* AI text */}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fill="#00ACC1"
        fontFamily="Orbitron, monospace"
        fontWeight="700"
        fontSize="26"
      >
        AI
      </text>
    </svg>
  );
}
