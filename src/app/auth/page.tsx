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
//     <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6">
//       <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

//         <div className="text-center">

//           <h1 className="text-4xl font-bold text-slate-900">
//             Welcome to AI LifeLens
//           </h1>

//           <p className="mt-3 text-slate-600">
//             Sign in to continue your personalized AI opportunity journey.
//           </p>

//         </div>

//         {/* Social Buttons */}

//         <div className="mt-8 space-y-4">

//           <button
//             type="button"
//             className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-50"
//           >
//             <GoogleIcon />
//             Continue with Google
//           </button>

//           <button
//             type="button"
//             className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-50"
//           >
//             <GitHubIcon />
//             Continue with GitHub
//           </button>

//         </div>

//         <div className="my-8 flex items-center">
//           <div className="h-px flex-1 bg-slate-200" />
//           <span className="px-4 text-sm text-slate-500">
//             OR
//           </span>
//           <div className="h-px flex-1 bg-slate-200" />
//         </div>

//         {/* Login Form */}

//         <div className="space-y-4">

//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
//           />

//           <button
//             onClick={handleLogin}
//             className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
//           >
//             Login
//             <ArrowRight size={20} />
//           </button>

//         </div>

//         <p className="mt-8 text-center text-sm text-slate-500">
//           Don't have an account?{" "}
//           <Link
//             href="/signup"
//             className="font-semibold text-blue-600 hover:underline"
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

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email !== email.trim() ||
      user.password !== password.trim()
    ) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    const profile = localStorage.getItem("studentProfile");

    if (profile) {
      router.push("/dashboard");
    } else {
      router.push("/profile");
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
            Sign in to continue your personalized AI opportunity journey.
          </p>

        </div>

        {/* Social Buttons */}

        <div className="mt-8 space-y-4">

          <button
            type="button"
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
              transition-colors
              duration-300

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
              transition-colors
              duration-300

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
            "
          >
            Login
            <ArrowRight size={20} />
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