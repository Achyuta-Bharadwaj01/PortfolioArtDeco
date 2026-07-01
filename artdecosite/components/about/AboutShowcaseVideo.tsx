import { aboutEssay } from "@/lib/constants/about";

export function AboutShowcaseVideo() {
  return (
    <section className="bg-white px-5 pb-10 pt-2 sm:px-6 lg:px-10 lg:pb-14 lg:pt-4 xl:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative aspect-video w-full overflow-hidden bg-black ring-1 ring-black/[0.06]">
          <video
            className="h-full w-full object-cover"
            src={aboutEssay.videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
        </div>
        <p className="mt-4 text-center font-heading text-[10px] uppercase tracking-[0.32em] text-black/35">
          Showcase reel — placeholder
        </p>
      </div>
    </section>
  );
}
