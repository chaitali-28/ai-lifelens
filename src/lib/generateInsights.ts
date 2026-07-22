type Profile = {
  course: string;
  branch: string;
  cgpa: string;
  familyIncome: string;
  skills: string[];
  interests: string[];
};

export function generateInsights(profile: Profile) {
  const insights = [];

  const cgpa = Number(profile.cgpa);
  const income = Number(profile.familyIncome);

  // CGPA
  if (!isNaN(cgpa) && cgpa >= 8.5) {
    insights.push({
      type: "success",
      title: "Excellent Academic Performance",
      description:
        "Your CGPA qualifies you for many merit-based scholarships.",
    });
  }

  // Skills
  if (!profile.skills.includes("React")) {
    insights.push({
      type: "info",
      title: "Improve Internship Matches",
      description:
        "Adding React to your skills can unlock additional internship opportunities.",
    });
  }

  if (!profile.skills.includes("SQL")) {
    insights.push({
      type: "info",
      title: "Strengthen Your Technical Profile",
      description:
        "Learning SQL will improve eligibility for many software internships.",
    });
  }

  // Income
  if (!isNaN(income) && income < 800000) {
    insights.push({
      type: "success",
      title: "Financial Aid Available",
      description:
        "Based on your family income, you may qualify for several government scholarships.",
    });
  }

  // Interest
  if (profile.interests.includes("Artificial Intelligence")) {
    insights.push({
      type: "success",
      title: "AI Opportunities Found",
      description:
        "New AI hackathons and internships match your interests.",
    });
  }

  // Branch
  if (profile.branch === "Computer Engineering") {
    insights.push({
      type: "info",
      title: "High Opportunity Match",
      description:
        "Computer Engineering students currently have the highest number of active opportunities on AI LifeLens.",
    });
  }

  return insights;
}