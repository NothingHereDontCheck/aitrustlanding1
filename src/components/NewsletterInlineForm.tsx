"use client";
import { useState } from "react";

export default function NewsletterInlineForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  if (done) {
    return (
      <p className="font-body" style={{ color: "var(--teal-lt)", fontSize: "15px" }}>
        ✓ You&apos;re subscribed. See you Tuesday.
      </p>
    );
  }

  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email"
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded px-4 py-3 font-body"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          fontSize: "16px",
          outline: "none",
        }}
      />
      <button type="submit" className="btn-primary shrink-0">
        Subscribe Free
      </button>
    </form>
  );
}
