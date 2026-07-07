import {
  getAllPortfolioItems,
  getAllPortfolioSlugs,
  getAllProjects,
  getPortfolioDetail,
} from "@/lib/portfolio";

export { getAllProjects, getPortfolioDetail as getProjectDetail, getAllPortfolioSlugs as getAllProjectSlugs };

export type { PortfolioDetail as ProjectDetail } from "@/lib/portfolio/types";

/** @deprecated Use getAllPortfolioItems from @/lib/portfolio */
export { getAllPortfolioItems };
