"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { opportunities } from "@/data/opportunities";

export default function UpcomingDeadlines() {
  const upcoming = [...opportunities]
    .sort(
      (a, b) =>
        new Date(a.deadline).getTime() -
        new Date(b.deadline).getTime()
    )
    .slice(0, 4);

  return (
    <section className="mt-16">
      {/* Section Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          📅 Upcoming Deadlines
        </h2>

        <Link
          href="/explore"
          className="
            font-semibold
            text-blue-600
            transition
            hover:text-blue-700
            hover:underline

            dark:text-blue-400
            dark:hover:text-blue-300
          "
        >
          View All →
        </Link>
      </div>

      {/* Deadline Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {upcoming.map((item) => (
          <Link
            key={item.id}
            href={`/opportunity/${item.id}`}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl

              dark:border-slate-700
              dark:bg-slate-900
              dark:shadow-black/20
              dark:hover:border-slate-600
              dark:hover:shadow-black/40
            "
          >
            {/* Opportunity Information */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900

                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-slate-600

                    dark:text-slate-400
                  "
                >
                  {item.provider}
                </p>
              </div>

              <CalendarDays
                size={34}
                className="
                  shrink-0
                  text-blue-600

                  dark:text-blue-400
                "
              />
            </div>

            {/* Deadline and Category */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <span
                className="
                  rounded-full
                  bg-red-100
                  px-4
                  py-2
                  font-semibold
                  text-red-700

                  dark:bg-red-500/20
                  dark:text-red-400
                "
              >
                {item.deadline}
              </span>

              <span
                className="
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                {item.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}