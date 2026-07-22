

"use client";

import { useEffect, useState } from "react";

import {
  Bookmark,
  BellRing,
  Briefcase,
  Trophy,
} from "lucide-react";

import { opportunities } from "@/data/opportunities";
import { getBookmarks } from "@/lib/bookmarks";
import { getApplications } from "@/lib/applications";
import { defaultProfile } from "@/data/profile";
import { getRecommendations } from "@/lib/recommendationEngine";

export default function DashboardStats() {
  const [recommended, setRecommended] = useState(0);
  const [saved, setSaved] = useState(0);
  const [applied, setApplied] = useState(0);
  const [aiScore, setAiScore] = useState(0);

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");

    const profile = savedProfile
      ? JSON.parse(savedProfile)
      : defaultProfile;

    const recommendations = getRecommendations(profile);

    setRecommended(opportunities.length);

    setSaved(getBookmarks().length);

    setApplied(getApplications().length);

    if (recommendations.length > 0) {
      setAiScore(recommendations[0].matchScore);
    }
  }, []);

  const stats = [
    {
      title: "Opportunities",
      value: recommended,
      icon: Briefcase,
    },
    {
      title: "Bookmarks",
      value: saved,
      icon: Bookmark,
    },
    {
      title: "Applications",
      value: applied,
      icon: BellRing,
    },
    {
      title: "AI Match",
      value: `${aiScore}%`,
      icon: Trophy,
    },
  ];

  return (
    <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl

              dark:border-slate-700
              dark:bg-slate-900
              dark:hover:border-blue-500
            "
          >
            <div
              className="
                inline-flex
                rounded-2xl
                bg-blue-100
                p-3
                transition
                group-hover:scale-110

                dark:bg-blue-900/40
              "
            >
              <Icon
                className="text-blue-600 dark:text-blue-400"
                size={30}
              />
            </div>

            <h3 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {item.title}
            </p>
          </div>
        );
      })}

    </section>
  );
}