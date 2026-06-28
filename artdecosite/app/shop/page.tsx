import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";
import { Navbar } from "@/components/navbar";
import { shopConfig } from "@/lib/constants/shop";

export const metadata: Metadata = {
  title: "Shop | Shaineela Ahmed",
  description: "Shop — coming soon. A curated collection from Shaineela Ahmed.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar variant="dark" compact />
      <main className="flex min-h-[calc(100vh-12rem)] flex-1 flex-col">
        <ComingSoonPage config={shopConfig} />
      </main>
    </>
  );
}
