"use client";

import { Search } from "lucide-react";

type AISearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function AISearch({
  value,
  onChange,
}: AISearchProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <h2 className="mb-4 text-center text-5xl font-bold text-slate-900 transition-colors duration-300 dark:text-white">
        Find Your Perfect Opportunity
      </h2>

      {/* Description */}
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600 transition-colors duration-300 dark:text-slate-300">
        Search scholarships, internships, hackathons,
        fellowships, grants and government schemes
        powered by AI.
      </p>

      {/* Search Box */}
      <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20 dark:focus-within:border-blue-400">
        <Search
          size={28}
          className="shrink-0 text-blue-600 dark:text-blue-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search scholarships, internships, hackathons..."
          className="w-full bg-transparent text-lg text-slate-900 outline-none placeholder:text-slate-400 transition-colors duration-300 dark:text-white dark:placeholder:text-slate-500"
        />
      </div>
    </section>
  );
}