import Link from "next/link";

import OpportunityDetails from "./OpportunityDetails";

import {
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import BookmarkButton from "./BookmarkButton";

type OpportunityCardProps = {
  id: number;
  title: string;
  provider: string;
  category: string;
  description: string;
  amount: string;
  deadline: string;
  eligibility: string;
  matchScore: number;
  verified: boolean;
  reasons?: string[];
};

export default function OpportunityCard({
  id,
  title,
  provider,
  category,
  description,
  amount,
  deadline,
  eligibility,
  matchScore,
  verified,
  reasons,
}: OpportunityCardProps) {
  return (
    <div
      className="
        group rounded-3xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-slate-950/30
        dark:hover:shadow-black/40
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">

          {/* Category */}
          <span
            className="
              rounded-full
              bg-blue-100
              px-3 py-1
              text-sm font-semibold
              text-blue-700

              dark:bg-blue-950
              dark:text-blue-300
            "
          >
            {category}
          </span>

          {/* Title */}
          <h3
            className="
              mt-4
              text-2xl font-bold
              text-slate-900

              dark:text-slate-100
            "
          >
            {title}
          </h3>

          {/* Provider */}
          <p
            className="
              mt-2 flex items-center gap-2
              text-slate-500

              dark:text-slate-400
            "
          >
            {provider}

            {verified && (
              <BadgeCheck
                size={18}
                className="text-green-600 dark:text-green-400"
              />
            )}
          </p>

        </div>

        {/* Bookmark */}
        <div className="shrink-0">
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
        </div>

      </div>

      {/* Description */}
      <p
        className="
          mt-5
          leading-7
          text-slate-600

          dark:text-slate-400
        "
      >
        {description}
      </p>

      {/* Information */}
      <div
        className="
          mt-6 space-y-2
          text-sm
          text-slate-600

          dark:text-slate-400
        "
      >

        <p>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            💰 Amount:
          </span>{" "}
          {amount}
        </p>

        <p>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            🎓 Eligibility:
          </span>{" "}
          {eligibility}
        </p>

        <p>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            📅 Deadline:
          </span>{" "}
          {deadline}
        </p>

      </div>

      {/* AI Match */}
      <div className="mt-6">
        <OpportunityDetails
          score={matchScore}
          daysLeft={10}
        />
      </div>

      {/* Explainable AI */}
      {reasons && reasons.length > 0 && (
        <div
          className="
            mt-6
            rounded-2xl
            border border-blue-100
            bg-blue-50
            p-4

            dark:border-blue-900/60
            dark:bg-blue-950/40
          "
        >

          <h4
            className="
              mb-3
              font-semibold
              text-blue-700

              dark:text-blue-300
            "
          >
            🤖 Why AI Recommended This
          </h4>

          <ul
            className="
              space-y-2
              text-sm
              text-slate-700

              dark:text-slate-300
            "
          >

            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-2"
              >
                <span className="text-green-600 dark:text-green-400">
                  ✓
                </span>

                {reason}
              </li>
            ))}

          </ul>

        </div>
      )}

      {/* Bottom */}
      <div className="mt-8 flex items-center justify-between">

        <Link
          href={`/opportunity/${id}`}
          className="
            font-semibold
            text-blue-600
            transition

            hover:text-blue-800

            dark:text-blue-400
            dark:hover:text-blue-300
          "
        >
          View Details
        </Link>

        <ArrowRight
          size={20}
          className="
            text-blue-600
            transition
            group-hover:translate-x-2

            dark:text-blue-400
          "
        />

      </div>

    </div>
  );
}