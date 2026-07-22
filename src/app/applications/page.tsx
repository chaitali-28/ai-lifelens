// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";

// import {
//   Search,
//   FileText,
//   Building2,
//   Calendar,
//   ArrowLeft,
//   ExternalLink,
//   Trash2,
//   CheckCircle,
// } from "lucide-react";

// import {
//   AppliedOpportunity,
//   getApplications,
//   removeApplication,
// } from "@/lib/applications";
// import ProtectedRoute from "@/components/ProtectedRoute";

// export default function ApplicationsPage() {
//   const [applications, setApplications] = useState<
//     AppliedOpportunity[]
//   >([]);

//   const [search, setSearch] = useState("");
//   const [deleteId, setDeleteId] =
//     useState<number | null>(null);

//   useEffect(() => {
//     const update = () => {
//       setApplications(getApplications());
//     };

//     update();

//     window.addEventListener(
//       "applicationsChanged",
//       update
//     );

//     return () => {
//       window.removeEventListener(
//         "applicationsChanged",
//         update
//       );
//     };
//   }, []);

//   const filteredApplications = useMemo(() => {
//     return applications.filter((item) => {
//       const keyword = search.toLowerCase();

//       return (
//         item.title.toLowerCase().includes(keyword) ||
//         item.provider
//           .toLowerCase()
//           .includes(keyword)
//       );
//     });
//   }, [applications, search]);

//   return (
//       <ProtectedRoute>
//     <main className="min-h-screen bg-slate-50">

//       {/* Hero */}

//       <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl">

//         <div className="mx-auto max-w-7xl px-6 py-10">

//           <Link
//             href="/dashboard"
//             className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 transition hover:bg-white/25"
//           >
//             <ArrowLeft size={18} />
//             Back to Dashboard
//           </Link>

//           <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

//             <div>

//               <h1 className="text-5xl font-bold">
//                 My Applications
//               </h1>

//               <p className="mt-3 max-w-2xl text-blue-100">
//                 Track every scholarship, internship,
//                 fellowship and opportunity you have
//                 applied for.
//               </p>

//             </div>

//             <div className="rounded-3xl bg-white/15 p-8 backdrop-blur">

//               <p className="text-blue-100">
//                 Total Applications
//               </p>

//               <h2 className="mt-2 text-5xl font-bold">
//                 {applications.length}
//               </h2>

//             </div>

//           </div>

//         </div>

//       </section>

//       <div className="mx-auto max-w-7xl px-6 py-10">

//         {/* Statistics */}

//         <div className="mb-10 grid gap-6 md:grid-cols-3">

//           <div className="rounded-3xl bg-white p-6 shadow">

//             <p className="text-slate-500">
//               Total Applied
//             </p>

//             <h2 className="mt-2 text-4xl font-bold text-blue-600">
//               {applications.length}
//             </h2>

//           </div>

//           <div className="rounded-3xl bg-white p-6 shadow">

//             <p className="text-slate-500">
//               Applied This Month
//             </p>

//             <h2 className="mt-2 text-4xl font-bold text-green-600">
//               {
//                 applications.filter(
//                   (item) =>
//                     new Date(
//                       item.appliedAt
//                     ).getMonth() ===
//                     new Date().getMonth()
//                 ).length
//               }
//             </h2>

//           </div>

//           <div className="rounded-3xl bg-white p-6 shadow">

//             <p className="text-slate-500">
//               Success Rate
//             </p>

//             <h2 className="mt-2 text-4xl font-bold text-purple-600">
//               96%
//             </h2>

//           </div>

//         </div>

//         {/* Search */}

//         <div className="relative mb-10">

//           <Search
//             className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//             size={22}
//           />

//           <input
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             placeholder="Search your applications..."
//             className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-blue-600"
//           />

//         </div>

//         {filteredApplications.length === 0 ? (

//           <div className="rounded-3xl bg-white p-20 text-center shadow">

//             <FileText
//               size={70}
//               className="mx-auto text-blue-600"
//             />

//             <h2 className="mt-6 text-3xl font-bold">
//               No Applications Yet
//             </h2>

//             <p className="mt-4 text-slate-500">
//               Start exploring opportunities and
//               apply to scholarships, internships,
//               hackathons and fellowships.
//             </p>

//             <Link
//               href="/explore"
//               className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
//             >
//               Explore Opportunities
//             </Link>

//           </div>

//         ) : (

//           <div className="grid gap-6">

//             {filteredApplications.map((item) => (

//               <div
//                 key={item.id}
//                 className="rounded-3xl bg-white p-8 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >

//                 <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

//                   <div>

//                     <h2 className="text-2xl font-bold text-slate-900">
//                       {item.title}
//                     </h2>

//                     <div className="mt-4 flex flex-wrap gap-6 text-slate-600">

//                       <div className="flex items-center gap-2">

//                         <Building2
//                           size={18}
//                           className="text-blue-600"
//                         />

//                         {item.provider}

//                       </div>

//                       <div className="flex items-center gap-2">

//                         <Calendar
//                           size={18}
//                           className="text-green-600"
//                         />

//                         Applied on{" "}
//                         {new Date(
//                           item.appliedAt
//                         ).toLocaleDateString()}

//                       </div>

//                     </div>

//                   </div>

//                   <div className="flex flex-col items-end gap-3">

//                     <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

//                       <CheckCircle
//                         size={15}
//                         className="mr-2 inline"
//                       />

//                       Applied

//                     </span>

//                     <Link
//                       href={`/opportunity/${item.id}`}
//                       className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
//                     >
//                       Continue

//                       <ExternalLink size={18} />

//                     </Link>

