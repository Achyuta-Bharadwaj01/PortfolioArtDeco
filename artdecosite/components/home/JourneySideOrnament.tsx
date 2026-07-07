type JourneySideOrnamentProps = {
  side: "left" | "right";
};

function EditorialOrnament() {
  return (
    <svg
      viewBox="0 0 96 360"
      aria-hidden="true"
      className="h-[22rem] w-20 text-gold/25 xl:h-[26rem] xl:w-24"
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

      {/* Botanical leaf motif */}
      <path
        d="M 48 108 Q 58 118 48 128 Q 38 118 48 108"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M 48 112 L 48 124"
        stroke="currentColor"
        strokeWidth="0.35"
      />

      <line x1="30" y1="140" x2="66" y2="140" stroke="currentColor" strokeWidth="0.35" />
      <rect
        x="42"
        y="152"
        width="12"
        height="12"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <line x1="30" y1="188" x2="66" y2="188" stroke="currentColor" strokeWidth="0.35" />
      <polygon
        points="48,200 52,208 48,216 44,208"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <line x1="30" y1="236" x2="66" y2="236" stroke="currentColor" strokeWidth="0.35" />
      <circle cx="48" cy="248" r="5" stroke="currentColor" strokeWidth="0.75" />

      <line x1="24" y1="284" x2="72" y2="284" stroke="currentColor" strokeWidth="0.5" />

      <path
        d="M 48 296 L 62 316 L 48 336 L 34 316 Z"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M 48 304 L 56 316 L 48 328 L 40 316 Z"
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
        className={`absolute inset-y-0 bg-fluted ${isLeft ? "right-0 border-r border-gold/[0.08]" : "left-0 border-l border-gold/[0.08]"}`}
      />

      <div
        className={`absolute top-[18%] ${isLeft ? "right-6 xl:right-10" : "left-6 xl:left-10"}`}
      >
        <div className={isLeft ? "" : "scale-x-[-1]"}>
          <EditorialOrnament />
        </div>
        <p className="mt-4 text-center font-heading text-[9px] uppercase tracking-[0.38em] text-gold/35">
          {isLeft ? "MMXV" : "MMXXVI"}
        </p>
      </div>

      <p
        className={`absolute bottom-[22%] font-heading text-[9px] uppercase tracking-[0.42em] text-gold/30 [writing-mode:vertical-rl] ${
          isLeft ? "right-3 xl:right-5" : "left-3 xl:left-5"
        }`}
      >
        {isLeft ? "From the beginning" : "To the present"}
      </p>
    </div>
  );
}
