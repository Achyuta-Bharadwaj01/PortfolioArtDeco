import { HomePage } from "@/components/home/HomePage";
import { getFeaturedPortfolioItems } from "@/lib/portfolio";

export default function Home() {
  const showcaseItems = getFeaturedPortfolioItems();

  return <HomePage showcaseItems={showcaseItems} />;
}
