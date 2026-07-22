type EligibilityCardProps = {
  eligibility: string;
};

export default function EligibilityCard({
  eligibility,
}: EligibilityCardProps) {
  const items = eligibility
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <section
      className="
        rounded-3xl
        border border-slate-200
        bg-white
        p-8
        shadow-sm
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <h2
        className="
          mb-6
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        🎯 Eligibility
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-green-200
              bg-green-50
              p-4

              dark:border-green-900
              dark:bg-green-950/40
            "
          >
            <span className="text-2xl">
              ✅
            </span>

            <span
              className="
                font-medium
                text-slate-700
                dark:text-slate-200
              "
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}