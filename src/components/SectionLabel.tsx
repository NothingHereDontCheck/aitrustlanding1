interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <p className={`section-label mb-3 ${className}`}>
      // {text}
    </p>
  );
}
