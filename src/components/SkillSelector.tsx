type SkillSelectorProps = {
  selectedSkills: string[];
  onChange: (skills: string[]) => void;
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "Java",
  "C++",
  "AI",
  "Machine Learning",
];

export default function SkillSelector({
  selectedSkills,
  onChange,
}: SkillSelectorProps) {
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      onChange(
        selectedSkills.filter((item) => item !== skill)
      );
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-slate-700 transition-colors dark:text-slate-300">
        Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const selected = selectedSkills.includes(skill);

          return (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              className={`rounded-full border px-4 py-2 font-medium transition-all duration-300 ${
                selected
                  ? "border-blue-600 bg-blue-600 text-white shadow-md hover:bg-blue-700"
                  : "border-blue-200 bg-blue-50 text-blue-700 hover:border-blue-400 hover:bg-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-300"
              }`}
            >
              {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
}