import OpportunityCard from "./OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function RecommendedSection() {
  return (
    <section className="mt-16">

      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          🤖 AI Recommended For You
        </h2>

        <p className="mt-3 text-gray-600">
          Personalized opportunities based on your profile.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {opportunities.map((item) => (
          <OpportunityCard
  id={item.id}
  title={item.title}
  provider={item.provider}
  category={item.category}
  description={item.description}
  amount={item.amount}
  deadline={item.deadline}
  eligibility={item.eligibility}
  matchScore={item.matchScore}
  verified={item.verified}
  // reasons={item.reasons}
/>
        ))}

      </div>

    </section>
  );
}