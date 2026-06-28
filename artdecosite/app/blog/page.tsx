import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";
import { Navbar } from "@/components/navbar";
import { blogConfig } from "@/lib/constants/blog";

export const metadata: Metadata = {
  title: "Blog | Shaineela Ahmed",
  description: "Blog — coming soon. Stories and notes from Shaineela Ahmed.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar variant="dark" compact />
      <main className="flex min-h-[calc(100vh-12rem)] flex-1 flex-col">
        <ComingSoonPage config={blogConfig} />
      </main>
    </>
  );
}
