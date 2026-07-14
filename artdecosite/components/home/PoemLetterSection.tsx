import { EnvelopeLetter } from "@/components/home/EnvelopeLetter";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import { poemLetter } from "@/lib/constants/poem";

export function PoemLetterSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-moss to-moss-deep px-5 py-20 lg:px-8 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-botanical opacity-10"
      />

      <BotanicalAccent position="top-left" className="opacity-25" />
      <BotanicalAccent position="top-right" className="opacity-25" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold-bright/65 lg:text-[11px]">
          {poemLetter.eyebrow}
        </p>

        <p className="mt-5 font-script-display text-3xl text-gold-bright drop-shadow-[0_1px_10px_rgba(24,37,24,0.5)] sm:text-4xl">
          {poemLetter.scriptHeading}
        </p>

        <p className="mx-auto mt-5 max-w-sm font-body text-sm italic leading-relaxed text-cream/60 lg:text-base">
          {poemLetter.subheading}
        </p>

        <div className="mt-12 lg:mt-14">
          <EnvelopeLetter />
        </div>
      </div>
    </section>
  );
}
