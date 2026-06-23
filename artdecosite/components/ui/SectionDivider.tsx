type SectionDividerProps = {
  label?: string;
  tone?: "mist" | "white" | "fade" | "fadeReverse";
};

const toneClasses = {
  mist: "bg-mist",
  white: "bg-white",
  fade: "bg-gradient-to-b from-mist via-[#f3f5f7] to-white",
  fadeReverse: "bg-gradient-to-b from-white via-[#f3f5f7] to-mist",
} as const;

export function SectionDivider({ label, tone = "mist" }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`px-5 py-16 lg:px-8 lg:py-24 ${toneClasses[tone]}`}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <div className="flex w-full items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-navy/20 to-navy/30" />
          <span className="text-black/20">◆</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-navy/20 to-navy/30" />
        </div>

        {label ? (
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.42em] text-navy/55 lg:text-[11px]">
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
