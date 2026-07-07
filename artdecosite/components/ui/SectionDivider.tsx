import Image from "next/image";

type SectionDividerProps = {
  label?: string;
  tone?: "mist" | "white" | "fade" | "fadeReverse" | "dark";
};

const toneClasses = {
  mist: "bg-cream",
  white: "bg-cream-soft",
  fade: "bg-warm-fade",
  fadeReverse: "bg-warm-fade-reverse",
  dark: "bg-moss",
} as const;

export function SectionDivider({ label, tone = "mist" }: SectionDividerProps) {
  const isDark = tone === "dark";

  return (
    <div
      aria-hidden="true"
      className={`relative px-5 lg:px-8 ${toneClasses[tone]}`}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        {/*
         * The PNG has ~38% top + ~38% bottom transparent whitespace around
         * the actual flourish line. We crop it to a fixed viewport height so
         * only the ornament itself is visible, removing the large gaps.
         */}
        <div className="relative h-10 w-full overflow-hidden sm:h-11 lg:h-12">
          <Image
            src="/UIItems/Seperator_florish.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
            style={{
              opacity: isDark ? 0.55 : 0.85,
              filter: isDark
                ? "brightness(1.4)"
                : "sepia(0.35) saturate(1.3) brightness(0.95)",
            }}
          />
        </div>

        {label ? (
          <p
            className={`mt-1 font-body text-[10px] font-semibold uppercase tracking-[0.42em] pb-1 lg:text-[11px] ${
              isDark ? "text-gold-bright/60" : "text-gold/75"
            }`}
          >
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
