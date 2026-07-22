"use client";

import { useEffect, useState } from "react";

import InsightCard from "./InsightCard";

import { generateInsights } from "@/lib/generateInsights";
import { defaultProfile } from "@/data/profile";

export default function AIInsights() {
  const [insights, setInsights] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("studentProfile");

    const profile = stored
      ? JSON.parse(stored)
      : defaultProfile;

    setInsights(generateInsights(profile));
  }, []);

  return (
    <section className="mt-12">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          🤖 AI Insights
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Personalized suggestions generated from your academic profile.
        </p>

      </div>

      {insights.length === 0 ? (

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-10
            text-center
            shadow-sm

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            No AI Insights Available
          </h3>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Complete your profile to receive personalized AI insights.
          </p>

        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2">

          {insights.map((item, index) => (
            <InsightCard
              key={index}
              type={item.type}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      )}

    </section>
  );
}