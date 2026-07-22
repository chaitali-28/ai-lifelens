"use client";

import { useEffect, useState } from "react";
import { defaultProfile } from "@/data/profile";

export default function ProfileStrength() {
  const [percentage, setPercentage] = useState(0);
  const [missing, setMissing] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("studentProfile");

    const profile = saved
      ? JSON.parse(saved)
      : defaultProfile;

    let completed = 0;
    const total = 10;

    const missingFields: string[] = [];

    if (profile.fullName) completed++;
    else missingFields.push("Full Name");

    if (profile.email) completed++;
    else missingFields.push("Email");

    if (profile.college) completed++;
    else missingFields.push("College");

    if (profile.course) completed++;
    else missingFields.push("Course");

    if (profile.branch) completed++;
    else missingFields.push("Branch");

    if (profile.year) completed++;
    else missingFields.push("Current Year");

    if (profile.cgpa) completed++;
    else missingFields.push("CGPA");

    if (profile.familyIncome) completed++;
    else missingFields.push("Family Income");

    if (profile.skills?.length > 0) completed++;
    else missingFields.push("Skills");

    if (profile.interests?.length > 0) completed++;
    else missingFields.push("Interests");

    setPercentage(
      Math.round((completed / total) * 100)
    );

    setMissing(missingFields);
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
          text-4xl
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        💪 Profile Strength
      </h2>

      {/* Progress */}
      <div className="mt-8">
        <div
          className="
            h-5
            overflow-hidden
            rounded-full
            bg-slate-200

            dark:bg-slate-700
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-blue-600
              transition-all
              duration-700
              dark:bg-blue-500
            "
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <p
          className="
            mt-4
            text-2xl
            font-bold
            text-blue-600

            dark:text-blue-400
          "
        >
          {percentage}% Complete
        </p>
      </div>

      {/* Missing Information */}
      {missing.length > 0 && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-6

            dark:border-red-900/50
            dark:bg-red-950/30
          "
        >
          <h3
            className="
              mb-4
              text-xl
              font-bold
              text-red-600

              dark:text-red-400
            "
          >
            Missing Information
          </h3>

          <ul
            className="
              space-y-2
              text-slate-700

              dark:text-slate-300
            "
          >
            {missing.map((field) => (
              <li key={field}>
                • {field}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Complete Profile */}
      {percentage === 100 && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-green-200
            bg-green-100
            p-6
            text-center

            dark:border-green-800
            dark:bg-green-950/30
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-green-700

              dark:text-green-400
            "
          >
            🎉 Excellent! Your profile is complete.
          </h3>
        </div>
      )}
    </section>
  );
}