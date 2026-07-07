import type { BrandWork } from "@/lib/constants/brandWorks";
import {
  YouTubeEmbed,
  YouTubeEmbedLink,
} from "@/components/portfolio/YouTubeEmbed";

function videoGridClass(count: number) {
  if (count >= 3) {
    return "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7";
  }

  if (count === 2) {
    return "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8";
  }

  return "grid grid-cols-1";
}

function BrandWorkBlock({ brand }: { brand: BrandWork }) {
  return (
    <article className="border-t border-gold/15 pt-12 first:border-t-0 first:pt-0 sm:pt-14 lg:pt-16">
      <h3 className="font-heading text-3xl font-normal text-ink sm:text-4xl lg:text-[2.5rem]">
        {brand.name}
      </h3>

      <div className={`mt-8 lg:mt-10 ${videoGridClass(brand.videos.length)}`}>
        {brand.videos.map((video, index) => {
          const videoTitle = video.label
            ? `${brand.name} — ${video.label}`
            : `${brand.name} — Film ${index + 1}`;

          return (
            <div key={`${brand.slug}-${video.videoId}-${index}`} className="min-w-0">
              {video.label ? (
                <p className="mb-4 font-heading text-xl font-normal text-ink sm:text-2xl">
                  {video.label}
                </p>
              ) : null}

              <YouTubeEmbed videoId={video.videoId} title={videoTitle} />
              <YouTubeEmbedLink videoId={video.videoId} title={videoTitle} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

type BrandWorksSectionProps = {
  eyebrow: string;
  intro: string;
  brands: readonly BrandWork[];
};

export function BrandWorksSection({
  eyebrow,
  intro,
  brands,
}: BrandWorksSectionProps) {
  if (brands.length === 0) {
    return null;
  }

  const videoCount = brands.reduce(
    (total, brand) => total + brand.videos.length,
    0,
  );

  return (
    <div className="space-y-14 lg:space-y-16">
      <div className="border-b border-gold/20 pb-10 lg:flex lg:items-end lg:justify-between lg:pb-12">
        <div className="max-w-2xl">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/70 lg:text-[11px]">
            {eyebrow}
          </p>
          <p className="mt-5 max-w-lg text-lg italic leading-relaxed text-ink/55 lg:text-xl">
            {intro}
          </p>
        </div>

        <div className="mt-8 hidden items-center gap-5 lg:mt-0 lg:flex">
          <span className="h-px w-20 bg-gold/30" />
          <span className="text-gold/45">◆</span>
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-gold/60">
            {videoCount.toString().padStart(2, "0")} Films
          </span>
        </div>
      </div>

      <div className="space-y-12 sm:space-y-14 lg:space-y-16">
        {brands.map((brand) => (
          <BrandWorkBlock key={brand.slug} brand={brand} />
        ))}
      </div>
    </div>
  );
}
