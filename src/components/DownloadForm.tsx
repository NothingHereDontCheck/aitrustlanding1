"use client";
import { useState } from "react";
import { Shield } from "lucide-react";

interface DownloadFormProps {
  headline: string;
  subhead: string;
  dark?: boolean;
  pdfPath?: string;
}

export default function DownloadForm({
  headline,
  subhead,
  dark = false,
  pdfPath = "/AITrustAudit_5RiskOverview.pdf",
}: DownloadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputBg = dark ? "rgba(255,255,255,0.08)" : "white";
  const inputBorder = dark ? "rgba(255,255,255,0.2)" : "var(--divider)";
  const textColor = dark ? "white" : "var(--navy)";
  const labelColor = dark ? "rgba(255,255,255,0.65)" : "var(--mid-gray)";

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) throw new Error("Failed to save");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <Shield size={40} style={{ color: "var(--teal-lt)", margin: "0 auto 16px" }} />
        <h3 className="font-display font-bold mb-2" style={{ color: textColor, fontSize: "20px" }}>
          Your download is ready{name ? `, ${name}` : ""}.
        </h3>
        <p className="font-body mb-6" style={{ color: labelColor, fontSize: "15px" }}>
          Click below to download the PDF instantly.
        </p>
        <a
          href={pdfPath}
          download
          className="btn-primary flex items-center justify-center gap-2"
          style={{ display: "flex" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download the PDF
        </a>
        <p className="font-body mt-3" style={{ fontSize: "12px", color: labelColor }}>
          No spam. Unsubscribe any time.
        </p>
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
          <label className="sr-only" htmlFor="df-name">First name</label>
          <input
            id="df-name"
            type="text"
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded px-4 py-3 font-body"
            style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textColor, fontSize: "16px", outline: "none" }}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="df-email">Email address</label>
          <input
            id="df-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded px-4 py-3 font-body"
            style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textColor, fontSize: "16px", outline: "none" }}
          />
        </div>
        {error && (
          <p className="font-body text-center" style={{ fontSize: "13px", color: "#ef4444" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full text-center"
          style={{ width: "100%", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Saving…" : "Get Free Access"}
        </button>
      </form>
      <p className="font-body mt-3 text-center" style={{ fontSize: "12px", color: labelColor }}>
        No spam. Unsubscribe any time. Your data is never sold or shared.
      </p>
    </div>
  );
}
