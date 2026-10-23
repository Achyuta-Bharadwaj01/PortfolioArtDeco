import { HomePage } from "@/components/home/HomePage";
import { getFeaturedPortfolioItems } from "@/lib/portfolio";

export default async function Home() {
  const showcaseItems = await getFeaturedPortfolioItems();

  return <HomePage showcaseItems={showcaseItems} />;
}
