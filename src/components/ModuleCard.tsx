"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ModuleCardProps {
  number: number;
  title: string;
  duration: string;
  lessons?: string[];
  outcome?: string;
}

export default function ModuleCard({ number, title, duration, lessons = [], outcome }: ModuleCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-sm overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(13,27,42,0.07)", border: "1px solid var(--divider)" }}
    >
      <button
        className="w-full flex items-center gap-4 p-5 text-left transition-colors hover:bg-gray-50"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-display font-bold text-2xl shrink-0"
          style={{ color: "var(--teal-lt)", minWidth: "36px" }}
        >
          {String(number).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <span
            className="font-display font-bold block"
            style={{ fontSize: "15px", color: "var(--navy)" }}
          >
            {title}
          </span>
          <span
            className="font-body"
            style={{ fontSize: "13px", color: "var(--mid-gray)" }}
          >
            {duration}
          </span>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: "var(--teal)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            flexShrink: 0,
          }}
        />
      </button>
      {open && lessons.length > 0 && (
        <div className="px-5 pb-5 pt-1" style={{ borderTop: "1px solid var(--divider)" }}>
          <ul className="space-y-1 mb-3">
            {lessons.map((lesson, i) => (
              <li key={i} className="flex items-start gap-2 font-body" style={{ fontSize: "14px", color: "var(--mid-gray)" }}>
                <span style={{ color: "var(--teal)", marginTop: "2px" }}>▸</span>
                {lesson}
              </li>
            ))}
          </ul>
          {outcome && (
            <p
              className="italic font-body rounded px-3 py-2"
              style={{ fontSize: "13px", color: "var(--teal)", background: "rgba(0,121,107,0.06)", borderLeft: "2px solid var(--teal)" }}
            >
              After this module: {outcome}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
