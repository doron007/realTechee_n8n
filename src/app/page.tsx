import { ResourceCardsGrid, ResourceCardItem } from "@/components/ui/resource-cards-grid";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const portalFeatures: ResourceCardItem[] = [
  {
    iconSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=64&h=64&fit=crop&crop=center",
    title: "Design Agent",
    lastUpdated: "Coming Soon",
    href: "/design-agent",
  },
  {
    iconSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=center",
    title: "Prompt Agent",
    lastUpdated: "Coming Soon",
    href: "/prompt-agent",
  },
  {
    iconSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop&crop=center",
    title: "Real-Time Insights from X",
    lastUpdated: "Coming Soon",
    href: "/x-insights",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen apple-bg transition-theme">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="container-apple section-spacing">
        {/* Hero Section - Minimalist with Generous White Space */}
        <div className="text-center mb-24 md:mb-32">
          <h1 className="font-bold text-apple-primary mb-6 tracking-tight">
            RealTechee
          </h1>
          <p className="text-xl md:text-2xl text-apple-secondary max-w-3xl mx-auto leading-relaxed font-normal">
            Intelligent automation workflows powered by n8n. Access AI-driven tools
            for design, content creation, and real-time insights.
          </p>
        </div>

        {/* Portal Cards - Clean and Minimal */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-apple-primary mb-12 text-center tracking-tight">
            Available Tools
          </h2>
          <ResourceCardsGrid items={portalFeatures} />
        </div>

        {/* Footer Spacing */}
        <div className="h-24"></div>
      </main>
    </div>
  );
}
