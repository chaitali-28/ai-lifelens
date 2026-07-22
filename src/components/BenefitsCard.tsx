type BenefitsCardProps = {
  benefits: string[];
};

export default function BenefitsCard({
  benefits,
}: BenefitsCardProps) {
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
        🎁 Benefits
      </h2>

      <div className="grid gap-4">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="
              rounded-xl
              border
              border-blue-200
              bg-blue-50
              p-5
              transition
              hover:shadow-md

              dark:border-blue-900
              dark:bg-blue-950/40
              dark:hover:shadow-blue-950/20
            "
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                🎉
              </span>

              <p
                className="
                  font-medium
                  text-slate-700
                  dark:text-slate-200
                "
              >
                {benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}