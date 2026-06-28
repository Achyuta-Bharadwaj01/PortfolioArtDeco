type JourneySideOrnamentProps = {
  side: "left" | "right";
};

function EditorialOrnament() {
  return (
    <svg
      viewBox="0 0 96 360"
      aria-hidden="true"
      className="h-[22rem] w-20 text-navy/20 xl:h-[26rem] xl:w-24"
      fill="none"
    >
      <path
        d="M 18 12 L 18 52 M 18 12 L 46 12"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M 18 348 L 18 308 M 18 348 L 46 348"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <line x1="48" y1="28" x2="48" y2="332" stroke="currentColor" strokeWidth="0.5" />

      <line x1="24" y1="64" x2="72" y2="64" stroke="currentColor" strokeWidth="0.5" />
      <polygon
        points="48,74 52,82 48,90 44,82"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <line x1="30" y1="120" x2="66" y2="120" stroke="currentColor" strokeWidth="0.35" />
      <rect
        x="42"
        y="132"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <line x1="30" y1="168" x2="66" y2="168" stroke="currentColor" strokeWidth="0.35" />
      <polygon
        points="48,180 52,188 48,196 44,188"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <line x1="30" y1="216" x2="66" y2="216" stroke="currentColor" strokeWidth="0.35" />
      <circle cx="48" cy="228" r="5" stroke="currentColor" strokeWidth="0.75" />

      <line x1="24" y1="264" x2="72" y2="264" stroke="currentColor" strokeWidth="0.5" />

      <path
        d="M 48 276 L 62 296 L 48 316 L 34 296 Z"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M 48 284 L 56 296 L 48 308 L 40 296 Z"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function JourneySideOrnament({ side }: JourneySideOrnamentProps) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 hidden w-[calc((100%-min(100%,92rem))/2)] min-[1440px]:block ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      <div
        className={`absolute inset-y-0 ${isLeft ? "right-0 border-r border-navy/[0.06]" : "left-0 border-l border-navy/[0.06]"}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(2,43,58,0.035) 0, rgba(2,43,58,0.035) 1px, transparent 1px, transparent 18px)",
        }}
      />

      <div
        className={`absolute top-[18%] ${isLeft ? "right-6 xl:right-10" : "left-6 xl:left-10"}`}
      >
        <div className={isLeft ? "" : "scale-x-[-1]"}>
          <EditorialOrnament />
        </div>
        <p className="mt-4 text-center font-heading text-[9px] uppercase tracking-[0.38em] text-navy/30">
          {isLeft ? "MMXV" : "MMXXVI"}
        </p>
      </div>

      <p
        className={`absolute bottom-[22%] font-heading text-[9px] uppercase tracking-[0.42em] text-navy/25 [writing-mode:vertical-rl] ${
          isLeft ? "right-3 xl:right-5" : "left-3 xl:left-5"
        }`}
      >
        {isLeft ? "From the beginning" : "To the present"}
      </p>
    </div>
  );
}
