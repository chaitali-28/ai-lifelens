

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  BadgeCheck,
  ExternalLink,
  Calendar,
  IndianRupee,
  Building2,
  Check,
} from "lucide-react";

import BookmarkButton from "@/components/BookmarkButton";

import {
  applyOpportunity,
  hasApplied,
} from "@/lib/applications";

import { addActivity } from "@/lib/activity";

type OpportunityHeroProps = {
  id: number;
  title: string;
  provider: string;
  category: string;
  amount: string;
  deadline: string;
  matchScore: number;
  verified: boolean;
  applicationUrl: string;
  description: string;
  eligibility: string;
  reasons: string[];
};

export default function OpportunityHero({
  id,
  title,
  provider,
  category,
  amount,
  deadline,
  matchScore,
  verified,
  applicationUrl,
  description,
  eligibility,
  reasons,
}: OpportunityHeroProps) {
  const router = useRouter();

  const [applied, setApplied] = useState(() => hasApplied(id));

  const handleApply = () => {
    const loggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn) {
      alert(
        "Please create an AI LifeLens account to apply for opportunities."
      );

      router.push("/auth");
      return;
    }

    if (!hasApplied(id)) {
      applyOpportunity(id, title, provider);

      addActivity(
        "Application Started",
        `${title} • ${provider}`
      );

      setApplied(true);
    }

    window.open(applicationUrl, "_blank");
  };

  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-10 text-white shadow-2xl">

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}
        <div className="flex-1">

          {/* Category */}
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
            {category}
          </span>

          {/* Title + Verified */}
          <div className="mt-5 flex flex-wrap items-center gap-3">

            <h1 className="text-4xl font-bold lg:text-5xl">
              {title}
            </h1>

            {verified && (
              <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1">
                <BadgeCheck
                  size={22}
                  className="text-green-300"
                />

                <span className="font-medium">
                  Verified
                </span>
              </div>
            )}

          </div>

          {/* Provider */}
          <div className="mt-5 flex items-center gap-3 text-blue-100">

            <Building2 size={20} />

            <p className="text-lg">
              {provider}
            </p>

          </div>

          {/* Opportunity Information */}
          <div className="mt-8 flex flex-wrap gap-5">

            {/* Amount */}
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 backdrop-blur">

              <IndianRupee size={20} />

              <span className="font-semibold">
                {amount}
              </span>

            </div>

            {/* Deadline */}
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 backdrop-blur">

              <Calendar size={20} />

              <span className="font-semibold">
                {deadline}
              </span>

            </div>

            {/* AI Match */}
            <div className="rounded-xl bg-green-500 px-5 py-3 font-bold">
              🤖 {matchScore}% AI Match
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Bookmark */}
          <BookmarkButton
            id={id}
            title={title}
            provider={provider}
            category={category}
            description={description}
            amount={amount}
            deadline={deadline}
            eligibility={eligibility}
            matchScore={matchScore}
            verified={verified}
            reasons={reasons}
          />

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className={`flex items-center gap-3 rounded-xl px-7 py-4 font-semibold transition duration-300 hover:scale-105 hover:shadow-xl ${
              applied
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-white text-blue-700 hover:bg-blue-50"
            }`}
          >
            {applied ? (
              <>
                <Check size={20} />
                Applied
              </>
            ) : (
              <>
                Apply Now
                <ExternalLink size={20} />
              </>
            )}
          </button>

        </div>

      </div>

    </section>
  );
}