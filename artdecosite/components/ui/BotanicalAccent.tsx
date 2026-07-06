type BotanicalAccentProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
};

export function BotanicalAccent({
  position = "top-right",
  className = "",
}: BotanicalAccentProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const flipX = position.includes("left") ? "scale-x-[-1]" : "";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionClasses[position]} ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className={`h-32 w-32 text-cocoa/10 sm:h-40 sm:w-40 lg:h-48 lg:w-48 ${flipX}`}
        fill="none"
      >
        <path
          d="M100 20 C120 60 100 100 100 140 C100 100 80 60 100 20"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M100 40 C110 65 100 85 100 110"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M60 80 Q80 95 60 120"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M140 80 Q120 95 140 120"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M75 50 Q100 70 125 50"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <circle cx="100" cy="30" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}
