
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import { addActivity } from "@/lib/activity";
import { defaultProfile } from "@/data/profile";

import InputField from "./InputField";
import SelectField from "./SelectField";
import SkillSelector from "./SkillSelector";
import InterestSelector from "./InterestSelector";

export default function StudentProfileForm() {
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState(defaultProfile);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  /*
   * Load the currently logged-in user's profile
   * from Supabase.
   */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        // Get currently authenticated user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          console.error(
            "Authentication Error:",
            userError
          );

          setError(
            "Unable to verify your account. Please log in again."
          );

          router.replace("/auth");
          return;
        }

        // No logged-in user
        if (!user) {
          router.replace("/auth");
          return;
        }

        // Fetch profile belonging to this user
        const {
          data: savedProfile,
          error: profileError,
        } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .maybeSingle();

        if (profileError) {
          console.error(
            "Profile Fetch Error:",
            {
              message: profileError.message,
              details: profileError.details,
              hint: profileError.hint,
              code: profileError.code,
            }
          );

          setError(
            "Unable to load your profile. Please try again."
          );

          return;
        }

        /*
         * If profile exists, load it into the form.
         */
        if (savedProfile) {
          setProfile((prev) => ({
            ...prev,

            fullName:
              savedProfile.full_name ??
              prev.fullName,

            email:
              savedProfile.email ??
              user.email ??
              prev.email,

            // mobile:
            //   savedProfile.mobile ??
            //   prev.mobile,

            state:
              savedProfile.state ??
              prev.state,

            college:
              savedProfile.college ??
              prev.college,

            course:
              savedProfile.course ??
              prev.course,

            branch:
              savedProfile.branch ??
              prev.branch,

            year:
              savedProfile.year ??
              prev.year,

            cgpa:
              savedProfile.cgpa ??
              prev.cgpa,

            familyIncome:
              savedProfile.family_income ??
              prev.familyIncome,

            category:
              savedProfile.category ??
              prev.category,

            skills:
              savedProfile.skills ??
              prev.skills,

            interests:
              savedProfile.interests ??
              prev.interests,
          }));
        } else {
          /*
           * If profile does not exist yet,
           * use authenticated user's email.
           */
          setProfile((prev) => ({
            ...prev,
            email: user.email ?? prev.email,
          }));
        }
      } catch (error) {
        console.error(
          "Unexpected Profile Loading Error:",
          error
        );

        setError(
          "Something went wrong while loading your profile."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [router, supabase]);

  /*
   * Update a single profile field.
   */
  const updateField = (
    field: keyof typeof profile,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /*
   * Save profile to Supabase.
   */
  const saveProfile = async () => {
    try {
      setSaving(true);
      setSaved(false);
      setError("");

      // Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError(
          "Your session has expired. Please log in again."
        );

        router.replace("/auth");
        return;
      }

      /*
       * Update profile in Supabase.
       */
      const {
        error: updateError,
      } = await supabase
        .from("profiles")
        .update({
          full_name: profile.fullName,
          email: profile.email,
          // mobile: profile.mobile,
          state: profile.state,
          college: profile.college,
          course: profile.course,
          branch: profile.branch,
          year: profile.year,
          cgpa: profile.cgpa,
          family_income: profile.familyIncome,
          category: profile.category,
          skills: profile.skills,
          interests: profile.interests,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (updateError) {
        console.error(
          "Profile Update Error:",
          {
            message: updateError.message,
            details: updateError.details,
            hint: updateError.hint,
            code: updateError.code,
          }
        );

        setError(
          "Unable to save your profile. Please try again."
        );

        return;
      }

      /*
       * Record activity.
       */
      try {
        addActivity(
          "Profile Updated",
          "Your student profile was updated successfully."
        );
      } catch (activityError) {
        console.error(
          "Activity Log Error:",
          activityError
        );
      }

      setSaved(true);

      /*
       * Redirect after successful save.
       */
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error(
        "Unexpected Profile Save Error:",
        error
      );

      setError(
        "Something went wrong while saving your profile."
      );
    } finally {
      setSaving(false);
    }
  };

  /*
   * Loading state.
   */
  if (loading) {
    return (
      <section className="mx-auto flex min-h-[500px] max-w-5xl items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Loading your profile...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-colors duration-300 sm:p-8 md:p-10 dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="text-center">

        <h1 className="text-4xl font-bold text-slate-900 transition-colors dark:text-slate-100">
          👤 Student Profile
        </h1>

        <p className="mt-3 text-slate-600 transition-colors dark:text-slate-400">
          Complete your profile to receive AI-powered personalized opportunities.
        </p>

      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-8 rounded-2xl border border-red-300 bg-red-50 p-4 text-center font-medium text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400">
          ❌ {error}
        </div>
      )}

      {/* Success Message */}
      {saved && (
        <div className="mt-8 rounded-2xl border border-green-300 bg-green-50 p-4 text-center font-medium text-green-700 transition-colors dark:border-green-800 dark:bg-green-950/40 dark:text-green-400">
          ✅ Profile saved successfully! Your recommendations have been updated.
        </div>
      )}

      {/* Profile Fields */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <InputField
          label="Full Name"
          placeholder="Enter your full name"
          value={profile.fullName}
          onChange={(value) =>
            updateField("fullName", value)
          }
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={profile.email}
          onChange={(value) =>
            updateField("email", value)
          }
        />

        <InputField
          label="College"
          placeholder="Enter your college"
          value={profile.college}
          onChange={(value) =>
            updateField("college", value)
          }
        />

        <SelectField
          label="Course"
          options={[
            "B.Tech",
            "BCA",
            "B.Sc",
            "MBA",
            "M.Tech",
          ]}
          value={profile.course}
          onChange={(value) =>
            updateField("course", value)
          }
        />

        <SelectField
          label="Branch"
          options={[
            "Computer Engineering",
            "Information Technology",
            "AI & DS",
            "Electronics",
            "Mechanical",
          ]}
          value={profile.branch}
          onChange={(value) =>
            updateField("branch", value)
          }
        />

        <SelectField
          label="Current Year"
          options={[
            "First Year",
            "Second Year",
            "Third Year",
            "Final Year",
          ]}
          value={profile.year}
          onChange={(value) =>
            updateField("year", value)
          }
        />

        <InputField
          label="CGPA"
          placeholder="Example: 8.85"
          value={profile.cgpa}
          onChange={(value) =>
            updateField("cgpa", value)
          }
        />

        <InputField
          label="Family Income"
          type="number"
          placeholder="Example: 250000"
          value={profile.familyIncome}
          onChange={(value) =>
            updateField("familyIncome", value)
          }
        />

        <SelectField
          label="State"
          options={[
            "Maharashtra",
            "Gujarat",
            "Delhi",
            "Karnataka",
            "Tamil Nadu",
          ]}
          value={profile.state}
          onChange={(value) =>
            updateField("state", value)
          }
        />

        <SelectField
          label="Category"
          options={[
            "Open",
            "OBC",
            "SC",
            "ST",
            "EWS",
          ]}
          value={profile.category}
          onChange={(value) =>
            updateField("category", value)
          }
        />

      </div>

      {/* Skills */}
      <div className="mt-10">
        <SkillSelector
          selectedSkills={profile.skills}
          onChange={(skills) =>
            setProfile((prev) => ({
              ...prev,
              skills,
            }))
          }
        />
      </div>

      {/* Interests */}
      <div className="mt-10">
        <InterestSelector
          selectedInterests={profile.interests}
          onChange={(interests) =>
            setProfile((prev) => ({
              ...prev,
              interests,
            }))
          }
        />
      </div>

      {/* Save Button */}
      <button
        onClick={saveProfile}
        disabled={saving}
        className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-slate-900"
      >
        {saving
          ? "Saving Profile..."
          : "💾 Save Profile"}
      </button>

    </section>
  );
}
