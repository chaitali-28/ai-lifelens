type AIMatchAnalysisProps = {
  score: number;
  reasons: string[];
};

export default function AIMatchAnalysis({
  score,
  reasons,
}: AIMatchAnalysisProps) {
  const rating =
    score >= 95
      ? "★★★★★ Excellent Match"
      : score >= 85
      ? "★★★★☆ Very Good Match"
      : score >= 70
      ? "★★★☆☆ Good Match"
      : "★★☆☆☆ Average Match";

  return (
    <section
      className="
        mt-10
        rounded-3xl
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-colors

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/30
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">

        <h2
          className="
            text-3xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          🤖 AI Match Analysis
        </h2>

        <div
          className="
            rounded-xl
            bg-blue-100
            px-5
            py-3
            font-bold
            text-blue-700

            dark:bg-blue-950/60
            dark:text-blue-300
          "
        >
          {score}%
        </div>

      </div>

      {/* Rating */}
      <p
        className="
          mt-3
          text-lg
          font-semibold
          text-green-600
          dark:text-green-400
        "
      >
        {rating}
      </p>

      {/* AI Reasons */}
      <div className="mt-8">

        <h3
          className="
            mb-4
            text-xl
            font-semibold
            text-slate-900
            dark:text-slate-100
          "
        >
          Why AI Recommended This
        </h3>

        <ul className="space-y-3">

          {reasons.map((reason) => (
            <li
              key={reason}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-green-50
                p-4
                text-slate-700

                dark:bg-green-950/40
                dark:text-slate-200
              "
            >
              <span
                className="
                  font-bold
                  text-green-600
                  dark:text-green-400
                "
              >
                ✓
              </span>

              {reason}
            </li>
          ))}

        </ul>

      </div>

      {/* Overall Recommendation */}
      <div
        className="
          mt-8
          rounded-2xl
          bg-blue-50
          p-6

          dark:bg-blue-950/40
          dark:border
          dark:border-blue-900/60
        "
      >

        <h3
          className="
            text-xl
            font-bold
            text-blue-700
            dark:text-blue-300
          "
        >
          Overall Recommendation
        </h3>

        <p
          className="
            mt-3
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          Based on your profile, this opportunity is
          highly suitable. Applying before the deadline
          can improve your chances.
        </p>

      </div>

    </section>
  );
}