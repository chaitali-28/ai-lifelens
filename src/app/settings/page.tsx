"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Trash2,
  LogOut,
  ChevronRight,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClearData = () => {
    const confirmed = window.confirm(
      "This will permanently remove your profile, bookmarks, applications and notifications. Continue?"
    );

    if (!confirmed) return;

    localStorage.removeItem("studentProfile");
    localStorage.removeItem("bookmarks");
    localStorage.removeItem("appliedOpportunities");
    localStorage.removeItem("aiLifeLensActivities");

    window.dispatchEvent(new Event("bookmarkChanged"));
    window.dispatchEvent(new Event("applicationsChanged"));
    window.dispatchEvent(new Event("activityChanged"));

    alert("Local data cleared successfully.");

    router.refresh();
  };

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmed) return;

    localStorage.removeItem("isLoggedIn");

    router.push("/auth");
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <h1 className="text-5xl font-bold">
            Settings
          </h1>

          <p className="mt-3 text-blue-100">
            Manage your AI LifeLens account, preferences and privacy.
          </p>

        </div>

      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-6 py-10">

        {/* Profile */}

        <Link
          href="/profile"
          className="flex items-center justify-between rounded-3xl bg-white p-6 shadow transition hover:shadow-xl dark:bg-slate-900"
        >
          <div className="flex items-center gap-4">

            <User className="text-blue-600" size={28} />

            <div>

              <h2 className="text-xl font-bold dark:text-white">
                Profile
              </h2>

              <p className="text-slate-500">
                Update your profile information
              </p>

            </div>

          </div>

          <ChevronRight />

        </Link>

        {/* Notifications */}

        <div className="rounded-3xl bg-white p-6 shadow dark:bg-slate-900">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <Bell
                className="text-yellow-500"
                size={28}
              />

              <div>

                <h2 className="text-xl font-bold dark:text-white">
                  Notifications
                </h2>

                <p className="text-slate-500">
                  Scholarship, internship and deadline alerts
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setNotifications(!notifications)
              }
              className={`h-8 w-14 rounded-full transition ${
                notifications
                  ? "bg-green-500"
                  : "bg-slate-300"
              }`}
            >
              <div
                className={`h-6 w-6 rounded-full bg-white transition ${
                  notifications
                    ? "translate-x-7"
                    : "translate-x-1"
                }`}
              />
            </button>

          </div>

        </div>

        {/* Privacy */}

        <div className="rounded-3xl bg-white p-6 shadow dark:bg-slate-900">

          <div className="flex items-center gap-4">

            <Shield
              className="text-green-600"
              size={28}
            />

            <div>

              <h2 className="text-xl font-bold dark:text-white">
                Privacy & Security
              </h2>

              <p className="text-slate-500">
                Your information is securely stored.
              </p>

            </div>

          </div>

        </div>

        {/* Appearance */}

        <div className="rounded-3xl bg-white p-6 shadow dark:bg-slate-900">

          <div className="flex items-start gap-4">

            <Palette
              className="mt-1 text-purple-600"
              size={28}
            />

            <div className="flex-1">

              <h2 className="text-xl font-bold dark:text-white">
                Appearance
              </h2>

              <p className="mb-5 text-slate-500">
                Choose your preferred theme.
              </p>

              {mounted && (

                <div className="flex flex-wrap gap-3">

                  <button
                    onClick={() => setTheme("light")}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 transition ${
                      theme === "light"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-white"
                    }`}
                  >
                    <Sun size={18} />
                    Light
                  </button>

                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 transition ${
                      theme === "dark"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-white"
                    }`}
                  >
                    <Moon size={18} />
                    Dark
                  </button>

                  <button
                    onClick={() => setTheme("system")}
                    className={`flex items-center gap-2 rounded-xl px-5 py-3 transition ${
                      theme === "system"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-white"
                    }`}
                  >
                    <Monitor size={18} />
                    System
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

        {/* Language */}

        <div className="rounded-3xl bg-white p-6 shadow dark:bg-slate-900">

          <div className="flex items-center gap-4">

            <Globe
              className="text-cyan-600"
              size={28}
            />

            <div>

              <h2 className="text-xl font-bold dark:text-white">
                Language
              </h2>

              <p className="text-slate-500">
                English
              </p>

            </div>

          </div>

        </div>

        {/* Clear Data */}

        <button
          onClick={handleClearData}
          className="flex w-full items-center justify-between rounded-3xl bg-white p-6 shadow transition hover:shadow-xl dark:bg-slate-900"
        >

          <div className="flex items-center gap-4">

            <Trash2
              className="text-red-500"
              size={28}
            />

            <div className="text-left">

              <h2 className="text-xl font-bold dark:text-white">
                Clear Local Data
              </h2>

              <p className="text-slate-500">
                Remove bookmarks, profile, applications and notifications
              </p>

            </div>

          </div>

          <ChevronRight />

        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-between rounded-3xl bg-red-500 p-6 text-white transition hover:bg-red-600"
        >

          <div className="flex items-center gap-4">

            <LogOut size={28} />

            <div className="text-left">

              <h2 className="text-xl font-bold">
                Logout
              </h2>

              <p className="text-red-100">
                Sign out of your AI LifeLens account
              </p>

            </div>

          </div>

          <ChevronRight />

        </button>

      </div>

    </main>
  );
}