

"use client";

import { useState } from "react";

import AISearch from "@/components/AISearch";
import QuickFilters from "@/components/QuickFilters";
import RecommendedList from "@/components/RecommendedList";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      <AISearch
        value={search}
        onChange={setSearch}
      />

      <QuickFilters
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <RecommendedList
        search={search}
        selectedFilter={selectedFilter}
      />

    </main>
  );
}