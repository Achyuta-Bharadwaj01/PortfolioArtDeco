import type { Metadata } from "next";
import { BlogSeriesSection } from "@/components/blog";
import { Navbar } from "@/components/navbar";
import { getPrimaryBlogSeries } from "@/lib/blog/manifest";

export const metadata: Metadata = {
  title: "Design Therapy | Shaineela Ahmed",
  description:
    "Design Therapy — essays on human-centered interiors, lifestyle, and the feeling of home.",
};

export default function BlogPage() {
  const series = getPrimaryBlogSeries();

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BlogSeriesSection series={series} />
      </main>
    </>
  );
}
