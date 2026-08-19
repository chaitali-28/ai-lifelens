
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { ArrowRight } from "lucide-react";

// import GoogleIcon from "@/components/icons/GoogleIcon";
// import GitHubIcon from "@/components/icons/GitHubIcon";

// export default function AuthPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (!email.trim() || !password.trim()) {
//       alert("Please enter your email and password.");
//       return;
//     }

//     const savedUser = localStorage.getItem("user");

//     if (!savedUser) {
//       alert("No account found. Please create an account first.");
//       return;
//     }

//     const user = JSON.parse(savedUser);

//     if (
//       user.email !== email.trim() ||
//       user.password !== password.trim()
//     ) {
//       alert("Invalid email or password.");
//       return;
//     }

//     localStorage.setItem("isLoggedIn", "true");

//     const profile = localStorage.getItem("studentProfile");

//     if (profile) {
//       router.push("/dashboard");
//     } else {
//       router.push("/profile");
//     }
//   };

//   return (
//     <main
//       className="
//         flex
//         min-h-screen
//         items-center
//         justify-center
//         bg-gradient-to-br
//         from-blue-50
//         via-white
//         to-indigo-100
//         px-6
//         py-12
//         transition-colors
//         duration-300

//         dark:from-slate-950
//         dark:via-slate-900
//         dark:to-indigo-950
//       "
//     >
//       <div
//         className="
//           w-full
//           max-w-md
//           rounded-3xl
//           border
//           border-slate-200
//           bg-white
//           p-10
//           shadow-2xl
//           transition-colors
//           duration-300

//           dark:border-slate-700
//           dark:bg-slate-900
//         "
//       >
//         {/* Header */}

//         <div className="text-center">

//           <h1
//             className="
//               text-4xl
//               font-bold
//               text-slate-900
//               transition-colors
//               duration-300

//               dark:text-white
//             "
//           >
//             Welcome to AI LifeLens
//           </h1>

//           <p
//             className="
//               mt-3
//               text-slate-600
//               transition-colors
//               duration-300

//               dark:text-slate-300
//             "
//           >
//             Sign in to continue your personalized AI opportunity journey.
//           </p>

//         </div>

//         {/* Social Buttons */}

//         <div className="mt-8 space-y-4">

//           <button
//             type="button"
//             className="
//               flex
//               w-full
//               items-center
//               justify-center
//               gap-3
//               rounded-2xl
//               border
//               border-slate-300
//               bg-white
//               py-4
//               font-semibold
//               text-slate-700
//               transition-all
//               duration-300
//               hover:bg-slate-50
//               hover:shadow-md

//               dark:border-slate-600
//               dark:bg-slate-800
//               dark:text-slate-100
//               dark:hover:bg-slate-700
//             "
//           >
//             <GoogleIcon />
//             Continue with Google
//           </button>

//           <button
//             type="button"
//             className="
//               flex
//               w-full
//               items-center
//               justify-center
//               gap-3
//               rounded-2xl
//               border
//               border-slate-300
//               bg-white
//               py-4
//               font-semibold
//               text-slate-700
//               transition-all
//               duration-300
//               hover:bg-slate-50
//               hover:shadow-md

//               dark:border-slate-600
//               dark:bg-slate-800
//               dark:text-slate-100
//               dark:hover:bg-slate-700
//             "
//           >
//             <GitHubIcon />
//             Continue with GitHub
//           </button>

//         </div>

//         {/* Divider */}

//         <div className="my-8 flex items-center">

//           <div
//             className="
//               h-px
//               flex-1
//               bg-slate-200
//               transition-colors
//               duration-300

//               dark:bg-slate-700
//             "
//           />

//           <span
//             className="
//               px-4
//               text-sm
//               text-slate-500

//               dark:text-slate-400
//             "
//           >
//             OR
//           </span>

//           <div
//             className="
//               h-px
//               flex-1
//               bg-slate-200
//               transition-colors
//               duration-300

