import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ValuePillars } from "@/components/home/value-pillars";
import { ProjectCards } from "@/components/home/project-cards";
import { CtaSection } from "@/components/home/cta-section";

function Divider() {
  return <div className="divider-gradient mx-auto max-w-3xl" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Divider />
      <ValuePillars />
      <Divider />
      <ProjectCards />
      <Divider />
      <CtaSection />
    </>
  );
}
