import { OrnamentDivider } from "@/components/ui/ornaments";

type SectionDividerProps = {
  label?: string;
  tone?: "mist" | "white" | "fade" | "fadeReverse";
  ornate?: boolean;
};

const toneClasses = {
  mist: "bg-mist",
  white: "bg-white",
  fade: "bg-warm-fade",
  fadeReverse: "bg-warm-fade-reverse",
} as const;

export function SectionDivider({
  label,
  tone = "mist",
  ornate = true,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative px-5 py-6 lg:px-8 lg:py-8 ${toneClasses[tone]}`}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
        {ornate ? (
          <OrnamentDivider className="max-w-xl" />
        ) : (
          <div className="flex w-full items-center gap-4 sm:gap-6">
            <span className="divider-gold h-px flex-1" />
            <span className="text-brass/35">◆</span>
            <span className="divider-gold h-px flex-1" />
          </div>
        )}

        {label ? (
          <p className="font-body text-[10px] font-bold uppercase tracking-[0.42em] text-cocoa/55 lg:text-[11px]">
            {label}
          </p>
        ) : null}
      </div>
    </div>
  );
}
