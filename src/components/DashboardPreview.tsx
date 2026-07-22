
// export default function DashboardPreview() {
//   return (
//     <div className="relative">

//       {/* Blue Glow */}
//       <div className="absolute -inset-5 rounded-3xl bg-blue-400/20 blur-3xl"></div>

//       {/* Dashboard */}
//       <div className="relative rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-2xl p-8">

//         <div className="flex items-center justify-between mb-6">

//           <h3 className="text-2xl font-bold">
//             AI Dashboard
//           </h3>

//           <span className="font-semibold text-green-600">
//             ● Online
//           </span>

//         </div>

//         <div className="space-y-5">

//           <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 p-5">

//             <p className="text-gray-500">
//               AI Match Score
//             </p>

//             <h2 className="mt-2 text-5xl font-bold text-blue-600">
//               98%
//             </h2>

//           </div>

//           <div className="rounded-xl border p-5 hover:shadow-md transition">

//             <h4 className="font-semibold">
//               Recommended Scholarships
//             </h4>

//             <p className="text-gray-500">
//               42 Available
//             </p>

//           </div>

//           <div className="rounded-xl border p-5 hover:shadow-md transition">

//             <h4 className="font-semibold">
//               Government Schemes
//             </h4>

//             <p className="text-gray-500">
//               18 Eligible
//             </p>

//           </div>

//           <div className="rounded-xl border p-5 hover:shadow-md transition">

//             <h4 className="font-semibold">
//               Internship Matches
//             </h4>

//             <p className="text-gray-500">
//               15 New Opportunities
//             </p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }
export default function DashboardPreview() {
  return (
    <div className="relative">

      {/* Blue Glow */}
      <div
        className="
          absolute -inset-5
          rounded-3xl
          bg-blue-400/20
          blur-3xl
          dark:bg-blue-600/20
        "
      />

      {/* Dashboard */}
      <div
        className="
          relative
          rounded-3xl
          border border-slate-200/70
          bg-white/80
          p-8
          shadow-2xl
          backdrop-blur-xl
          transition-colors duration-300

          dark:border-slate-700/70
          dark:bg-slate-900/80
        "
      >

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
              transition-colors duration-300

              dark:text-white
            "
          >
            AI Dashboard
          </h3>

          <span
            className="
              font-semibold
              text-green-600
              dark:text-green-400
            "
          >
            ● Online
          </span>

        </div>

        {/* Dashboard Content */}
        <div className="space-y-5">

          {/* AI Match Score */}
          <div
            className="
              rounded-2xl
              border border-blue-100
              bg-gradient-to-r
              from-blue-50
              to-indigo-100
              p-5
              transition-all duration-300

              dark:border-blue-900/50
              dark:from-blue-950/60
              dark:to-indigo-950/60
            "
          >

            <p
              className="
                text-slate-500
                dark:text-slate-400
              "
            >
              AI Match Score
            </p>

            <h2
              className="
                mt-2
                text-5xl
                font-bold
                text-blue-600
                dark:text-blue-400
              "
            >
              98%
            </h2>

          </div>

          {/* Recommended Scholarships */}
          <div
            className="
              rounded-xl
              border border-slate-200
              bg-white
              p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md

              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:border-slate-600
            "
          >

            <h4
              className="
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Recommended Scholarships
            </h4>

            <p
              className="
                text-slate-500
                dark:text-slate-400
              "
            >
              42 Available
            </p>

          </div>

          {/* Government Schemes */}
          <div
            className="
              rounded-xl
              border border-slate-200
              bg-white
              p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md

              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:border-slate-600
            "
          >

            <h4
              className="
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Government Schemes
            </h4>

            <p
              className="
                text-slate-500
                dark:text-slate-400
              "
            >
              18 Eligible
            </p>

          </div>

          {/* Internship Matches */}
          <div
            className="
              rounded-xl
              border border-slate-200
              bg-white
              p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md

              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:border-slate-600
            "
          >

            <h4
              className="
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Internship Matches
            </h4>

            <p
              className="
                text-slate-500
                dark:text-slate-400
              "
            >
              15 New Opportunities
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}