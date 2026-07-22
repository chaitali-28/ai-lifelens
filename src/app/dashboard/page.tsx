


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardHeader from "@/components/DashboardHeader";
import DashboardStats from "@/components/DashboardStats";
import AIInsights from "@/components/AIInsights";
import DashboardRecommendations from "@/components/DashboardRecommendations";
import UpcomingDeadlines from "@/components/UpcomingDeadlines";
import AICareerRoadmap from "@/components/AICareerRoadmap";
import ProfileStrength from "@/components/ProfileStrength";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  const router = useRouter();

  const [name, setName] = useState("Student");

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");

    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);

        if (profile.fullName?.trim()) {
          setName(profile.fullName);
        }
      } catch (error) {
        console.error(
          "Failed to load profile:",
          error
        );
      }
    }
  }, []);

  return (
    <ProtectedRoute>
      <main
        className="
          min-h-screen
          bg-slate-50
          text-slate-900
          transition-colors
          duration-300

          dark:bg-slate-950
          dark:text-slate-100
        "
      >
        <div className="mx-auto max-w-7xl px-6 py-10">

          {/* Dashboard Header */}

          <DashboardHeader
            name={name}
          />

          {/* Dashboard Statistics */}

          <DashboardStats />

          {/* AI Insights */}

          <AIInsights />

          {/* Recommended Opportunities */}

          <DashboardRecommendations />

          {/* Upcoming Deadlines */}

          <UpcomingDeadlines />

          {/* AI Career Roadmap */}

          <AICareerRoadmap />

          {/* Profile Strength */}

          <ProfileStrength />

          {/* Footer */}

          <Footer />

        </div>
      </main>
    </ProtectedRoute>
  );
}