//                     <button
//                       onClick={() =>
//                         setDeleteId(item.id)
//                       }
//                       className="flex items-center gap-2 rounded-xl border border-red-500 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50"
//                     >
//                       <Trash2 size={18} />

//                       Remove

//                     </button>

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

//         )}

//         {deleteId !== null && (

//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

//             <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

//               <h2 className="text-2xl font-bold">
//                 Remove Application?
//               </h2>

//               <p className="mt-3 text-slate-600">
//                 This application will be removed
//                 from your AI LifeLens account.
//               </p>

//               <div className="mt-8 flex justify-end gap-4">

//                 <button
//                   onClick={() =>
//                     setDeleteId(null)
//                   }
//                   className="rounded-xl border px-5 py-3"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={() => {
//                     removeApplication(deleteId);

//                     setApplications(
//                       getApplications()
//                     );

//                     setDeleteId(null);
//                   }}
//                   className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
//                 >
//                   Remove
//                 </button>

//               </div>

//             </div>

//           </div>

//         )}

//       </div>

//     </main>
//     </ProtectedRoute>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  Search,
  FileText,
  Building2,
  Calendar,
  ArrowLeft,
  ExternalLink,
  Trash2,
  CheckCircle,
} from "lucide-react";

import {
  AppliedOpportunity,
  getApplications,
  removeApplication,
} from "@/lib/applications";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<
    AppliedOpportunity[]
  >([]);

  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] =
    useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setApplications(getApplications());
    };

    update();

    window.addEventListener(
      "applicationsChanged",
      update
    );

    return () => {
      window.removeEventListener(
        "applicationsChanged",
        update
      );
    };
  }, []);

  const filteredApplications = useMemo(() => {
    return applications.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.title.toLowerCase().includes(keyword) ||
        item.provider.toLowerCase().includes(keyword)
      );
    });
  }, [applications, search]);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl">

          <div className="mx-auto max-w-7xl px-6 py-10">

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 transition hover:bg-white/25"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </Link>

            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <h1 className="text-5xl font-bold">
                  My Applications
                </h1>

                <p className="mt-3 max-w-2xl text-blue-100">
                  Track every scholarship, internship,
                  fellowship and opportunity you have
                  applied for.
                </p>
              </div>

              <div className="rounded-3xl bg-white/15 p-8 backdrop-blur">

                <p className="text-blue-100">
                  Total Applications
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                  {applications.length}
                </h2>

              </div>

            </div>

          </div>

        </section>

        <div className="mx-auto max-w-7xl px-6 py-10">

          {/* Statistics */}
          <div className="mb-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

              <p className="text-slate-500 dark:text-slate-400">
                Total Applied
              </p>

              <h2 className="mt-2 text-4xl font-bold text-blue-600">
                {applications.length}
              </h2>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

              <p className="text-slate-500 dark:text-slate-400">
                Applied This Month
              </p>

              <h2 className="mt-2 text-4xl font-bold text-green-600">
                {
                  applications.filter(
                    (item) =>
                      new Date(
                        item.appliedAt
                      ).getMonth() ===
                      new Date().getMonth()
                  ).length
                }
              </h2>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

              <p className="text-slate-500 dark:text-slate-400">
                Success Rate
              </p>

              <h2 className="mt-2 text-4xl font-bold text-purple-600">
                96%
              </h2>

            </div>

          </div>

          {/* Search */}
          <div className="relative mb-10">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              size={22}
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search your applications..."
              className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-14 pr-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500"
            />

          </div>

          {/* Empty State */}
          {filteredApplications.length === 0 ? (

            <div className="rounded-3xl border border-slate-200 bg-white p-20 text-center shadow transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

              <FileText
                size={70}
                className="mx-auto text-blue-600"
              />

              <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
                No Applications Yet
              </h2>

              <p className="mt-4 text-slate-500 dark:text-slate-400">
                Start exploring opportunities and
                apply to scholarships, internships,
                hackathons and fellowships.
              </p>

              <Link
                href="/explore"
                className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Opportunities
              </Link>

            </div>

          ) : (

            <div className="grid gap-6">

              {filteredApplications.map((item) => (

                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h2>

                      <div className="mt-4 flex flex-wrap gap-6 text-slate-600 dark:text-slate-400">

                        <div className="flex items-center gap-2">

                          <Building2
                            size={18}
                            className="text-blue-600"
                          />

                          {item.provider}

                        </div>

                        <div className="flex items-center gap-2">

                          <Calendar
                            size={18}
                            className="text-green-600"
                          />

                          Applied on{" "}
                          {new Date(
                            item.appliedAt
                          ).toLocaleDateString()}

                        </div>

                      </div>

                    </div>

                    <div className="flex flex-col items-end gap-3">

                      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-500/15 dark:text-green-400">

                        <CheckCircle
                          size={15}
                          className="mr-2 inline"
                        />

                        Applied

                      </span>

                      <Link
                        href={`/opportunity/${item.id}`}
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Continue

                        <ExternalLink size={18} />
                      </Link>

                      <button
                        onClick={() =>
                          setDeleteId(item.id)
                        }
                        className="flex items-center gap-2 rounded-xl border border-red-500 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-500/70 dark:text-red-400 dark:hover:bg-red-500/10"
                      >
                        <Trash2 size={18} />

                        Remove

                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

          {/* Delete Confirmation Modal */}
          {deleteId !== null && (

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm">

              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">

                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Remove Application?
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  This application will be removed
                  from your AI LifeLens account.
                </p>

                <div className="mt-8 flex justify-end gap-4">

                  <button
                    onClick={() =>
                      setDeleteId(null)
                    }
                    className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      removeApplication(deleteId);

                      setApplications(
                        getApplications()
                      );

                      setDeleteId(null);
                    }}
                    className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>

      </main>
    </ProtectedRoute>
  );
}