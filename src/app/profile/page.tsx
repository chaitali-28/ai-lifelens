
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import StudentProfileForm from "@/components/StudentProfileForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/auth");
    }
  }, [router]);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50 px-6 py-16 transition-colors duration-300 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <StudentProfileForm />
        </div>
      </main>
    </ProtectedRoute>
  );
}