"use client";
import { useState } from "react";
import { Shield } from "lucide-react";

interface LeadMagnetProps {
  headline: string;
  subhead: string;
  dark?: boolean;
  buttonLabel?: string;
  successMessage?: string;
}

export default function LeadMagnet({
  headline,
  subhead,
  dark = false,
  buttonLabel = "Subscribe — Free",
  successMessage = "You're in. Check your inbox.",
}: LeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const inputBg = dark ? "rgba(255,255,255,0.08)" : "white";
  const inputBorder = dark ? "rgba(255,255,255,0.2)" : "var(--divider)";
  const textColor = dark ? "white" : "var(--navy)";
  const labelColor = dark ? "rgba(255,255,255,0.7)" : "var(--mid-gray)";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <Shield size={48} style={{ color: "var(--teal-lt)", margin: "0 auto 16px" }} />
        <h3 className="font-display font-bold mb-2" style={{ color: textColor, fontSize: "20px" }}>
          {successMessage}
        </h3>
      </div>
    );
  }

  return (
    <div>
      {headline && (
        <h3 className="font-display font-bold mb-2" style={{ color: textColor, fontSize: "clamp(18px, 3vw, 24px)" }}>
          {headline}
        </h3>
      )}
      {subhead && (
        <p className="font-body mb-6" style={{ color: labelColor, fontSize: "16px" }}>
          {subhead}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="sr-only" htmlFor="lm-name">First name</label>
          <input
            id="lm-name"
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded px-4 py-3 font-body"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="lm-email">Email address</label>
          <input
            id="lm-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded px-4 py-3 font-body"
            style={{
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>
        <button type="submit" className="btn-primary w-full text-center" style={{ width: "100%" }}>
          {buttonLabel}
        </button>
      </form>
      <p className="font-body mt-3 text-center" style={{ fontSize: "12px", color: labelColor }}>
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
