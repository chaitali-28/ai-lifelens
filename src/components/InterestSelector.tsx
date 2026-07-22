type InterestSelectorProps = {
  selectedInterests: string[];
  onChange: (interests: string[]) => void;
};

const interests = [
  "Scholarships",
  "Internships",
  "Hackathons",
  "Government Schemes",
  "Fellowships",
  "Research",
  "Competitions",
  "Jobs",
  "Startup Grants",
  "Study Abroad",
];

export default function InterestSelector({
  selectedInterests,
  onChange,
}: InterestSelectorProps) {
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      onChange(
        selectedInterests.filter(
          (item) => item !== interest
        )
      );
    } else {
      onChange([
        ...selectedInterests,
        interest,
      ]);
    }
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-slate-700 transition-colors dark:text-slate-300">
        Interests
      </h3>

      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => {
          const selected =
            selectedInterests.includes(interest);

          return (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className={`rounded-full border px-4 py-2 font-medium transition-all duration-300 ${
                selected
                  ? "border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700"
                  : "border-blue-200 bg-blue-50 text-blue-700 hover:border-blue-400 hover:bg-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-300"
              }`}
            >
              {interest}
            </button>
          );
        })}
      </div>
    </div>
  );
}