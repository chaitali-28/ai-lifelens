

// import { notFound } from "next/navigation";

// import AIMatchAnalysis from "@/components/AIMatchAnalysis";
// import OpportunityHero from "@/components/OpportunityHero";
// import OpportunityAbout from "@/components/OpportunityAbout";
// import EligibilityCard from "@/components/EligibilityCard";
// import BenefitsCard from "@/components/BenefitsCard";
// import DocumentsCard from "@/components/DocumentsCard";
// import ApplicationSteps from "@/components/ApplicationSteps";
// import SimilarOpportunities from "@/components/SimilarOpportunities";

// import { opportunities } from "@/data/opportunities";

// type PageProps = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default async function OpportunityPage({
//   params,
// }: PageProps) {
//   const { id } = await params;

//   const opportunity = opportunities.find(
//     (item) => item.id === Number(id)
//   );

//   if (!opportunity) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
//       <div className="mx-auto max-w-7xl px-6 py-10">

//         {/* Opportunity Hero */}
//         <OpportunityHero
//           id={opportunity.id}
//           title={opportunity.title}
//           provider={opportunity.provider}
//           category={opportunity.category}
//           amount={opportunity.amount}
//           deadline={opportunity.deadline}
//           matchScore={opportunity.matchScore}
//           verified={opportunity.verified}
//           applicationUrl={opportunity.applicationUrl}
//           description={opportunity.description}
//           eligibility={opportunity.eligibility}
//           reasons={opportunity.reasons}
//         />

//         {/* About */}
//         <OpportunityAbout
//           description={opportunity.description}
//         />

//         {/* Eligibility + Benefits */}
//         <div className="mt-10 grid gap-8 lg:grid-cols-2">

//           <EligibilityCard
//             eligibility={opportunity.eligibility}
//           />

//           <BenefitsCard
//             benefits={opportunity.benefits}
//           />

//         </div>

//         {/* Documents + AI Match */}
//         <div className="mt-10 grid gap-8 lg:grid-cols-2">

//           <DocumentsCard
//             documents={opportunity.requiredDocuments}
//           />

//           <AIMatchAnalysis
//             score={opportunity.matchScore}
//             reasons={opportunity.reasons}
//           />

//         </div>

//         {/* Application Process */}
//         <ApplicationSteps
//           applicationUrl={opportunity.applicationUrl}
//         />

//         {/* Similar Opportunities */}
//         <SimilarOpportunities
//           currentId={opportunity.id}
//           category={opportunity.category}
//         />

//       </div>
//     </main>
//   );
// }
import { notFound } from "next/navigation";

import AIMatchAnalysis from "@/components/AIMatchAnalysis";
import OpportunityHero from "@/components/OpportunityHero";
import OpportunityAbout from "@/components/OpportunityAbout";
import EligibilityCard from "@/components/EligibilityCard";
import BenefitsCard from "@/components/BenefitsCard";
import DocumentsCard from "@/components/DocumentsCard";
import ApplicationSteps from "@/components/ApplicationSteps";
import SimilarOpportunities from "@/components/SimilarOpportunities";

import { createClient } from "@/lib/supabase/server";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityPage({
  params,
}: PageProps) {
  const { id } = await params;

  /*
   * Create Supabase server client.
   */
  const supabase = await createClient();

  /*
   * Fetch the selected opportunity
   * from Supabase using the ID
   * from the URL.
   */
  const {
    data: opportunity,
    error,
  } = await supabase
    .from("opportunities")
    .select("*")
    .eq("id", id)
    .single();

  /*
   * If Supabase returns an error
   * or the opportunity does not exist,
   * show the Next.js 404 page.
   */
  if (error || !opportunity) {
    console.error(
      "Opportunity Fetch Error:",
      {
        message: error?.message,
        details: error?.details,
        hint: error?.hint,
        code: error?.code,
      }
    );

    notFound();
  }

  /*
   * Convert Supabase database fields
   * into the camelCase format used
   * by your existing components.
   */
  const formattedOpportunity = {
    id: opportunity.id,

    title:
      opportunity.title ?? "",

    provider:
      opportunity.provider ?? "",

    category:
      opportunity.category ?? "",

    description:
      opportunity.description ?? "",

    amount:
      opportunity.amount ?? "",

    deadline:
      opportunity.deadline ?? "",

    eligibility:
      opportunity.eligibility ?? "",

    matchScore:
      opportunity.match_score ?? 0,

    verified:
      opportunity.verified ?? false,

    applicationUrl:
      opportunity.application_url ?? "",

    requiredDocuments:
      Array.isArray(
        opportunity.required_documents
      )
        ? opportunity.required_documents
        : [],

    benefits:
      Array.isArray(
        opportunity.benefits
      )
        ? opportunity.benefits
        : [],

    reasons:
      Array.isArray(
        opportunity.reasons
      )
        ? opportunity.reasons
        : [],
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Opportunity Hero */}
        <OpportunityHero
          id={formattedOpportunity.id}
          title={formattedOpportunity.title}
          provider={formattedOpportunity.provider}
          category={formattedOpportunity.category}
          amount={formattedOpportunity.amount}
          deadline={formattedOpportunity.deadline}
          matchScore={
            formattedOpportunity.matchScore
          }
          verified={
            formattedOpportunity.verified
          }
          applicationUrl={
            formattedOpportunity.applicationUrl
          }
          description={
            formattedOpportunity.description
          }
          eligibility={
            formattedOpportunity.eligibility
          }
          reasons={
            formattedOpportunity.reasons
          }
        />

        {/* About */}
        <OpportunityAbout
          description={
            formattedOpportunity.description
          }
        />

        {/* Eligibility + Benefits */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <EligibilityCard
            eligibility={
              formattedOpportunity.eligibility
            }
          />

          <BenefitsCard
            benefits={
              formattedOpportunity.benefits
            }
          />

        </div>

        {/* Documents + AI Match */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <DocumentsCard
            documents={
              formattedOpportunity.requiredDocuments
            }
          />

          <AIMatchAnalysis
            score={
              formattedOpportunity.matchScore
            }
            reasons={
              formattedOpportunity.reasons
            }
          />

        </div>

        {/* Application Process */}
        <ApplicationSteps
          applicationUrl={
            formattedOpportunity.applicationUrl
          }
        />

        {/* Similar Opportunities */}
        <SimilarOpportunities
          currentId={
            formattedOpportunity.id
          }
          category={
            formattedOpportunity.category
          }
        />

      </div>
    </main>
  );
}