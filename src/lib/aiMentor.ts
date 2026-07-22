import { opportunities } from "@/data/opportunities";

export function getAIResponse(message: string): string {
  const query = message.toLowerCase();

  // -----------------------------
  // Career Roadmaps
  // -----------------------------
  if (
    query.includes("ai engineer") ||
    query.includes("artificial intelligence")
  ) {
    return `🤖 AI Engineer Roadmap

1. Learn Programming (Python + Java)

2. Master Data Structures & Algorithms

3. Learn SQL and Databases

4. Learn Machine Learning

5. Build 5 AI Projects

6. Participate in Hackathons

7. Apply for AI Internships

8. Build a strong GitHub & LinkedIn profile

9. Practice Interview Questions

10. Apply for AI Engineer Roles`;
  }

  if (
    query.includes("web developer") ||
    query.includes("frontend") ||
    query.includes("full stack")
  ) {
    return `🌐 Web Developer Roadmap

1. HTML

2. CSS

3. JavaScript

4. React

5. Next.js

6. Node.js + Express

7. MongoDB / SQL

8. Build Portfolio Projects

9. Deploy Projects

10. Apply for Internships`;
  }

  // -----------------------------
  // Google Internship
  // -----------------------------
  if (
    query.includes("google") &&
    query.includes("intern")
  ) {
    return `🚀 How to Prepare for Google Internship

✅ Strong DSA

✅ Problem Solving

✅ Web Development / AI

✅ Resume

✅ GitHub Projects

✅ LinkedIn Profile

✅ Mock Interviews

✅ Apply Early`;
  }

  // -----------------------------
  // Resume
  // -----------------------------
  if (
    query.includes("resume") ||
    query.includes("cv")
  ) {
    return `📄 Resume Tips

• Keep it one page

• Add Projects

• Add Skills

• Add Certifications

• Mention GitHub

• Mention LinkedIn

• Use action verbs

• Keep ATS Friendly`;
  }

  // -----------------------------
  // Profile Improvement
  // -----------------------------
  if (
    query.includes("improve profile") ||
    query.includes("profile")
  ) {
    return `⭐ Improve Your Profile

• Increase CGPA

• Learn New Skills

• Participate in Hackathons

• Complete Certifications

• Build Real Projects

• Maintain GitHub

• Stay Active on LinkedIn`;
  }

  // -----------------------------
  // Compare Opportunities
  // -----------------------------
  if (
    query.includes("compare")
  ) {
    return `📊 Opportunity Comparison

Type:

Compare AICTE Pragati Scholarship and NSP Central Sector Scholarship

or

Compare Google Internship and Microsoft Internship`;
  }

  // -----------------------------
  // Scholarships
  // -----------------------------
  if (
    query.includes("scholarship")
  ) {

    const scholarships = opportunities
      .filter((item) => item.category === "Scholarships")
      .slice(0, 3);

    return (
      "🎓 Top Scholarships\n\n" +
      scholarships
        .map(
          (item) =>
            `• ${item.title}\n${item.provider}`
        )
        .join("\n\n")
    );
  }

  // -----------------------------
  // Internships
  // -----------------------------
  if (
    query.includes("internship")
  ) {

    const internships = opportunities
      .filter((item) => item.category === "Internships")
      .slice(0, 3);

    return (
      "💼 Top Internships\n\n" +
      internships
        .map(
          (item) =>
            `• ${item.title}\n${item.provider}`
        )
        .join("\n\n")
    );
  }

  // -----------------------------
  // Hackathons
  // -----------------------------
  if (
    query.includes("hackathon")
  ) {

    const hackathons = opportunities
      .filter((item) => item.category === "Hackathons")
      .slice(0, 3);

    return (
      "🏆 Top Hackathons\n\n" +
      hackathons
        .map(
          (item) =>
            `• ${item.title}\n${item.provider}`
        )
        .join("\n\n")
    );
  }

  // -----------------------------
  // Default Response
  // -----------------------------
  return `👋 I can help you with:

🎓 Scholarships

💼 Internships

🏆 Hackathons

📄 Resume Tips

🚀 Career Roadmaps

⭐ Profile Improvement

📊 Compare Opportunities

Try asking:

• I want to become an AI Engineer

• Google Internship

• Improve my profile

• Scholarships

• Resume Tips`;
}