interface RiskCardProps {
  severity: "critical" | "high" | "medium" | "low";
  number?: number;
  title: string;
  description: string;
  question: string;
}

const severityConfig = {
  critical: { label: "CRITICAL", color: "var(--red)", bg: "rgba(183,28,28,0.08)", textColor: "#B71C1C" },
  high:     { label: "HIGH",     color: "var(--amber)", bg: "rgba(230,81,0,0.08)",  textColor: "#E65100" },
  medium:   { label: "MEDIUM",   color: "var(--teal)",  bg: "rgba(0,121,107,0.08)", textColor: "#00796B" },
  low:      { label: "LOW",      color: "var(--green)", bg: "rgba(27,94,32,0.08)",  textColor: "#1B5E20" },
};

export default function RiskCard({ severity, number, title, description, question }: RiskCardProps) {
  const cfg = severityConfig[severity];
  return (
    <div
      className="corner-bracket bg-white rounded-sm overflow-hidden"
      style={{
        borderLeft: `4px solid ${cfg.color}`,
        boxShadow: "0 2px 12px rgba(13,27,42,0.08)",
        padding: "24px 24px 24px 20px",
        position: "relative",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        {number !== undefined && (
          <span
            className="font-display font-bold text-xl"
            style={{ color: cfg.color, minWidth: "24px" }}
          >
            {String(number).padStart(2, "0")}
          </span>
        )}
        <span
          className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded"
          style={{ background: cfg.bg, color: cfg.textColor }}
        >
          {cfg.label}
        </span>
      </div>
      <h3
        className="font-display font-bold mb-2"
        style={{ fontSize: "15px", color: "var(--navy)" }}
      >
        {title}
      </h3>
      <p className="font-body mb-3" style={{ fontSize: "14px", color: "var(--mid-gray)", lineHeight: 1.6 }}>
        {description}
      </p>
      <div
        className="italic rounded"
        style={{
          fontSize: "13px",
          color: cfg.textColor,
          background: cfg.bg,
          padding: "10px 14px",
          borderLeft: `2px solid ${cfg.color}`,
        }}
      >
        ▸ {question}
      </div>
    </div>
  );
}
