
// import {
//   Users,
//   GraduationCap,
//   Landmark,
//   ShieldCheck,
// } from "lucide-react";

// const stats = [
//   {
//     value: "10K+",
//     label: "Students",
//     icon: Users,
//   },
//   {
//     value: "5K+",
//     label: "Scholarships",
//     icon: GraduationCap,
//   },
//   {
//     value: "500+",
//     label: "Government Schemes",
//     icon: Landmark,
//   },
//   {
//     value: "95%",
//     label: "Verified Opportunities",
//     icon: ShieldCheck,
//   },
// ];

// export default function Stats() {
//   return (
//     <section className="relative -mt-8 z-10 px-6">
//       <div className="max-w-7xl mx-auto">

//         <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-gray-100 p-8">

//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-900">
//               Trusted by Thousands of Students
//             </h2>

//             <p className="mt-3 text-gray-600">
//               Discover verified opportunities powered by Artificial Intelligence.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//             {stats.map((stat) => {
//               const Icon = stat.icon;

//               return (
//                 <div
//                   key={stat.label}
//                   className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//                 >
//                   <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
//                     <Icon className="h-7 w-7 text-blue-600" />
//                   </div>

//                   <h3 className="text-4xl font-extrabold text-blue-600">
//                     {stat.value}
//                   </h3>

//                   <p className="mt-2 text-gray-600">
//                     {stat.label}
//                   </p>
//                 </div>
//               );
//             })}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import {
  Users,
  GraduationCap,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Students",
    icon: Users,
  },
  {
    value: "5K+",
    label: "Scholarships",
    icon: GraduationCap,
  },
  {
    value: "500+",
    label: "Government Schemes",
    icon: Landmark,
  },
  {
    value: "95%",
    label: "Verified Opportunities",
    icon: ShieldCheck,
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-8 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Main Stats Container */}
        <div
          className="
            rounded-3xl
            border border-slate-200
            bg-white/80
            p-8
            shadow-xl
            backdrop-blur-xl
            transition-colors duration-300

            dark:border-slate-700
            dark:bg-slate-900/80
          "
        >

          {/* Heading */}
          <div className="mb-10 text-center">

            <h2
              className="
                text-3xl font-bold
                text-slate-900
                transition-colors duration-300

                dark:text-white
              "
            >
              Trusted by Thousands of Students
            </h2>

            <p
              className="
                mt-3
                text-slate-600
                transition-colors duration-300

                dark:text-slate-300
              "
            >
              Discover verified opportunities powered by
              Artificial Intelligence.
            </p>

          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-8
                    text-center
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-xl

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:hover:border-slate-600
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      mx-auto mb-5
                      flex h-14 w-14
                      items-center justify-center
                      rounded-full
                      bg-blue-100
                      transition-colors duration-300

                      dark:bg-blue-900/40
                    "
                  >
                    <Icon
                      className="
                        h-7 w-7
                        text-blue-600
                        dark:text-blue-400
                      "
                    />
                  </div>

                  {/* Value */}
                  <h3
                    className="
                      text-4xl font-extrabold
                      text-blue-600
                      transition-colors duration-300

                      dark:text-blue-400
                    "
                  >
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p
                    className="
                      mt-2
                      text-slate-600
                      transition-colors duration-300

                      dark:text-slate-300
                    "
                  >
                    {stat.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}