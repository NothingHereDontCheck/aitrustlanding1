"use client";
import Link from "next/link";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  category: "AI Risk Education" | "Framework Guides" | "Practitioner How-Tos" | "Compliance" | "SMB Spotlight";
  readTime: string;
  date: string;
  hasTemplate?: boolean;
  slug: string;
}

const categoryColors: Record<BlogCardProps["category"], string> = {
  "AI Risk Education":   "var(--red)",
  "Framework Guides":    "var(--teal)",
  "Practitioner How-Tos":"var(--navy)",
  "Compliance":          "var(--amber)",
  "SMB Spotlight":       "var(--green)",
};

export default function BlogCard({ title, excerpt, category, readTime, date, hasTemplate, slug }: BlogCardProps) {
  const color = categoryColors[category];
  return (
    <Link
      href={`/blog/${slug}`}
      className="block bg-white rounded-sm overflow-hidden transition-all duration-200 group"
      style={{
        boxShadow: "0 2px 12px rgba(13,27,42,0.08)",
        borderLeft: "4px solid transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--teal)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(13,27,42,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(13,27,42,0.08)";
      }}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
            style={{ background: `${color}18`, color }}
          >
            {category}
          </span>
          {hasTemplate && (
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
              style={{ background: "rgba(0,172,193,0.1)", color: "var(--teal-lt)" }}
            >
              📥 Template included
            </span>
          )}
        </div>
        <h3
          className="font-display font-bold mb-2 group-hover:text-teal-600 transition-colors"
          style={{ fontSize: "16px", color: "var(--navy)", lineHeight: 1.3 }}
        >
          {title}
        </h3>
        <p className="font-body mb-4 line-clamp-2" style={{ fontSize: "14px", color: "var(--mid-gray)" }}>
          {excerpt}
        </p>
        <div className="flex items-center gap-3" style={{ fontSize: "12px", color: "var(--mid-gray)" }}>
          <span>Jamel Rainey</span>
          <span>·</span>
          <span>{readTime}</span>
          <span>·</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}