//               dark:bg-slate-700
//             "
//           />

//         </div>

//         {/* Login Form */}

//         <div className="space-y-4">

//           {/* Email */}

//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="
//               w-full
//               rounded-2xl
//               border
//               border-slate-300
//               bg-white
//               px-5
//               py-4
//               text-slate-900
//               outline-none
//               transition-all
//               duration-300
//               placeholder:text-slate-400
//               focus:border-blue-600
//               focus:ring-2
//               focus:ring-blue-100

//               dark:border-slate-600
//               dark:bg-slate-800
//               dark:text-white
//               dark:placeholder:text-slate-500
//               dark:focus:border-blue-500
//               dark:focus:ring-blue-900
//             "
//           />

//           {/* Password */}

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="
//               w-full
//               rounded-2xl
//               border
//               border-slate-300
//               bg-white
//               px-5
//               py-4
//               text-slate-900
//               outline-none
//               transition-all
//               duration-300
//               placeholder:text-slate-400
//               focus:border-blue-600
//               focus:ring-2
//               focus:ring-blue-100

//               dark:border-slate-600
//               dark:bg-slate-800
//               dark:text-white
//               dark:placeholder:text-slate-500
//               dark:focus:border-blue-500
//               dark:focus:ring-blue-900
//             "
//           />

//           {/* Login Button */}

//           <button
//             onClick={handleLogin}
//             className="
//               flex
//               w-full
//               items-center
//               justify-center
//               gap-2
//               rounded-2xl
//               bg-blue-600
//               py-4
//               font-semibold
//               text-white
//               transition-all
//               duration-300
//               hover:bg-blue-700
//               hover:shadow-xl
//               hover:-translate-y-0.5
//             "
//           >
//             Login
//             <ArrowRight size={20} />
//           </button>

//         </div>

//         {/* Signup Link */}

//         <p
//           className="
//             mt-8
//             text-center
//             text-sm
//             text-slate-500

//             dark:text-slate-400
//           "
//         >
//           Don't have an account?{" "}

//           <Link
//             href="/signup"
//             className="
//               font-semibold
//               text-blue-600
//               transition-colors
//               hover:text-blue-700
//               hover:underline

//               dark:text-blue-400
//               dark:hover:text-blue-300
//             "
//           >
//             Create Account
//           </Link>
//         </p>

//       </div>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import GoogleIcon from "@/components/icons/GoogleIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";

