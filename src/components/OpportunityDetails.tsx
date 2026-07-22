// "use client";

// import { useEffect, useState } from "react";

// import MatchScore from "./MatchScore";
// import DeadlineBadge from "./DeadlineBadge";

// type OpportunityDetailsProps = {
//   score: number;
//   daysLeft: number;
// };

// export default function OpportunityDetails({
//   score,
//   daysLeft,
// }: OpportunityDetailsProps) {
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     setLoggedIn(
//       localStorage.getItem("isLoggedIn") === "true"
//     );
//   }, []);

//   return (
//     <div className="mt-4 flex flex-wrap items-center gap-3">

//       {loggedIn ? (
//         <MatchScore score={score} />
//       ) : (
//         <div className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
//           🔒 Login to view AI Match Score
//         </div>
//       )}

//       <DeadlineBadge daysLeft={daysLeft} />

//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import MatchScore from "./MatchScore";
import DeadlineBadge from "./DeadlineBadge";

type OpportunityDetailsProps = {
  score: number;
  daysLeft: number;
};

export default function OpportunityDetails({
  score,
  daysLeft,
}: OpportunityDetailsProps) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(
      localStorage.getItem("isLoggedIn") === "true"
    );
  }, []);

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">

      {loggedIn ? (
        <MatchScore score={score} />
      ) : (
        <div
          className="
            rounded-full
            border border-amber-300
            bg-amber-50
            px-4 py-2
            text-sm font-medium
            text-amber-700

            dark:border-amber-700
            dark:bg-amber-950/40
            dark:text-amber-300
          "
        >
          🔒 Login to view AI Match Score
        </div>
      )}

      <DeadlineBadge daysLeft={daysLeft} />

    </div>
  );
}