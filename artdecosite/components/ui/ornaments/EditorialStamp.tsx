type EditorialStampProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  tone?: "brass" | "cocoa" | "light";
};

const sizeMap = {
  sm: "h-24 w-24 sm:h-28 sm:w-28",
  md: "h-36 w-36 sm:h-44 sm:w-44",
  lg: "h-52 w-52 sm:h-64 sm:w-64",
  xl: "h-72 w-72 sm:h-96 sm:w-96",
};

const toneMap = {
  brass: "text-brass/25",
  cocoa: "text-cocoa/12",
  light: "text-parchment/20",
};

export function EditorialStamp({
  size = "md",
  className = "",
  tone = "brass",
}: EditorialStampProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`pointer-events-none ${sizeMap[size]} ${toneMap[tone]} ${className}`}
      fill="none"
    >
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="86" stroke="currentColor" strokeWidth="0.35" />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 3" />

      <defs>
        <path
          id="stamp-outer"
          d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
        />
        <path
          id="stamp-inner"
          d="M 100,100 m -68,0 a 68,68 0 1,0 136,0 a 68,68 0 1,0 -136,0"
        />
      </defs>

      <text
        fill="currentColor"
        fontSize="6.5"
        fontFamily="var(--font-body), sans-serif"
        fontWeight="500"
        letterSpacing="2.8"
      >
        <textPath href="#stamp-outer" startOffset="2%">
          SHAINELA AHMED · INTERIOR ARCHITECT & SET DESIGNER ·
        </textPath>
      </text>

      <text
        fill="currentColor"
        fontSize="5.5"
        fontFamily="var(--font-body), sans-serif"
        fontWeight="400"
        letterSpacing="2.2"
      >
        <textPath href="#stamp-inner" startOffset="18%">
          ESTABLISHED MMXV · ELARIA STUDIOS ·
        </textPath>
      </text>

      <text
        x="100"
        y="112"
        textAnchor="middle"
        fill="currentColor"
        fontSize="52"
        fontFamily="var(--font-garamond), Georgia, serif"
        fontStyle="italic"
        fontWeight="500"
      >
        SA
      </text>

      <line x1="55" y1="128" x2="145" y2="128" stroke="currentColor" strokeWidth="0.4" />
      <text
        x="100"
        y="142"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7"
        fontFamily="var(--font-body), sans-serif"
        fontWeight="600"
        letterSpacing="4"
      >
        MMXXVI
      </text>

      {/* Corner tick marks */}
      {[0, 90, 180, 270].map((angle) => (
        <line
          key={angle}
          x1={100 + 88 * Math.cos((angle * Math.PI) / 180)}
          y1={100 + 88 * Math.sin((angle * Math.PI) / 180)}
          x2={100 + 94 * Math.cos((angle * Math.PI) / 180)}
          y2={100 + 94 * Math.sin((angle * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}
