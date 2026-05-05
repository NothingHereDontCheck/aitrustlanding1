"use client";
import { useState } from "react";
import { X } from "lucide-react";
import DownloadForm from "./DownloadForm";

interface DownloadModalProps {
  buttonLabel?: string;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
  pdfPath?: string;
}

export default function DownloadModal({
  buttonLabel = "Download Free →",
  buttonClassName = "btn-primary",
  buttonStyle,
  pdfPath = "/AITrustAudit_5RiskOverview.pdf",
}: DownloadModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        style={buttonStyle}
        onClick={() => setOpen(true)}
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(13,27,42,0.75)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-sm p-8"
            style={{ background: "white", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <DownloadForm
              headline="Get Your Free Download"
              subhead="Enter your details below for instant access."
              dark={false}
              pdfPath={pdfPath}
            />
          </div>
        </div>
      )}
    </>
  );
}
