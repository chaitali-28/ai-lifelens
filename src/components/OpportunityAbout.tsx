type OpportunityAboutProps = {
  description: string;
};

export default function OpportunityAbout({
  description,
}: OpportunityAboutProps) {
  return (
    <section
      className="
        mt-10
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
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        📖 About this Opportunity
      </h2>

      <p
        className="
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-300
        "
      >
        {description}
      </p>
    </section>
  );
}