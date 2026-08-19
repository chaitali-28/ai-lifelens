

// import { opportunities } from "@/data/opportunities";
// import { defaultProfile } from "@/data/profile";

// type Profile = typeof defaultProfile;

// export function getRecommendations(profile: Profile) {
//   return opportunities
//     .map((opportunity) => {
//       let score = opportunity.matchScore ?? 50;
//       const reasons: string[] = [];

//       // Branch Match
//       if (
//         profile.branch &&
//         opportunity.eligibility
//           .toLowerCase()
//           .includes(profile.branch.toLowerCase())
//       ) {
//         score += 10;
//         reasons.push(`Matches your branch (${profile.branch})`);
//       }

//       // Course Match
//       if (
//         profile.course &&
//         opportunity.eligibility
//           .toLowerCase()
//           .includes(profile.course.toLowerCase())
//       ) {
//         score += 8;
//         reasons.push(`Suitable for ${profile.course}`);
//       }

//       // State Match
//       if (
//         profile.state &&
//         opportunity.description
//           .toLowerCase()
//           .includes(profile.state.toLowerCase())
//       ) {
//         score += 5;
//         reasons.push(`Available in ${profile.state}`);
//       }

//       // Category Match
//       if (
//         profile.category &&
//         opportunity.eligibility
//           .toLowerCase()
//           .includes(profile.category.toLowerCase())
//       ) {
//         score += 5;
//       }

//       // Skills Match
//       if (profile.skills.length > 0) {
//         profile.skills.forEach((skill) => {
//           if (
//             opportunity.description
//               .toLowerCase()
//               .includes(skill.toLowerCase())
//           ) {
//             score += 4;
//             reasons.push(`Uses your ${skill} skill`);
//           }
//         });
//       }

//       // Interest Match
//       if (profile.interests.length > 0) {
//         profile.interests.forEach((interest) => {
//           if (
//             opportunity.category
//               .toLowerCase()
//               .includes(interest.toLowerCase())
//           ) {
//             score += 8;
//             reasons.push(`Matches your interest in ${interest}`);
//           }
//         });
//       }

//       // Verified
//       if (opportunity.verified) {
//         score += 2;
//         reasons.push("Verified Opportunity");
//       }

//       score = Math.min(score, 100);

//       return {
//         ...opportunity,
//         matchScore: score,
//         reasons,
//       };
//     })
//     .sort((a, b) => b.matchScore - a.matchScore);
// }
import { defaultProfile } from "@/data/profile";

type Profile = typeof defaultProfile;

type Opportunity = {
  id: number;
  title: string;
  provider: string;
  category: string;
  description: string;
  amount: string;
  deadline: string;
  eligibility: string;
  match_score?: number;
  verified: boolean;
  application_url?: string;
  required_documents?: string[];
  benefits?: string[];
  reasons?: string[];
};

export function getRecommendations(
  profile: Profile,
  opportunities: Opportunity[]
) {
  return opportunities
    .map((opportunity) => {



      let score = opportunity.match_score ?? 50;
      const reasons: string[] = [];

      const eligibility =
        opportunity.eligibility?.toLowerCase() ?? "";

      const description =
        opportunity.description?.toLowerCase() ?? "";

      const category =
        opportunity.category?.toLowerCase() ?? "";

      // Branch Match
      if (
        profile.branch &&
        eligibility.includes(profile.branch.toLowerCase())
      ) {
        score += 10;
        reasons.push(
          `Matches your branch (${profile.branch})`
        );
      }

      // Course Match
      if (
        profile.course &&
        eligibility.includes(profile.course.toLowerCase())
      ) {
        score += 8;
        reasons.push(
          `Suitable for ${profile.course}`
        );
      }

      // State Match
      if (
        profile.state &&
        description.includes(profile.state.toLowerCase())
      ) {
        score += 5;
        reasons.push(
          `Available in ${profile.state}`
        );
      }

      // Category Match
      if (
        profile.category &&
        eligibility.includes(profile.category.toLowerCase())
      ) {
        score += 5;
        reasons.push(
          `Matches your category`
        );
      }

      // Skills Match
      if (profile.skills.length > 0) {
        profile.skills.forEach((skill) => {
          if (
            description.includes(
              skill.toLowerCase()
            )
          ) {
            score += 4;

            reasons.push(
              `Uses your ${skill} skill`
            );
          }
        });
      }

      // Interest Match
      if (profile.interests.length > 0) {
        profile.interests.forEach((interest) => {
          if (
            category.includes(
              interest.toLowerCase()
            )
          ) {
            score += 8;

            reasons.push(
              `Matches your interest in ${interest}`
            );
          }
        });
      }

      // Verified Opportunity
      if (opportunity.verified) {
        score += 2;
        reasons.push(
          "Verified Opportunity"
        );
      }

      score = Math.min(score, 100);

      return {
        ...opportunity,

        // Convert Supabase column name
        // to the name expected by UI.
        matchScore: score,

        reasons:
          reasons.length > 0
            ? reasons
            : opportunity.reasons ?? [],
      };
    })
    .sort(
      (a, b) =>
        b.matchScore - a.matchScore
    );
}