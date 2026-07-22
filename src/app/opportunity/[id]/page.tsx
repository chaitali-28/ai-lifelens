

import { notFound } from "next/navigation";

import AIMatchAnalysis from "@/components/AIMatchAnalysis";
import OpportunityHero from "@/components/OpportunityHero";
import OpportunityAbout from "@/components/OpportunityAbout";
import EligibilityCard from "@/components/EligibilityCard";
import BenefitsCard from "@/components/BenefitsCard";
import DocumentsCard from "@/components/DocumentsCard";
import ApplicationSteps from "@/components/ApplicationSteps";
import SimilarOpportunities from "@/components/SimilarOpportunities";

import { opportunities } from "@/data/opportunities";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityPage({
  params,
}: PageProps) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (item) => item.id === Number(id)
  );

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Opportunity Hero */}
        <OpportunityHero
          id={opportunity.id}
          title={opportunity.title}
          provider={opportunity.provider}
          category={opportunity.category}
          amount={opportunity.amount}
          deadline={opportunity.deadline}
          matchScore={opportunity.matchScore}
          verified={opportunity.verified}
          applicationUrl={opportunity.applicationUrl}
          description={opportunity.description}
          eligibility={opportunity.eligibility}
          reasons={opportunity.reasons}
        />

        {/* About */}
        <OpportunityAbout
          description={opportunity.description}
        />

        {/* Eligibility + Benefits */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <EligibilityCard
            eligibility={opportunity.eligibility}
          />

          <BenefitsCard
            benefits={opportunity.benefits}
          />

        </div>

        {/* Documents + AI Match */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <DocumentsCard
            documents={opportunity.requiredDocuments}
          />

          <AIMatchAnalysis
            score={opportunity.matchScore}
            reasons={opportunity.reasons}
          />

        </div>

        {/* Application Process */}
        <ApplicationSteps
          applicationUrl={opportunity.applicationUrl}
        />

        {/* Similar Opportunities */}
        <SimilarOpportunities
          currentId={opportunity.id}
          category={opportunity.category}
        />

      </div>
    </main>
  );
}