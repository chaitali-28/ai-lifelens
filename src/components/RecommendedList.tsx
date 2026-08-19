
// "use client";

// import { useEffect, useState } from "react";

// import { defaultProfile } from "@/data/profile";
// import { getRecommendations } from "@/lib/recommendationEngine";

// import OpportunityCard from "./OpportunityCard";

// type RecommendedListProps = {
//   search: string;
//   selectedFilter: string;
// };

// export default function RecommendedList({
//   search,
//   selectedFilter,
// }: RecommendedListProps) {
//   const [recommended, setRecommended] = useState<any[]>([]);

//   useEffect(() => {
//     const saved = localStorage.getItem("studentProfile");

//     const profile = saved
//       ? JSON.parse(saved)
//       : defaultProfile;

//     const results = getRecommendations(profile);

//     setRecommended(results);
//   }, []);

//   const filteredRecommendations = recommended.filter((item) => {
//     const query = search.toLowerCase();

//     const matchesSearch =
//       item.title.toLowerCase().includes(query) ||
//       item.provider.toLowerCase().includes(query) ||
//       item.description.toLowerCase().includes(query) ||
//       item.category.toLowerCase().includes(query) ||
//       item.eligibility.toLowerCase().includes(query) ||
//       item.amount.toLowerCase().includes(query) ||
//       item.benefits.some((benefit: string) =>
//         benefit.toLowerCase().includes(query)
//       ) ||
//       item.reasons.some((reason: string) =>
//         reason.toLowerCase().includes(query)
//       );

//     const matchesFilter =
//       selectedFilter === "All" ||
//       item.category === selectedFilter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <section className="mt-16">
//       <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
//         🤖 Recommended For You
//       </h2>

//       {filteredRecommendations.length === 0 ? (
//         <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow dark:border-slate-700 dark:bg-slate-900">
//           <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
//             😔 No Opportunities Found
//           </h2>

//           <p className="mt-4 text-slate-600 dark:text-slate-400">
//             Try changing your search keywords or filters.
//           </p>
//         </div>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {filteredRecommendations.map((item) => (
//             <OpportunityCard
//               key={item.id}
//               id={item.id}
//               title={item.title}
//               provider={item.provider}
//               category={item.category}
//               description={item.description}
//               amount={item.amount}
//               deadline={item.deadline}
//               eligibility={item.eligibility}
//               matchScore={item.matchScore}
//               verified={item.verified}
//               reasons={item.reasons}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

import OpportunityCard from "./OpportunityCard";

type Opportunity = {
  id: number;
  title: string;
  provider: string;
  category: string;
  description: string;
  amount: string | null;
  deadline: string | null;
  eligibility: string | null;
  matchScore: number;
  verified: boolean;
  applicationUrl: string | null;
  requiredDocuments: string[];
  benefits: string[];
  reasons: string[];
};

type RecommendedListProps = {
  search: string;
  selectedFilter: string;
};

export default function RecommendedList({
  search,
  selectedFilter,
}: RecommendedListProps) {
  const [recommended, setRecommended] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        setLoading(true);
        setError("");

        const supabase = createClient();

        const {
          data,
          error: supabaseError,
        } = await supabase
          .from("opportunities")
          .select("*")
          .order("deadline", {
            ascending: true,
          });

        if (supabaseError) {
          console.error(
            "Opportunities Fetch Error:",
            {
              message: supabaseError.message,
              details: supabaseError.details,
              hint: supabaseError.hint,
              code: supabaseError.code,
            }
          );

          setError(
            "Unable to load opportunities. Please try again."
          );

          return;
        }

        if (!data) {
          setRecommended([]);
          return;
        }

        /*
         * Convert Supabase database fields
         * into the format expected by OpportunityCard.
         */
        const formattedOpportunities: Opportunity[] =
          data.map((item) => ({
            id: item.id,

            title: item.title ?? "",

            provider: item.provider ?? "",

            category: item.category ?? "",

            description:
              item.description ?? "",

            amount:
              item.amount ?? null,

            deadline:
              item.deadline ?? null,

            eligibility:
              item.eligibility ?? null,

            matchScore:
              item.match_score ?? 0,

            verified:
              item.verified ?? false,

            applicationUrl:
              item.application_url ?? null,

            requiredDocuments:
              Array.isArray(item.required_documents)
                ? item.required_documents
                : [],

            benefits:
              Array.isArray(item.benefits)
                ? item.benefits
                : [],

            reasons:
              Array.isArray(item.reasons)
                ? item.reasons
                : [],
          }));

        setRecommended(
          formattedOpportunities
        );
      } catch (error) {
        console.error(
          "Unexpected Opportunities Error:",
          error
        );

        setError(
          "Something went wrong while loading opportunities."
        );
      } finally {
        setLoading(false);
      }
    };

    loadOpportunities();
  }, []);

  /*
   * Search and category filtering.
   */
  const filteredRecommendations =
    recommended.filter((item) => {
      const query =
        search.trim().toLowerCase();

      /*
       * If search box is empty,
       * automatically match all items.
       */
      const matchesSearch =
        query === "" ||
        item.title
          .toLowerCase()
          .includes(query) ||
        item.provider
          .toLowerCase()
          .includes(query) ||
        item.description
          .toLowerCase()
          .includes(query) ||
        item.category
          .toLowerCase()
          .includes(query) ||
        (item.eligibility ?? "")
          .toLowerCase()
          .includes(query) ||
        (item.amount ?? "")
          .toLowerCase()
          .includes(query) ||
        item.benefits.some(
          (benefit) =>
            benefit
              .toLowerCase()
              .includes(query)
        ) ||
        item.reasons.some(
          (reason) =>
            reason
              .toLowerCase()
              .includes(query)
        );

      const matchesFilter =
        selectedFilter === "All" ||
        item.category === selectedFilter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  /*
   * Loading state.
   */
  if (loading) {
    return (
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
          🤖 Recommended For You
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow dark:border-slate-700 dark:bg-slate-900">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Loading opportunities...
          </p>
        </div>
      </section>
    );
  }

  /*
   * Error state.
   */
  if (error) {
    return (
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
          🤖 Recommended For You
        </h2>

        <div className="rounded-3xl border border-red-200 bg-red-50 p-12 text-center shadow dark:border-red-800 dark:bg-red-950/30">
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">
            Unable to Load Opportunities
          </h2>

          <p className="mt-4 text-red-600 dark:text-red-300">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100">
        🤖 Recommended For You
      </h2>

      {filteredRecommendations.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            😔 No Opportunities Found
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Try changing your search keywords or filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRecommendations.map(
            (item) => (
              <OpportunityCard
                key={item.id}
                id={item.id}
                title={item.title}
                provider={item.provider}
                category={item.category}
                description={item.description}
                amount={item.amount ?? ""}
                deadline={item.deadline ?? ""}
                eligibility={
                  item.eligibility ?? ""
                }
                matchScore={
                  item.matchScore
                }
                verified={
                  item.verified
                }
                reasons={
                  item.reasons
                }
              />
            )
          )}
        </div>
      )}
    </section>
  );
}