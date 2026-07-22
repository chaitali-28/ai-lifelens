// import {
//   CheckCircle2,
//   Info,
//   TriangleAlert,
// } from "lucide-react";

// type InsightCardProps = {
//   type: "success" | "info" | "warning";
//   title: string;
//   description: string;
// };

// export default function InsightCard({
//   type,
//   title,
//   description,
// }: InsightCardProps) {
//   const styles = {
//     success: {
//       icon: CheckCircle2,
//       border: "border-green-200",
//       bg: "bg-green-50",
//       color: "text-green-600",
//     },
//     info: {
//       icon: Info,
//       border: "border-blue-200",
//       bg: "bg-blue-50",
//       color: "text-blue-600",
//     },
//     warning: {
//       icon: TriangleAlert,
//       border: "border-yellow-200",
//       bg: "bg-yellow-50",
//       color: "text-yellow-600",
//     },
//   };

//   const current = styles[type];
//   const Icon = current.icon;

//   return (
//     <div
//       className={`rounded-2xl border ${current.border} ${current.bg} p-5 transition hover:shadow-lg`}
//     >
//       <div className="flex items-start gap-4">
//         <Icon className={current.color} size={28} />

//         <div>
//           <h3 className="text-lg font-semibold text-gray-900">
//             {title}
//           </h3>

//           <p className="mt-2 leading-7 text-gray-600">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import {
  CheckCircle2,
  Info,
  TriangleAlert,
} from "lucide-react";

type InsightCardProps = {
  type: "success" | "info" | "warning";
  title: string;
  description: string;
};

export default function InsightCard({
  type,
  title,
  description,
}: InsightCardProps) {
  const styles = {
    success: {
      icon: CheckCircle2,
      lightBorder: "border-green-200",
      darkBorder: "dark:border-green-800",
      lightBg: "bg-green-50",
      darkBg: "dark:bg-green-950/30",
      iconColor: "text-green-600 dark:text-green-400",
    },

    info: {
      icon: Info,
      lightBorder: "border-blue-200",
      darkBorder: "dark:border-blue-800",
      lightBg: "bg-blue-50",
      darkBg: "dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },

    warning: {
      icon: TriangleAlert,
      lightBorder: "border-yellow-200",
      darkBorder: "dark:border-yellow-800",
      lightBg: "bg-yellow-50",
      darkBg: "dark:bg-yellow-950/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
  };

  const current = styles[type];
  const Icon = current.icon;

  return (
    <div
      className={`
        rounded-2xl
        border
        ${current.lightBorder}
        ${current.darkBorder}
        ${current.lightBg}
        ${current.darkBg}
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      `}
    >
      <div className="flex items-start gap-4">

        <div className="mt-1">
          <Icon
            size={30}
            className={current.iconColor}
          />
        </div>

        <div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}