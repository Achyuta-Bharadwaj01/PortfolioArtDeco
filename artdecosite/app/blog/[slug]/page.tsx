import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogEpisodeArticle, BlogUnavailable } from "@/components/blog";
import { Navbar } from "@/components/navbar";
import { getEpisodeBySlug, getEpisodeSlugs } from "@/lib/blog/strapi";

export const revalidate = 60;

type BlogEpisodePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getEpisodeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogEpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getEpisodeBySlug(slug);

  if (page.status !== "ready") {
    return {
      title: "Episode Not Found | Shaineela Ahmed",
    };
  }

  return {
    title: `${page.episode.title} | Design Therapy`,
    description: page.episode.excerpt,
  };
}

export default async function BlogEpisodePage({ params }: BlogEpisodePageProps) {
  const { slug } = await params;
  const page = await getEpisodeBySlug(slug);

  if (page.status === "unavailable") {
    return (
      <>
        <Navbar />
        <main className="flex flex-1 flex-col">
          <BlogUnavailable />
        </main>
      </>
    );
  }

  if (page.status === "missing") {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BlogEpisodeArticle series={page.series} episode={page.episode} />
      </main>
    </>
  );
}
