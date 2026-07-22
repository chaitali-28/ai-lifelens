
// "use client";

// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-10 py-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
//         AI LifeLens
//       </h1>

//       {/* Navigation */}
//       <div className="flex gap-8 font-medium text-slate-700 dark:text-slate-300">
//         <a
//           href="#"
//           className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
//         >
//           Home
//         </a>

//         <a
//           href="#"
//           className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
//         >
//           Features
//         </a>

//         <a
//           href="#"
//           className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
//         >
//           About
//         </a>

//         <a
//           href="#"
//           className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
//         >
//           Login
//         </a>
//       </div>
//     </nav>
//   );
// }
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/95 px-6 py-5 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          AI LifeLens
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 font-medium text-slate-700 dark:text-slate-300">
          {/* Home */}
          <Link
            href="/#home"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>

          {/* Features */}
          <Link
            href="/#features"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Features
          </Link>

          {/* About */}
          <Link
            href="/#about"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </Link>

          {/* Login */}
          <Link
            href="/auth"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Login
          </Link>

          
        </div>
      </div>
    </nav>
  );
}