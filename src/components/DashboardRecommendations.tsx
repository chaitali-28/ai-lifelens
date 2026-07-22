
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { defaultProfile } from "@/data/profile";
import { getRecommendations } from "@/lib/recommendationEngine";

export default function DashboardRecommendations() {
  const [recommendations, setRecommendations] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    const profile = saved
      ? JSON.parse(saved)
      : defaultProfile;

    const results = getRecommendations(profile);

    setRecommendations(results.slice(0, 3));
  }, []);

  return (
    <section className="mt-14">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          🎯 Recommended For You
        </h2>

        <Link
          href="/explore"
          className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
        >
          View All →
        </Link>
      </div>

      {/* Recommendation Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {recommendations.map((item) => (
          <Link
            key={item.id}
            href={`/opportunity/${item.id}`}
            className="
              rounded-3xl
              border border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl

              dark:border-slate-700
              dark:bg-slate-900
              dark:shadow-black/20
              dark:hover:border-slate-600
              dark:hover:shadow-black/40
            "
          >
            {/* Category */}
            <span
              className="
                inline-block
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-sm
                font-semibold
                text-blue-700

                dark:bg-blue-500/20
                dark:text-blue-300
              "
            >
              {item.category}
            </span>

            {/* Title */}
            <h3
              className="
                mt-4
                text-2xl
                font-bold
                text-slate-900

                dark:text-white
              "
            >
              {item.title}
            </h3>

            {/* Provider */}
            <p
              className="
                mt-2
                text-slate-600

                dark:text-slate-400
              "
            >
              {item.provider}
            </p>

            {/* Bottom Information */}
            <div className="mt-6 flex items-center justify-between">
              {/* Amount */}
              <span
                className="
                  font-semibold
                  text-green-600

                  dark:text-green-400
                "
              >
                {item.amount}
              </span>

              {/* AI Match Score */}
              <span
                className="
                  rounded-full
                  bg-green-100
                  px-3
                  py-1
                  font-semibold
                  text-green-700

                  dark:bg-green-500/20
                  dark:text-green-400
                "
              >
                {item.aiScore}%
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}