import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogEpisodeArticle } from "@/components/blog";
import { Navbar } from "@/components/navbar";
import {
  getEpisodeBySlug,
  getEpisodeSlugs,
} from "@/lib/blog/getEpisode";
import { getPrimaryBlogSeries } from "@/lib/blog/manifest";

type BlogEpisodePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEpisodeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogEpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    return {
      title: "Episode Not Found | Shaineela Ahmed",
    };
  }

  return {
    title: `${episode.title} | Design Therapy`,
    description: episode.excerpt,
  };
}

export default async function BlogEpisodePage({ params }: BlogEpisodePageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  const series = getPrimaryBlogSeries();

  if (!episode) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BlogEpisodeArticle series={series} episode={episode} />
      </main>
    </>
  );
}
