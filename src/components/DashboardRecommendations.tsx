
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { defaultProfile } from "@/data/profile";
import { getRecommendations } from "@/lib/recommendationEngine";

type ProfileRow = {
  full_name: string | null;
  email: string | null;
  mobile: string | null;
  state: string | null;
  college: string | null;
  course: string | null;
  branch: string | null;
  year: string | null;
  cgpa: string | null;
  family_income: string | null;
  category: string | null;
  skills: string[] | null;
  interests: string[] | null;
};

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

export default function DashboardRecommendations() {
  const [recommendations, setRecommendations] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        setLoading(true);
        setError("");

        const supabase = createClient();

        // -----------------------------------------
        // 1. Get authenticated user
        // -----------------------------------------

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setError(
            "Unable to load your recommendations."
          );

          return;
        }

        // -----------------------------------------
        // 2. Get user's profile
        // -----------------------------------------

        const {
          data: profileData,
          error: profileError,
        } = await supabase
          .from("profiles")
          .select(
            `
              full_name,
              email,
              mobile,
              state,
              college,
              course,
              branch,
              year,
              cgpa,
              family_income,
              category,
              skills,
              interests
            `
          )
          .eq("id", user.id)
          .maybeSingle();

        if (profileError) {
          console.error(
            "Dashboard Profile Error:",
            profileError
          );

          setError(
            "Unable to load your profile."
          );

          return;
        }

        // -----------------------------------------
        // 3. Convert Supabase profile
        //    to application profile format
        // -----------------------------------------

        const profile = profileData
          ? {
              ...defaultProfile,

              fullName:
                profileData.full_name ??
                "",

              email:
                profileData.email ??
                user.email ??
                "",

              mobile:
                profileData.mobile ??
                "",

              state:
                profileData.state ??
                "",

              college:
                profileData.college ??
                "",

              course:
                profileData.course ??
                "",

              branch:
                profileData.branch ??
                "",

              year:
                profileData.year ??
                "",

              cgpa:
                profileData.cgpa ??
                "",

              familyIncome:
                profileData.family_income ??
                "",

              category:
                profileData.category ??
                "",

              skills:
                profileData.skills ??
                [],

              interests:
                profileData.interests ??
                [],
            }
          : {
              ...defaultProfile,
              email:
                user.email ??
                "",
            };

        // -----------------------------------------
        // 4. Get opportunities from Supabase
        // -----------------------------------------

        const {
          data: opportunities,
          error: opportunitiesError,
        } = await supabase
          .from("opportunities")
          .select(
            `
              id,
              title,
              provider,
              category,
              description,
              amount,
              deadline,
              eligibility,
              match_score,
              verified,
              application_url,
              required_documents,
              benefits,
              reasons
            `
          );

        if (opportunitiesError) {
          console.error(
            "Dashboard Opportunities Error:",
            opportunitiesError
          );

          setError(
            "Unable to load opportunities."
          );

          return;
        }

        // -----------------------------------------
        // 5. Generate recommendations
        // -----------------------------------------

        const results =
          getRecommendations(
            profile,
            (opportunities ??
              []) as Opportunity[]
          );

        // -----------------------------------------
        // 6. Show top 3
        // -----------------------------------------

        setRecommendations(
          results.slice(0, 3)
        );
      } catch (error) {
        console.error(
          "Unexpected Dashboard Recommendation Error:",
          error
        );

        setError(
          "Something went wrong while loading recommendations."
        );
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
  }, []);

  // -----------------------------------------
  // Loading
  // -----------------------------------------

  if (loading) {
    return (
      <section className="mt-14">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          🎯 Recommended For You
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-slate-600 dark:text-slate-400">
            Finding opportunities for you...
          </p>
        </div>
      </section>
    );
  }

  // -----------------------------------------
  // Error
  // -----------------------------------------

  if (error) {
    return (
      <section className="mt-14">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          🎯 Recommended For You
        </h2>

        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-800 dark:bg-red-950/30">
          <p className="font-medium text-red-700 dark:text-red-400">
            ❌ {error}
          </p>
        </div>
      </section>
    );
  }

  // -----------------------------------------
  // UI
  // -----------------------------------------

  return (
    <section className="mt-14">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          🎯 Recommended For You
        </h2>

        <Link
          href="/explore"
          className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
        >
          View All →
        </Link>

      </div>

      {/* No Results */}

      {recommendations.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            No recommendations yet
          </h3>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Complete your profile to receive personalized opportunities.
          </p>

          <Link
            href="/profile"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Complete Profile
          </Link>

        </div>
      ) : (

        /* Recommendation Cards */

        <div className="grid gap-6 lg:grid-cols-3">

          {recommendations.map(
            (item) => (
              <Link
                key={item.id}
                href={`/opportunity/${item.id}`}
                className="
                  rounded-3xl
                  border border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:shadow-black/20
                  dark:hover:border-slate-600
                  dark:hover:shadow-black/40
                "
              >

                {/* Category */}

                <span
                  className="
                    inline-block
                    rounded-full
                    bg-blue-100
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-blue-700

                    dark:bg-blue-500/20
                    dark:text-blue-300
                  "
                >
                  {item.category}
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Provider */}

                <p
                  className="
                    mt-2
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {item.provider}
                </p>

                {/* Bottom */}

                <div className="mt-6 flex items-center justify-between">

                  <span
                    className="
                      font-semibold
                      text-green-600
                      dark:text-green-400
                    "
                  >
                    {item.amount}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-green-100
                      px-3
                      py-1
                      font-semibold
                      text-green-700

                      dark:bg-green-500/20
                      dark:text-green-400
                    "
                  >
                    {item.matchScore}%
                  </span>

                </div>

              </Link>
            )
          )}

        </div>
      )}

    </section>
  );
}