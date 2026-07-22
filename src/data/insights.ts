export type InsightType = "success" | "info" | "warning";

export type Insight = {
  id: number;
  type: InsightType;
  title: string;
  description: string;
};

export const insights: Insight[] = [
  {
    id: 1,
    type: "success",
    title: "Excellent Scholarship Match",
    description:
      "Your CGPA and academic profile make you eligible for several high-value scholarships.",
  },
  {
    id: 2,
    type: "info",
    title: "Improve Internship Recommendations",
    description:
      "Adding React.js and SQL to your skills can unlock many more internship opportunities.",
  },
  {
    id: 3,
    type: "warning",
    title: "Upcoming Deadlines",
    description:
      "Three recommended opportunities will close within the next 10 days.",
  },
  {
    id: 4,
    type: "info",
    title: "Profile Completion",
    description:
      "Your profile is 82% complete. Completing it will improve AI recommendations.",
  },
];