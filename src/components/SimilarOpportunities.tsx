// import Link from "next/link";
// import { ArrowRight, BadgeCheck } from "lucide-react";

// import { opportunities } from "@/data/opportunities";

// type SimilarOpportunitiesProps = {
//   currentId: number;
//   category: string;
// };

// export default function SimilarOpportunities({
//   currentId,
//   category,
// }: SimilarOpportunitiesProps) {
//   const similar = opportunities
//     .filter(
//       (item) =>
//         item.id !== currentId &&
//         item.category === category
//     )
//     .slice(0, 3);

//   if (similar.length === 0) {
//     return null;
//   }

//   return (
//     <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900">

//       {/* Header */}
//       <div className="mb-8 flex items-center justify-between">

//         <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
//           🔗 Similar Opportunities
//         </h2>

//         <span className="text-sm text-slate-500 dark:text-slate-400">
//           {similar.length} Found
//         </span>

//       </div>

//       {/* Opportunities */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//         {similar.map((item) => (
//           <Link
//             key={item.id}
//             href={`/opportunity/${item.id}`}
//             className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-800 dark:hover:shadow-2xl"
//           >

//             {/* Category + Verified */}
//             <div className="flex items-start justify-between">

//               <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
//                 {item.category}
//               </span>

//               {item.verified && (
//                 <BadgeCheck
//                   size={20}
//                   className="text-green-600 dark:text-green-400"
//                 />
//               )}

//             </div>

//             {/* Title */}
//             <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
//               {item.title}
//             </h3>

//             {/* Provider */}
//             <p className="mt-2 text-slate-600 dark:text-slate-300">
//               {item.provider}
//             </p>

//             {/* Description */}
//             <p className="mt-4 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
//               {item.description}
//             </p>

//             {/* Bottom */}
//             <div className="mt-6 flex items-center justify-between">

//               <span className="font-semibold text-blue-600 dark:text-blue-400">
//                 {item.amount}
//               </span>

//               <div className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400">

//                 View Details

//                 <ArrowRight
//                   size={18}
//                   className="transition-transform group-hover:translate-x-1"
//                 />

//               </div>

//             </div>

//           </Link>
//         ))}

//       </div>

//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type SimilarOpportunity = {
  id: number;
  title: string;
  provider: string;
  category: string;
  description: string;
  amount: string;
  verified: boolean;
};

type SimilarOpportunitiesProps = {
  currentId: number;
  category: string;
};

export default function SimilarOpportunities({
  currentId,
  category,
}: SimilarOpportunitiesProps) {
  const [similar, setSimilar] = useState<SimilarOpportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSimilarOpportunities = async () => {
      try {
        setLoading(true);

        const supabase = createClient();

        const { data, error } = await supabase
          .from("opportunities")
          .select(
            `
              id,
              title,
              provider,
              category,
              description,
              amount,
              verified
            `
          )
          .eq("category", category)
          .neq("id", currentId)
          .limit(3);

        if (error) {
          console.error(
            "Similar Opportunities Fetch Error:",
            {
              message: error.message,
              details: error.details,
              hint: error.hint,
              code: error.code,
            }
          );

          setSimilar([]);
          return;
        }

        setSimilar(data ?? []);
      } catch (error) {
        console.error(
          "Unexpected Similar Opportunities Error:",
          error
        );

        setSimilar([]);
      } finally {
        setLoading(false);
      }
    };

    loadSimilarOpportunities();
  }, [currentId, category]);

  /*
   * Don't display the section while loading.
   */
  if (loading) {
    return null;
  }

  /*
   * If no similar opportunities exist,
   * don't display the section.
   */
  if (similar.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          🔗 Similar Opportunities
        </h2>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {similar.length} Found
        </span>

      </div>

      {/* Opportunities */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {similar.map((item) => (
          <Link
            key={item.id}
            href={`/opportunity/${item.id}`}
            className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-800 dark:hover:shadow-2xl"
          >

            {/* Category + Verified */}
            <div className="flex items-start justify-between">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {item.category}
              </span>

              {item.verified && (
                <BadgeCheck
                  size={20}
                  className="text-green-600 dark:text-green-400"
                />
              )}

            </div>

            {/* Title */}
            <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>

            {/* Provider */}
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {item.provider}
            </p>

            {/* Description */}
            <p className="mt-4 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
              {item.description}
            </p>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">

              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {item.amount}
              </span>

              <div className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400">

                View Details

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}