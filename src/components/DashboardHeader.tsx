
"use client";

import Link from "next/link";

import {
  Sparkles,
  Compass,
  User,
  FileText,
  Settings,
} from "lucide-react";

import NotificationBell from "./NotificationBell";

type DashboardHeaderProps = {
  name?: string;
};

export default function DashboardHeader({
  name = "Student",
}: DashboardHeaderProps) {
  return (
    <section
      className="
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-purple-600
        p-8
        text-white
        shadow-xl
      "
    >
      {/* Top Navigation */}

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <h2 className="text-2xl font-bold tracking-wide">
          AI LifeLens
        </h2>

        <div className="flex flex-wrap items-center gap-3">

          <NotificationBell />

          {/* Explore */}

          <Link
            href="/explore"
            className="
              flex items-center gap-2
              rounded-xl
              bg-white
              px-5 py-3
              font-semibold
              text-blue-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              dark:bg-slate-800
              dark:text-white
              dark:hover:bg-slate-700
            "
          >
            <Compass size={20} />
            Explore
          </Link>

          {/* Applications */}

          <Link
            href="/applications"
            className="
              flex items-center gap-2
              rounded-xl
              bg-white
              px-5 py-3
              font-semibold
              text-blue-700
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              dark:bg-slate-800
              dark:text-white
              dark:hover:bg-slate-700
            "
          >
            <FileText size={20} />
            Applications
          </Link>

          {/* Profile */}

          <Link
            href="/profile"
            className="
              flex items-center gap-2
              rounded-xl
              bg-white/20
              px-5 py-3
              font-semibold
              transition-all
              duration-300
              hover:bg-white/30
              hover:-translate-y-1
              hover:shadow-xl
              dark:bg-slate-800/70
              dark:hover:bg-slate-700
            "
          >
            <User size={20} />
            Profile
          </Link>

          {/* Settings */}

          <Link
            href="/settings"
            className="
              flex items-center gap-2
              rounded-xl
              bg-white/20
              px-5 py-3
              font-semibold
              transition-all
              duration-300
              hover:bg-white/30
              hover:-translate-y-1
              hover:shadow-xl
              dark:bg-slate-800/70
              dark:hover:bg-slate-700
            "
          >
            <Settings size={20} />
            Settings
          </Link>

        </div>

      </div>

      {/* Hero */}

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-blue-100">
            Welcome back 👋
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {name}
          </h1>

          <p className="mt-3 max-w-2xl text-blue-100 leading-7">
            Your AI assistant has analyzed your profile and found
            personalized scholarships, internships, hackathons,
            fellowships and government schemes waiting for you.
          </p>

        </div>

        {/* AI Score */}

        <div
          className="
            rounded-2xl
            border
            border-white/20
            bg-white/10
            p-6
            shadow-lg
            backdrop-blur
            dark:border-slate-700
            dark:bg-slate-900/60
          "
        >

          <div className="flex items-center gap-2">

            <Sparkles
              size={24}
              className="text-yellow-300"
            />

            <span className="font-semibold">
              AI Opportunity Score
            </span>

          </div>

          <h2 className="mt-3 text-5xl font-bold">
            96%
          </h2>

          <p className="mt-2 text-blue-100">
            Excellent Profile Match
          </p>

        </div>

      </div>

    </section>
  );
}