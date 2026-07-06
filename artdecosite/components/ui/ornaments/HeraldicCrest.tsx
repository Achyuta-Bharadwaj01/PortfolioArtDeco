type HeraldicCrestProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  tone?: "brass" | "cocoa" | "light" | "mauve";
};

const sizeMap = {
  sm: "h-28 w-28 sm:h-32 sm:w-32",
  md: "h-44 w-44 sm:h-56 sm:w-56",
  lg: "h-64 w-64 sm:h-80 sm:w-80",
  xl: "h-80 w-80 sm:h-[28rem] sm:w-[28rem]",
};

const toneMap = {
  brass: "text-brass/20",
  cocoa: "text-cocoa/14",
  light: "text-parchment/25",
  mauve: "text-mauve/18",
};

function FloralWreath() {
  return (
    <>
      {/* Left scroll */}
      <path
        d="M 48 100 C 30 80 28 55 42 38 C 52 28 62 32 58 44 C 54 56 44 62 48 72 C 52 82 62 88 58 100 C 54 112 42 118 48 100"
        stroke="currentColor"
        strokeWidth="0.55"
      />
      <path
        d="M 38 52 Q 32 48 36 42 M 44 36 Q 40 30 46 34 M 50 58 Q 44 54 48 48"
        stroke="currentColor"
        strokeWidth="0.35"
      />
      {/* Right scroll */}
      <path
        d="M 152 100 C 170 80 172 55 158 38 C 148 28 138 32 142 44 C 146 56 156 62 152 72 C 148 82 138 88 142 100 C 146 112 158 118 152 100"
        stroke="currentColor"
        strokeWidth="0.55"
      />
      <path
        d="M 162 52 Q 168 48 164 42 M 156 36 Q 160 30 154 34 M 150 58 Q 156 54 152 48"
        stroke="currentColor"
        strokeWidth="0.35"
      />
      {/* Top flourish */}
      <path
        d="M 70 42 Q 100 18 130 42 M 82 38 Q 100 28 118 38"
        stroke="currentColor"
        strokeWidth="0.45"
      />
      <path
        d="M 88 32 Q 100 22 112 32 M 94 28 L 100 20 L 106 28"
        stroke="currentColor"
        strokeWidth="0.4"
      />
      {/* Bottom flourish */}
      <path
        d="M 72 158 Q 100 182 128 158 M 84 154 Q 100 168 116 154"
        stroke="currentColor"
        strokeWidth="0.45"
      />
      {/* Leaf clusters */}
      <path d="M 62 68 Q 56 64 60 58 Q 66 62 62 68" stroke="currentColor" strokeWidth="0.4" />
      <path d="M 138 68 Q 144 64 140 58 Q 134 62 138 68" stroke="currentColor" strokeWidth="0.4" />
      <path d="M 78 148 Q 72 144 76 138 Q 82 142 78 148" stroke="currentColor" strokeWidth="0.4" />
      <path d="M 122 148 Q 128 144 124 138 Q 118 142 122 148" stroke="currentColor" strokeWidth="0.4" />
      {/* Side buds */}
      <circle cx="36" cy="100" r="2.5" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="164" cy="100" r="2.5" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="100" cy="24" r="2" stroke="currentColor" strokeWidth="0.35" />
      <circle cx="100" cy="176" r="2" stroke="currentColor" strokeWidth="0.35" />
    </>
  );
}

export function HeraldicCrest({
  size = "md",
  className = "",
  tone = "cocoa",
}: HeraldicCrestProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`pointer-events-none ${sizeMap[size]} ${toneMap[tone]} ${className}`}
      fill="none"
    >
      <FloralWreath />

      <text
        x="100"
        y="28"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6"
        fontFamily="var(--font-body), sans-serif"
        fontWeight="600"
        letterSpacing="3.5"
      >
        ESTD
      </text>

      <text
        x="88"
        y="112"
        fill="currentColor"
        fontSize="46"
        fontFamily="var(--font-garamond), Georgia, serif"
        fontStyle="italic"
        fontWeight="500"
      >
        S
      </text>
      <text
        x="108"
        y="112"
        fill="currentColor"
        fontSize="46"
        fontFamily="var(--font-garamond), Georgia, serif"
        fontStyle="italic"
        fontWeight="500"
      >
        A
      </text>

      <line x1="62" y1="128" x2="138" y2="128" stroke="currentColor" strokeWidth="0.35" />
      <text
        x="100"
        y="142"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7"
        fontFamily="var(--font-body), sans-serif"
        fontWeight="500"
        letterSpacing="3"
      >
        MMXV
      </text>

      <path
        d="M 100 148 L 108 162 L 100 158 L 92 162 Z"
        stroke="currentColor"
        strokeWidth="0.4"
      />
    </svg>
  );
}
