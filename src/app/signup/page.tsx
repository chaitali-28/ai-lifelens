"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const handleSignup = () => {
    if (
      !fullName ||
      !email ||
      !mobile ||
      !password ||
      !confirmPassword ||
      !state ||
      !district
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

   const user = {
  fullName,
  email,
  mobile,
  password,
  state,
  district,
};

    // Save account
    localStorage.setItem("user", JSON.stringify(user));

    // Login user
    localStorage.setItem("isLoggedIn", "true");

    // Clear previous student's profile
    localStorage.removeItem("studentProfile");

    // Go to profile page
    router.push("/profile");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-slate-900">
          Create Account
        </h1>

        <p className="mt-2 text-slate-600">
          Join AI LifeLens to discover personalized opportunities.
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          >
            <option value="">Select State</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Karnataka</option>
            <option>Delhi</option>
            <option>Tamil Nadu</option>
          </select>

          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
          />

          <button
            onClick={handleSignup}
            className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>

        </div>

      </div>
    </main>
  );
}