import { HeraldicCrest } from "./HeraldicCrest";

type OrnamentDividerProps = {
  showCrest?: boolean;
  className?: string;
};

export function OrnamentDivider({
  showCrest = true,
  className = "",
}: OrnamentDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex w-full items-center justify-center gap-3 sm:gap-5 ${className}`}
    >
      <span className="divider-gold h-px w-10 sm:w-16" />
      <span className="hidden h-px w-6 bg-cocoa/15 sm:block" />
      {showCrest ? (
        <HeraldicCrest size="sm" tone="brass" className="shrink-0 opacity-80" />
      ) : (
        <span className="text-brass/40">◆</span>
      )}
      <span className="hidden h-px w-6 bg-cocoa/15 sm:block" />
      <span className="divider-gold h-px w-10 sm:w-16" />
    </div>
  );
}
