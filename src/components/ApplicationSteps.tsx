type ApplicationStepsProps = {
  applicationUrl: string;
};

export default function ApplicationSteps({
  applicationUrl,
}: ApplicationStepsProps) {
  const steps = [
    "Visit the official website.",
    "Read the eligibility criteria carefully.",
    "Register or log in.",
    "Fill the application form.",
    "Upload all required documents.",
    "Review and submit before the deadline.",
  ];

  return (
    <section
      className="
        mt-10
        rounded-3xl
        border border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-colors

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/30
      "
    >
      {/* Heading */}
      <h2
        className="
          mb-8
          text-2xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        📝 Application Process
      </h2>

      {/* Steps */}
      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-start gap-5"
          >
            {/* Step Number */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-blue-600
                font-bold
                text-white
              "
            >
              {index + 1}
            </div>

            {/* Step Text */}
            <p
              className="
                pt-2
                text-slate-700
                dark:text-slate-300
              "
            >
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* Official Website Button */}
      <a
        href={applicationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-8
          inline-flex
          rounded-xl
          bg-blue-600
          px-6
          py-4
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2

          dark:focus:ring-offset-slate-900
        "
      >
        Go to Official Website →
      </a>
    </section>
  );
}