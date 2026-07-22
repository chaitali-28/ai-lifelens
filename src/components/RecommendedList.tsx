
"use client";

import { useEffect, useState } from "react";

import { defaultProfile } from "@/data/profile";
import { getRecommendations } from "@/lib/recommendationEngine";

import OpportunityCard from "./OpportunityCard";

type RecommendedListProps = {
  search: string;
  selectedFilter: string;
};

export default function RecommendedList({
  search,
  selectedFilter,
}: RecommendedListProps) {
  const [recommended, setRecommended] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    const profile = saved
      ? JSON.parse(saved)
      : defaultProfile;

    const results = getRecommendations(profile);

    setRecommended(results);
  }, []);

  const filteredRecommendations = recommended.filter((item) => {
    const query = search.toLowerCase();

    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.provider.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.eligibility.toLowerCase().includes(query) ||
      item.amount.toLowerCase().includes(query) ||
      item.benefits.some((benefit: string) =>
        benefit.toLowerCase().includes(query)
      ) ||
      item.reasons.some((reason: string) =>
        reason.toLowerCase().includes(query)
      );

    const matchesFilter =
      selectedFilter === "All" ||
      item.category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
        🤖 Recommended For You
      </h2>

      {filteredRecommendations.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            😔 No Opportunities Found
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Try changing your search keywords or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRecommendations.map((item) => (
            <OpportunityCard
              key={item.id}
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
              reasons={item.reasons}
            />
          ))}
        </div>
      )}
    </section>
  );
}