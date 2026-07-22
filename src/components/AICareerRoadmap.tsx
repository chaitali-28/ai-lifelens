"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { defaultProfile } from "@/data/profile";

export default function AICareerRoadmap() {
  const [steps, setSteps] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    const profile = saved
      ? JSON.parse(saved)
      : defaultProfile;

    const roadmap: string[] = [];

    if (!profile.skills.includes("React")) {
      roadmap.push(
        "Learn React to unlock more internship opportunities."
      );
    }

    if (!profile.skills.includes("DSA")) {
      roadmap.push(
        "Practice Data Structures & Algorithms."
      );
    }

    if (!profile.skills.includes("SQL")) {
      roadmap.push(
        "Learn SQL for software engineering roles."
      );
    }

    if (
      profile.cgpa &&
      Number(profile.cgpa) >= 8
    ) {
      roadmap.push(
        "Apply for Google and Microsoft internships."
      );
    }

    if (
      profile.interests.includes("Hackathons") ||
      profile.interests.includes("AI")
    ) {
      roadmap.push(
        "Participate in Smart India Hackathon."
      );
    }

    roadmap.push(
      "Keep your resume updated."
    );

    roadmap.push(
      "Complete your LinkedIn profile."
    );

    setSteps(roadmap);
  }, []);

  return (
    <section
      className="
        mt-16
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-colors
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
        dark:shadow-black/20
      "
    >
      {/* Header */}
      <h2
        className="
          mb-8
          text-4xl
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        🤖 AI Career Roadmap
      </h2>

      {/* Roadmap Steps */}
      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-5
              transition-colors
              duration-300

              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            <CheckCircle2
              className="
                mt-1
                shrink-0
                text-green-600

                dark:text-green-400
              "
              size={24}
            />

            <p
              className="
                text-lg
                text-slate-700

                dark:text-slate-300
              "
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}