
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// import StudentProfileForm from "@/components/StudentProfileForm";
// import ProtectedRoute from "@/components/ProtectedRoute";

// export default function ProfilePage() {
//   const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (isLoggedIn !== "true") {
//       router.replace("/auth");
//     }
//   }, [router]);

//   return (
//     <ProtectedRoute>
//       <main className="min-h-screen bg-slate-50 px-6 py-16 transition-colors duration-300 dark:bg-slate-950">
//         <div className="mx-auto max-w-7xl">
//           <StudentProfileForm />
//         </div>
//       </main>
//     </ProtectedRoute>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import StudentProfileForm from "@/components/StudentProfileForm";
import ProtectedRoute from "@/components/ProtectedRoute";
import { createClient } from "@/lib/supabase/client";

export default function ProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        // Get the currently logged-in Supabase user
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error("Profile Auth Error:", error);
          router.replace("/auth");
          return;
        }

        // If there is no authenticated user,
        // redirect to login page
        if (!user) {
          router.replace("/auth");
          return;
        }

        // User is authenticated
        setLoading(false);
      } catch (error) {
        console.error("Profile Authentication Check Error:", error);
        router.replace("/auth");
      }
    };

    checkUser();
  }, [router, supabase]);

  // Prevent the profile page from rendering
  // while checking the Supabase session
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 transition-colors duration-300 dark:bg-slate-950">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Loading your profile...
          </p>
        </div>
      </main>
    );
  }

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