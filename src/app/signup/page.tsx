
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    // Clear previous messages
    setError("");
    setSuccess("");

    // -----------------------------------------
    // 1. Validate required fields
    // -----------------------------------------
    if (
      !fullName.trim() ||
      !email.trim() ||
      !mobile.trim() ||
      !password ||
      !confirmPassword ||
      !state ||
      !district.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // -----------------------------------------
    // 2. Check password match
    // -----------------------------------------
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // -----------------------------------------
    // 3. Check password length
    // -----------------------------------------
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);

     
      const {
  data: authData,
  error: authError,
} = await supabase.auth.signUp({
  email: email.trim(),
  password: password,

  options: {
    emailRedirectTo: "http://localhost:3000/auth",

    data: {
      full_name: fullName.trim(),
      mobile: mobile.trim(),
      state: state,
      district: district.trim(),
    },
  },
});

      // -----------------------------------------
      // 5. Check Authentication error
      // -----------------------------------------
      if (authError) {
        console.error("Supabase Auth Error:", authError);

        throw new Error(
          authError.message || "Unable to create account."
        );
      }

      // -----------------------------------------
      // 6. Check if user was created
      // -----------------------------------------
      if (!authData.user) {
        throw new Error(
          "Account could not be created. Please try again."
        );
      }

      console.log(
        "Supabase Auth User Created:",
        authData.user.id
      );

      // -----------------------------------------
      // 7. Check email confirmation status
      // -----------------------------------------
      if (!authData.session) {
        /*
          If email confirmation is enabled in Supabase,
          the user is created successfully but must
          confirm their email before logging in.
        */

        setSuccess(
          "Account created successfully! Please check your email and verify your account before logging in."
        );

        return;
      }

      // -----------------------------------------
      // 8. Signup completed successfully
      //
      // IMPORTANT:
      // We DO NOT insert into profiles here.
      //
      // The Supabase database trigger:
      //
      // on_auth_user_created
      //
      // automatically creates the profile.
      // -----------------------------------------
      setSuccess(
        "Account created successfully! Redirecting..."
      );

      // -----------------------------------------
      // 9. Redirect to profile page
      // -----------------------------------------
      setTimeout(() => {
        router.push("/profile");
        router.refresh();
      }, 1000);

    } catch (error: unknown) {
      // -----------------------------------------
      // 10. Detailed error handling
      // -----------------------------------------
      console.error("FULL SIGNUP ERROR:", error);

      if (error instanceof Error) {
        setError(error.message);
      } else if (
        typeof error === "object" &&
        error !== null
      ) {
        const supabaseError = error as {
          message?: string;
          code?: string;
          details?: string;
          hint?: string;
        };

        console.error(
          "Error message:",
          supabaseError.message
        );

        console.error(
          "Error code:",
          supabaseError.code
        );

        console.error(
          "Error details:",
          supabaseError.details
        );

        console.error(
          "Error hint:",
          supabaseError.hint
        );

        setError(
          supabaseError.message ||
            "Signup failed. Please try again."
        );
      } else {
        setError(
          "Signup failed. Please try again."
        );
      }
    } finally {
      // -----------------------------------------
      // 11. Stop loading
      // -----------------------------------------
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-2 text-slate-600">
            Join AI LifeLens to discover personalized
            opportunities.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* Form */}
        <div className="mt-8 space-y-5">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          />

          {/* Mobile */}
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          />

          {/* State */}
          <select
            value={state}
            onChange={(e) =>
              setState(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          >
            <option value="">
              Select State
            </option>

            <option value="Maharashtra">
              Maharashtra
            </option>

            <option value="Gujarat">
              Gujarat
            </option>

            <option value="Karnataka">
              Karnataka
            </option>

            <option value="Delhi">
              Delhi
            </option>

            <option value="Tamil Nadu">
              Tamil Nadu
            </option>
          </select>

          {/* District */}
          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={(e) =>
              setDistrict(e.target.value)
            }
            disabled={loading}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600 disabled:bg-slate-100"
          />

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{" "}

          <Link
            href="/auth"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}