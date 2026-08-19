
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

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
  const supabase = createClient();

  const [name, setName] = useState("Student");

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        /*
         * -----------------------------------------
         * 1. Get currently authenticated user
         * -----------------------------------------
         */
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          console.error(
            "Dashboard Authentication Error:",
            userError
          );

          return;
        }

        /*
         * -----------------------------------------
         * 2. Check if user exists
         * -----------------------------------------
         */
        if (!user) {
          router.replace("/auth");
          return;
        }

        /*
         * -----------------------------------------
         * 3. Fetch user's profile from Supabase
         * -----------------------------------------
         */
        const {
          data: profile,
          error: profileError,
        } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", user.id)
          .maybeSingle();

        /*
         * -----------------------------------------
         * 4. Handle profile fetch error
         * -----------------------------------------
         */
        if (profileError) {
          console.error(
            "Dashboard Profile Fetch Error:",
            {
              message: profileError.message,
              details: profileError.details,
              hint: profileError.hint,
              code: profileError.code,
            }
          );

          /*
           * If profile cannot be fetched,
           * we can still use the email as fallback.
           */
          setName(
            user.email?.split("@")[0] || "Student"
          );

          return;
        }

        /*
         * -----------------------------------------
         * 5. Set profile name
         * -----------------------------------------
         */
        if (profile?.full_name?.trim()) {
          setName(profile.full_name);
        } else {
          /*
           * If full_name is empty,
           * use email username as fallback.
           */
          setName(
            user.email?.split("@")[0] || "Student"
          );
        }
      } catch (error) {
        console.error(
          "Unexpected Dashboard Profile Error:",
          error
        );
      }
    };

    loadUserProfile();
  }, [router, supabase]);

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