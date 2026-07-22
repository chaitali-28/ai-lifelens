
import { Bot, Search, ShieldCheck } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: Bot,
    title: "AI Recommendations",
    description:
      "Discover personalized scholarships, internships, fellowships, grants, and government schemes tailored to your profile.",
  },
  {
    icon: Search,
    title: "Opportunity Search",
    description:
      "Search thousands of verified scholarships, internships, competitions, fellowships, and jobs across India.",
  },
  {
    icon: ShieldCheck,
    title: "AI Scam Detection",
    description:
      "Analyze scholarship websites and identify warning signs before you submit your application.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="
        mx-auto
        max-w-7xl
        scroll-mt-24
        px-6
        py-24
        transition-colors
        duration-300
      "
    >
      {/* Section Heading */}
      <h2
        className="
          mb-4
          text-center
          text-4xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          dark:text-white
        "
      >
        Why Choose AI LifeLens?
      </h2>

      {/* Section Description */}
      <p
        className="
          mx-auto
          mb-14
          max-w-2xl
          text-center
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-300
        "
      >
        AI LifeLens helps students discover genuine opportunities,
        avoid scams, and make smarter career decisions with the
        power of Artificial Intelligence.
      </p>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}