// import { LucideIcon } from "lucide-react";

// type FeatureCardProps = {
//   title: string;
//   description: string;
//   icon: LucideIcon;
// };

// export default function FeatureCard({
//   title,
//   description,
//   icon: Icon,
// }: FeatureCardProps) {
//   return (
//     <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
//       <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4">
//         <Icon className="h-8 w-8 text-blue-600" />
//       </div>

//       <h3 className="mb-4 text-2xl font-semibold text-gray-900">
//         {title}
//       </h3>

//       <p className="leading-7 text-gray-600">
//         {description}
//       </p>
//     </div>
//   );
// }
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div
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
      {/* Icon */}
      <div
        className="
          mb-6
          inline-flex
          rounded-xl
          bg-blue-100
          p-4
          transition-colors
          duration-300

          dark:bg-blue-950
        "
      >
        <Icon
          className="
            h-8
            w-8
            text-blue-600
            dark:text-blue-400
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          mb-4
          text-2xl
          font-semibold
          text-slate-900
          transition-colors
          duration-300

          dark:text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          leading-7
          text-slate-600
          transition-colors
          duration-300

          dark:text-slate-300
        "
      >
        {description}
      </p>
    </div>
  );
}