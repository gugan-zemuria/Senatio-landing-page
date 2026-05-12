import type { MetadataRoute } from "next";

const BASE_URL = "https://senatio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    // Services
    { url: "/managed-engineering-teams", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/engineering-team-scaling", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/offshore-engineering-team-india", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/remote-engineering-team-india", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/execution-improvement", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/engineering-workflow-automation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/internal-tools-custom-software", priority: 0.75, changeFrequency: "monthly" as const },
    // Roles
    { url: "/engineering-roles", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hire-ai-engineers-india", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hire-backend-engineers-india", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hire-devops-engineers-india", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hire-frontend-engineers-india", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/hire-full-stack-engineers-india", priority: 0.8, changeFrequency: "monthly" as const },
    // Case studies
    { url: "/case-studies", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/case-studies/b2b-saas-engineering-capacity", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/case-studies/growth-stage-engineering-scale", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/case-studies/manufacturing-digital-workflows", priority: 0.7, changeFrequency: "monthly" as const },
    // Other
    { url: "/industry-solutions", priority: 0.75, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
