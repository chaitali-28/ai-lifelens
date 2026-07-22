
// import Link from "next/link";
// import {
//   GraduationCap,
//   Briefcase,
//   Award,
//   ShieldCheck,
//   Mail,
//   Sparkles,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="mt-24 border-t border-slate-200 bg-slate-50">
//       <div className="mx-auto max-w-7xl px-6 py-16">

//         {/* Top */}
//         <div className="grid gap-12 lg:grid-cols-4">

//           {/* Brand */}
//           <div className="lg:col-span-2">

//             <div className="flex items-center gap-3">

//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
//                 <Sparkles size={24} />
//               </div>

//               <div>
//                 <h2 className="text-3xl font-bold text-slate-900">
//                   AI LifeLens
//                 </h2>

//                 <p className="text-slate-500">
//                   Your AI Opportunity Assistant
//                 </p>
//               </div>

//             </div>

//             <p className="mt-6 max-w-xl leading-8 text-slate-600">
//               AI LifeLens helps students discover verified
//               scholarships, internships, hackathons,
//               fellowships, grants and government schemes
//               using personalized AI recommendations.
//             </p>

//             <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
//               <ShieldCheck size={18} />
//               Verified Opportunities
//             </div>

//           </div>

//           {/* Quick Links */}
//           <div>

//             <h3 className="mb-5 text-lg font-semibold text-slate-900">
//               Quick Links
//             </h3>

//             <ul className="space-y-4 text-slate-600">

//               <li>
//                 <Link href="/dashboard" className="hover:text-blue-600">
//                   Dashboard
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/explore" className="hover:text-blue-600">
//                   Explore
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/profile" className="hover:text-blue-600">
//                   Student Profile
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/bookmarks" className="hover:text-blue-600">
//                   Saved Opportunities
//                 </Link>
//               </li>

//             </ul>

//           </div>

//           {/* Categories */}
//           <div>

//             <h3 className="mb-5 text-lg font-semibold text-slate-900">
//               Categories
//             </h3>

//             <ul className="space-y-4 text-slate-600">

//               <li className="flex items-center gap-2">
//                 <GraduationCap size={18} />
//                 Scholarships
//               </li>

//               <li className="flex items-center gap-2">
//                 <Briefcase size={18} />
//                 Internships
//               </li>

//               <li className="flex items-center gap-2">
//                 <Award size={18} />
//                 Fellowships
//               </li>

//               <li className="flex items-center gap-2">
//                 🏆 Hackathons
//               </li>

//             </ul>

//           </div>

//         </div>

//         {/* Middle Card */}
//         <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

//             <div>

//               <h3 className="text-2xl font-bold text-slate-900">
//                 Need Help?
//               </h3>

//               <p className="mt-2 text-slate-600">
//                 Contact our support team for any questions about
//                 opportunities or your student profile.
//               </p>

//             </div>

//             <div className="flex items-center gap-3 rounded-2xl bg-blue-50 px-6 py-4">

//               <Mail className="text-blue-600" size={20} />

//               <span className="font-medium text-slate-700">
//                 support@ailifelens.in
//               </span>

//             </div>

//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">

//           <p className="text-slate-500">
//             © {new Date().getFullYear()} AI LifeLens. All Rights Reserved.
//           </p>

//           <div className="flex items-center gap-6 text-slate-500">

//             <span>Version 1.0</span>

//             <span>•</span>

//             <span>Powered by AI</span>

//             <span>•</span>

//             <span>Made for Students ❤️</span>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Award,
  ShieldCheck,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50 text-slate-900 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                <Sparkles size={24} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  AI LifeLens
                </h2>

                <p className="text-slate-500 dark:text-slate-400">
                  Your AI Opportunity Assistant
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
              AI LifeLens helps students discover verified
              scholarships, internships, hackathons,
              fellowships, grants and government schemes
              using personalized AI recommendations.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              <ShieldCheck size={18} />
              Verified Opportunities
            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-600 dark:text-slate-400">

              <li>
                <Link
                  href="/dashboard"
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/explore"
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Explore
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Student Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/bookmarks"
                  className="transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Saved Opportunities
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              Categories
            </h3>

            <ul className="space-y-4 text-slate-600 dark:text-slate-400">

              <li className="flex items-center gap-2">
                <GraduationCap size={18} />
                Scholarships
              </li>

              <li className="flex items-center gap-2">
                <Briefcase size={18} />
                Internships
              </li>

              <li className="flex items-center gap-2">
                <Award size={18} />
                Fellowships
              </li>

              <li className="flex items-center gap-2">
                🏆 Hackathons
              </li>

            </ul>

          </div>

        </div>

        {/* Middle Card */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Need Help?
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Contact our support team for any questions about
                opportunities or your student profile.
              </p>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-blue-50 px-6 py-4 dark:bg-blue-950/40">

              <Mail
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />

              <span className="font-medium text-slate-700 dark:text-slate-300">
                support@ailifelens.in
              </span>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row">

          <p className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} AI LifeLens. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">

            <span>Version 1.0</span>

            <span>•</span>

            <span>Powered by AI</span>

            <span>•</span>

            <span>Made for Students ❤️</span>

          </div>

        </div>

      </div>
    </footer>
  );
}