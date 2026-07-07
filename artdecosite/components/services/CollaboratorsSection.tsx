import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import {
  collaborators,
  collaboratorsIntro,
  type Collaborator,
} from "@/lib/constants/collaborators";

function LogoPlaceholder({ collaborator }: { collaborator: Collaborator }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-cream-soft"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,168,106,0.08),transparent_68%)]" />
      <div className="absolute inset-4 border border-gold/10" />
      <span className="relative font-heading text-2xl uppercase tracking-[0.18em] text-ink/20 transition-colors duration-300 group-hover:text-gold/45 sm:text-3xl">
        {collaborator.initials}
      </span>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-body text-[9px] uppercase tracking-[0.32em] text-gold/35">
        Logo
      </span>
    </div>
  );
}

function CollaboratorTile({ collaborator }: { collaborator: Collaborator }) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden ring-1 ring-gold/12 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:ring-gold/30 group-hover:shadow-[0_16px_36px_-24px_rgba(35,32,25,0.24)]">
        <LogoPlaceholder collaborator={collaborator} />
        <div className="border-t border-gold/10 bg-cream px-4 py-4 text-center transition-colors duration-300 group-hover:bg-white sm:px-5 sm:py-5">
          <p className="font-heading text-sm font-normal text-ink/75 transition-colors duration-300 group-hover:text-ink sm:text-base">
            {collaborator.name}
          </p>
          <p className="mt-1 font-body text-[10px] uppercase tracking-[0.28em] text-gold/50">
            Placeholder
          </p>
        </div>
      </div>
    </article>
  );
}

export function CollaboratorsSection() {
  return (
    <section className="relative overflow-hidden bg-cream pb-24 pt-8 sm:pt-10 lg:pb-32 lg:pt-12">
      <BotanicalAccent position="top-right" className="opacity-35" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
          <div className="mb-6 flex items-center gap-4 sm:mb-7">
            <span className="h-px flex-1 bg-gold/20" />
            <span className="text-gold/40">◆</span>
            <span className="h-px flex-1 bg-gold/20" />
          </div>

          <h2 className="font-heading text-3xl font-normal text-ink sm:text-4xl lg:text-[2.75rem]">
            {collaboratorsIntro.heading}
          </h2>
          <p className="mt-4 font-body text-base italic leading-relaxed text-ink/55 sm:mt-5 sm:text-lg">
            {collaboratorsIntro.subheading}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {collaborators.map((collaborator) => (
            <CollaboratorTile key={collaborator.id} collaborator={collaborator} />
          ))}
        </div>
      </div>
    </section>
  );
}
