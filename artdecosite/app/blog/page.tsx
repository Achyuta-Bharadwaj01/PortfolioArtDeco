import type { Metadata } from "next";
import { BlogSeriesSection, BlogUnavailable } from "@/components/blog";
import { Navbar } from "@/components/navbar";
import { getBlogSeries } from "@/lib/blog/strapi";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Design Therapy | Shaineela Ahmed",
  description:
    "Design Therapy — essays on human-centered interiors, lifestyle, and the feeling of home.",
};

export default async function BlogPage() {
  const seriesList = await getBlogSeries();

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        {seriesList === null ? (
          <BlogUnavailable />
        ) : seriesList.length === 0 ? (
          <BlogUnavailable message="New essays will appear here once they are published." />
        ) : (
          seriesList.map((series) => <BlogSeriesSection key={series.slug} series={series} />)
        )}
      </main>
    </>
  );
}
