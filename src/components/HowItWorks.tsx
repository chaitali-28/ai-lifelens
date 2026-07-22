
const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Tell AI LifeLens about your education, skills, interests, income, and career goals.",
  },
  {
    number: "02",
    title: "Get AI Recommendations",
    description:
      "Our AI matches you with scholarships, internships, grants, hackathons, and government schemes.",
  },
  {
    number: "03",
    title: "Apply With Confidence",
    description:
      "Track deadlines, review your resume, and receive AI guidance throughout the application process.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="about"
      className="
        mx-auto
        max-w-7xl
        scroll-mt-24
        px-6
        py-24
        transition-colors
        duration-300
      "
    >
      {/* Heading */}
      <h2
        className="
          text-center
          text-4xl
          font-bold
          text-slate-900
          transition-colors
          duration-300
          dark:text-white
        "
      >
        How AI LifeLens Works
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-center
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-300
        "
      >
        Getting started is simple. AI LifeLens helps you discover
        and manage opportunities in just three simple steps.
      </p>

      {/* Steps */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-xl

              dark:border-slate-700
              dark:bg-slate-900
              dark:hover:border-blue-800
            "
          >
            {/* Step Number */}
            <div
              className="
                text-5xl
                font-bold
                text-blue-600
                transition-colors
                duration-300
                dark:text-blue-400
              "
            >
              {step.number}
            </div>

            {/* Step Title */}
            <h3
              className="
                mt-6
                text-2xl
                font-semibold
                text-slate-900
                transition-colors
                duration-300
                dark:text-white
              "
            >
              {step.title}
            </h3>

            {/* Step Description */}
            <p
              className="
                mt-4
                leading-7
                text-slate-600
                transition-colors
                duration-300
                dark:text-slate-300
              "
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}