type AIRecommendationCardProps = {
  reasons: string[];
};

export default function AIRecommendationCard({
  reasons,
}: AIRecommendationCardProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        🤖 Why AI Recommended This
      </h2>

      <div className="space-y-4">

        {reasons.map((reason) => (

          <div
            key={reason}
            className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
          >

            <span className="text-green-600 text-xl">
              ✓
            </span>

            <span className="text-slate-700">
              {reason}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}