import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    // Clear previous messages
    setError("");
    setSuccess("");

    // -----------------------------------------
    // 1. Validate fields
    // -----------------------------------------
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      // -----------------------------------------
      // 2. Login using Supabase Authentication
      // -----------------------------------------
      const {
        data: authData,
        error: authError,
      } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      // -----------------------------------------
      // 3. Check authentication error
      // -----------------------------------------
      if (authError) {
        console.error("Supabase Login Error:", authError);

        if (
          authError.message.toLowerCase().includes("email not confirmed")
        ) {
          throw new Error(
            "Please verify your email before logging in."
          );
        }

        throw new Error(
          "Invalid email or password. Please check your credentials and try again."
        );
      }

      // -----------------------------------------
      // 4. Make sure user exists
      // -----------------------------------------
      if (!authData.user) {
        throw new Error(
          "Login failed. User account could not be found."
        );
      }

      console.log(
        "Successfully logged in user:",
        authData.user.id
      );

      // -----------------------------------------
      // 5. Check user's profile
      // -----------------------------------------
      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("id, full_name, mobile, state, district")
        .eq("id", authData.user.id)
        .maybeSingle();

      if (profileError) {
        console.error(
          "Profile Fetch Error:",
          profileError
        );

        // We don't stop login here.
        // Authentication succeeded.
      }

      // -----------------------------------------
      // 6. Show success message
      // -----------------------------------------
      setSuccess("Login successful! Redirecting...");

      // -----------------------------------------
      // 7. Redirect user
      // -----------------------------------------
      setTimeout(() => {
        if (profile) {
          router.push("/dashboard");
        } else {
          router.push("/profile");
        }

        router.refresh();
      }, 800);

    } catch (error: unknown) {
      console.error("FULL LOGIN ERROR:", error);

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
            "Login failed. Please try again."
        );
      } else {
        setError(
          "Login failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-100
        px-6
        py-12
        transition-colors
        duration-300
        dark:from-slate-950
        dark:via-slate-900
        dark:to-indigo-950
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-10
          shadow-2xl
          transition-colors
          duration-300
          dark:border-slate-700
          dark:bg-slate-900
        "
      >

        {/* Header */}

        <div className="text-center">

          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
            "
          >
            Welcome to AI LifeLens
          </h1>

          <p
            className="
              mt-3
              text-slate-600
              transition-colors
              duration-300
              dark:text-slate-300
            "
          >
            Sign in to continue your personalized AI
            opportunity journey.
          </p>

        </div>


        {/* Error Message */}

        {error && (
          <div
            className="
              mt-6
              rounded-xl
              border
              border-red-200
              bg-red-50
              p-4
              text-sm
              text-red-700
              dark:border-red-900
              dark:bg-red-950
              dark:text-red-300
            "
          >
            {error}
          </div>
        )}


        {/* Success Message */}

        {success && (
          <div
            className="
              mt-6
              rounded-xl
              border
              border-green-200
              bg-green-50
              p-4
              text-sm
              text-green-700
              dark:border-green-900
              dark:bg-green-950
              dark:text-green-300
            "
          >
            {success}
          </div>
        )}


        {/* Social Buttons */}

        <div className="mt-8 space-y-4">

          <button
            type="button"
            disabled={loading}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-slate-300
              bg-white
              py-4
              font-semibold
              text-slate-700
              transition-all
              duration-300
              hover:bg-slate-50
              hover:shadow-md
              disabled:cursor-not-allowed
              disabled:opacity-50
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-slate-100
              dark:hover:bg-slate-700
            "
          >
            <GoogleIcon />
            Continue with Google
          </button>


          <button
            type="button"
            disabled={loading}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-slate-300
              bg-white
              py-4
              font-semibold
              text-slate-700
              transition-all
              duration-300
              hover:bg-slate-50
              hover:shadow-md
              disabled:cursor-not-allowed
              disabled:opacity-50
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-slate-100
              dark:hover:bg-slate-700
            "
          >
            <GitHubIcon />
            Continue with GitHub
          </button>

        </div>


        {/* Divider */}

        <div className="my-8 flex items-center">

          <div
            className="
              h-px
              flex-1
              bg-slate-200
              dark:bg-slate-700
            "
          />

          <span
            className="
              px-4
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            OR
          </span>

          <div
            className="
              h-px
              flex-1
              bg-slate-200
              dark:bg-slate-700
            "
          />

        </div>


        {/* Login Form */}

        <div className="space-y-4">

          {/* Email */}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            disabled={loading}
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-5
              py-4
              text-slate-900
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100
              disabled:bg-slate-100
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-500
              dark:focus:border-blue-500
              dark:focus:ring-blue-900
            "
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
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-5
              py-4
              text-slate-900
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-100
              disabled:bg-slate-100
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-500
              dark:focus:border-blue-500
              dark:focus:ring-blue-900
            "
          />


          {/* Login Button */}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-blue-600
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-700
              hover:shadow-xl
              hover:-translate-y-0.5
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? "Signing in..." : "Login"}

            {!loading && (
              <ArrowRight size={20} />
            )}
          </button>

        </div>


        {/* Signup Link */}

        <p
          className="
            mt-8
            text-center
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          Don't have an account?{" "}

          <Link
            href="/signup"
            className="
              font-semibold
              text-blue-600
              transition-colors
              hover:text-blue-700
              hover:underline
              dark:text-blue-400
              dark:hover:text-blue-300
            "
          >
            Create Account
          </Link>

        </p>

      </div>
    </main>
  );
}