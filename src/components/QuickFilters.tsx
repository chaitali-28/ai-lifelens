"use client";

const filters = [
  "All",
  "Scholarships",
  "Internships",
  "Hackathons",
  "Government",
  "Grants",
  "Fellowships",
];

type QuickFiltersProps = {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function QuickFilters({
  selectedFilter,
  onFilterChange,
}: QuickFiltersProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`min-w-[160px] rounded-full px-7 py-3 text-center font-semibold transition-all duration-300 ${
              selectedFilter === filter
                ? "bg-blue-600 text-white shadow-xl hover:bg-blue-700"
                : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}