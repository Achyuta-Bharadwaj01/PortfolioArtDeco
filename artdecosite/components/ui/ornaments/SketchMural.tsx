type MuralVariant = "botanical" | "interior" | "architectural";

type SketchMuralProps = {
  variant?: MuralVariant;
  className?: string;
  tone?: "cocoa" | "walnut" | "mauve";
};

const toneMap = {
  cocoa: "text-cocoa/10",
  walnut: "text-walnut/12",
  mauve: "text-mauve/14",
};

function BotanicalSketch() {
  return (
    <>
      {/* Large willow branch — prestige mural inspired */}
      <path
        d="M 40 320 Q 80 280 100 200 Q 120 120 140 60 Q 150 30 160 20"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M 100 200 Q 130 180 155 140 Q 170 115 180 90"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M 100 200 Q 70 175 50 140 Q 35 115 25 95"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      {/* Leaf clusters */}
      {[20, 60, 100, 140, 180, 220, 260].map((y, i) => (
        <g key={y}>
          <path
            d={`M 100 ${y} Q ${115 + (i % 3) * 8} ${y - 18} ${100 + (i % 2 ? 20 : -20)} ${y - 8} Q ${85 - (i % 3) * 8} ${y - 18} 100 ${y}`}
            stroke="currentColor"
            strokeWidth="0.45"
          />
          <path
            d={`M 100 ${y + 30} Q ${108 + (i % 2) * 6} ${y + 14} ${100 + (i % 2 ? 14 : -14)} ${y + 22}`}
            stroke="currentColor"
            strokeWidth="0.35"
          />
        </g>
      ))}
      {/* Cross-hatch shading */}
      <path d="M 55 250 L 75 230 M 60 255 L 80 235 M 65 260 L 85 240" stroke="currentColor" strokeWidth="0.2" opacity="0.6" />
      <path d="M 130 180 L 150 160 M 135 185 L 155 165" stroke="currentColor" strokeWidth="0.2" opacity="0.6" />
    </>
  );
}

function InteriorSketch() {
  return (
    <>
      {/* Chandelier */}
      <line x1="200" y1="30" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" />
      <path d="M 170 80 L 230 80 L 220 95 L 180 95 Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M 185 95 L 185 110 M 200 95 L 200 115 M 215 95 L 215 110" stroke="currentColor" strokeWidth="0.35" />
      <circle cx="185" cy="115" r="3" stroke="currentColor" strokeWidth="0.3" />
      <circle cx="200" cy="120" r="3" stroke="currentColor" strokeWidth="0.3" />
      <circle cx="215" cy="115" r="3" stroke="currentColor" strokeWidth="0.3" />
      {/* Arched doorway */}
      <path d="M 60 320 L 60 180 Q 60 120 120 120 Q 180 120 180 180 L 180 320" stroke="currentColor" strokeWidth="0.7" />
      <path d="M 75 320 L 75 185 Q 75 135 120 135 Q 165 135 165 185 L 165 320" stroke="currentColor" strokeWidth="0.4" />
      {/* Chair silhouette */}
      <path d="M 250 280 L 250 220 L 270 200 L 310 200 L 330 220 L 330 280" stroke="currentColor" strokeWidth="0.55" />
      <path d="M 255 240 L 325 240 M 260 260 L 320 260" stroke="currentColor" strokeWidth="0.3" />
      <line x1="250" y1="280" x2="240" y2="300" stroke="currentColor" strokeWidth="0.4" />
      <line x1="330" y1="280" x2="340" y2="300" stroke="currentColor" strokeWidth="0.4" />
      {/* Side table + vase */}
      <ellipse cx="290" cy="290" rx="25" ry="6" stroke="currentColor" strokeWidth="0.4" />
      <path d="M 285 290 L 285 310 M 295 290 L 295 310" stroke="currentColor" strokeWidth="0.35" />
      <path d="M 290 270 Q 285 250 290 235 Q 295 250 290 270" stroke="currentColor" strokeWidth="0.4" />
      {/* Floor line */}
      <line x1="20" y1="320" x2="380" y2="320" stroke="currentColor" strokeWidth="0.35" />
      <path d="M 30 320 L 50 300 M 40 320 L 60 300 M 350 320 L 330 300" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
    </>
  );
}

function ArchitecturalSketch() {
  return (
    <>
      {/* Classical column */}
      <rect x="30" y="100" width="40" height="220" stroke="currentColor" strokeWidth="0.55" />
      <rect x="25" y="90" width="50" height="12" stroke="currentColor" strokeWidth="0.5" />
      <rect x="22" y="315" width="56" height="10" stroke="currentColor" strokeWidth="0.5" />
      <line x1="35" y1="110" x2="35" y2="310" stroke="currentColor" strokeWidth="0.25" />
      <line x1="50" y1="110" x2="50" y2="310" stroke="currentColor" strokeWidth="0.25" />
      <line x1="65" y1="110" x2="65" y2="310" stroke="currentColor" strokeWidth="0.25" />
      {/* Fluted panel section */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={i}
          x1={110 + i * 8}
          y1="80"
          x2={110 + i * 8}
          y2="320"
          stroke="currentColor"
          strokeWidth="0.3"
        />
      ))}
      {/* Art deco diamond motif */}
      <path d="M 200 60 L 220 80 L 200 100 L 180 80 Z" stroke="currentColor" strokeWidth="0.5" />
      <path d="M 200 70 L 210 80 L 200 90 L 190 80 Z" stroke="currentColor" strokeWidth="0.35" />
      <line x1="200" y1="100" x2="200" y2="140" stroke="currentColor" strokeWidth="0.35" />
      <path d="M 200 140 L 230 170 L 200 200 L 170 170 Z" stroke="currentColor" strokeWidth="0.45" />
      {/* Compass/rosette */}
      <circle cx="300" cy="200" r="40" stroke="currentColor" strokeWidth="0.4" />
      <circle cx="300" cy="200" r="28" stroke="currentColor" strokeWidth="0.3" />
      <line x1="300" y1="155" x2="300" y2="245" stroke="currentColor" strokeWidth="0.3" />
      <line x1="255" y1="200" x2="345" y2="200" stroke="currentColor" strokeWidth="0.3" />
      <line x1="268" y1="168" x2="332" y2="232" stroke="currentColor" strokeWidth="0.25" />
      <line x1="332" y1="168" x2="268" y2="232" stroke="currentColor" strokeWidth="0.25" />
      {/* Dimension lines */}
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.3" />
      <line x1="20" y1="45" x2="20" y2="55" stroke="currentColor" strokeWidth="0.3" />
      <line x1="80" y1="45" x2="80" y2="55" stroke="currentColor" strokeWidth="0.3" />
      <text x="50" y="42" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="var(--font-body)" letterSpacing="1">
        III
      </text>
    </>
  );
}

const variantMap = {
  botanical: BotanicalSketch,
  interior: InteriorSketch,
  architectural: ArchitecturalSketch,
};

export function SketchMural({
  variant = "botanical",
  className = "",
  tone = "cocoa",
}: SketchMuralProps) {
  const Sketch = variantMap[variant];

  return (
    <svg
      viewBox="0 0 400 340"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none ${toneMap[tone]} ${className}`}
      fill="none"
    >
      <Sketch />
    </svg>
  );
}
