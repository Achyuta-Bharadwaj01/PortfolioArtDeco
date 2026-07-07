import Image from "next/image";

type BotanicalAccentProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
};

/*
 * Floral_filgree.png is oriented as a BOTTOM-LEFT corner piece.
 * Transform map:
 *   bottom-left  → as-is (no transform)
 *   bottom-right → mirror X  (scale-x-[-1])
 *   top-left     → mirror Y  (scale-y-[-1])
 *   top-right    → rotate 180deg
 */
const transformMap = {
  "bottom-left": "",
  "bottom-right": "scale-x-[-1]",
  "top-left": "scale-y-[-1]",
  "top-right": "rotate-180",
};

const positionClasses = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

export function BotanicalAccent({
  position = "bottom-right",
  className = "",
}: BotanicalAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionClasses[position]} ${className}`}
    >
      <Image
        src="/UIItems/Floral_filgree.png"
        alt=""
        width={220}
        height={220}
        className={`h-32 w-32 object-contain sm:h-40 sm:w-40 lg:h-52 lg:w-52 ${transformMap[position]}`}
        style={{ mixBlendMode: "multiply", opacity: 0.45 }}
      />
    </div>
  );
}
