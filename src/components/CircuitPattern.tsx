"use client";

interface CircuitPatternProps {
  opacity?: number;
  className?: string;
}

export default function CircuitPattern({ opacity = 0.15, className = "" }: CircuitPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <line x1="0" y1="20" x2="60" y2="20" stroke="#00ACC1" strokeWidth="0.8" opacity={opacity} />
          <line x1="20" y1="60" x2="80" y2="60" stroke="#00ACC1" strokeWidth="0.8" opacity={opacity} />
          {/* Vertical lines */}
          <line x1="60" y1="0" x2="60" y2="20" stroke="#00ACC1" strokeWidth="0.8" opacity={opacity} />
          <line x1="20" y1="60" x2="20" y2="80" stroke="#00ACC1" strokeWidth="0.8" opacity={opacity} />
          <line x1="40" y1="0" x2="40" y2="60" stroke="#00ACC1" strokeWidth="0.5" opacity={opacity * 0.6} />
          {/* Node dots */}
          <circle cx="60" cy="20" r="2.5" fill="#00ACC1" opacity={opacity * 1.2} />
          <circle cx="20" cy="60" r="2.5" fill="#00ACC1" opacity={opacity * 1.2} />
          <circle cx="40" cy="40" r="1.5" fill="#00ACC1" opacity={opacity * 0.8} />
        </pattern>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#00ACC1" opacity={opacity * 0.5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}
