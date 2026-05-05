interface Stat {
  value: string;
  label: string;
}

interface StatBandProps {
  stats: Stat[];
}

export default function StatBand({ stats }: StatBandProps) {
  return (
    <div
      className="w-full py-10 px-4"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 py-4">
              <span
                className="font-display font-bold"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "white", lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span
                className="font-body mt-2"
                style={{ fontSize: "13px", color: "var(--teal-lt)", letterSpacing: "0.5px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
