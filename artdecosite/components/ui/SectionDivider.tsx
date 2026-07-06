type SectionDividerProps = {
  label?: string;
  tone?: "mist" | "white" | "fade" | "fadeReverse";
};

const toneClasses = {
  mist: "bg-mist",
  white: "bg-white",
  fade: "bg-warm-fade",
  fadeReverse: "bg-warm-fade-reverse",
} as const;

export function SectionDivider({ label, tone = "mist" }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`px-5 py-6 lg:px-8 lg:py-8 ${toneClasses[tone]}`}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
        <div className="flex w-full items-center gap-4 sm:gap-6">
          <span className="divider-gold h-px flex-1" />
          <span className="text-bronze/30">◆</span>
          <span className="divider-gold h-px flex-1" />
        </div>

        {label ? (
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.42em] text-cocoa/55 lg:text-[11px]">
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
