
// "use client";

// import Button from "@/components/Button";
// import DashboardPreview from "@/components/DashboardPreview";

// import {
//   Bot,
//   Sparkles,
//   BrainCircuit,
// } from "lucide-react";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">

//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100" />

//       {/* Blue Glow */}
//       <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[160px]" />

//       {/* Floating Icons */}
//       <Bot
//         size={42}
//         className="absolute left-10 top-32 animate-pulse text-blue-300"
//       />

//       <Sparkles
//         size={36}
//         className="absolute right-16 top-28 animate-pulse text-indigo-300"
//       />

//       <BrainCircuit
//         size={44}
//         className="absolute bottom-24 right-44 animate-pulse text-cyan-300"
//       />

//       {/* Hero Container */}
//       <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//           }}
//         >

//           {/* Badge */}
//           <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md">

//             <Sparkles
//               size={18}
//               className="text-blue-600"
//             />

//             <span className="font-semibold text-blue-700">
//               India's AI-Powered Opportunity Platform
//             </span>

//           </div>

//           {/* Heading */}
//           <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl">

//             Discover Every

//             <br />

//             <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
//               Opportunity
//             </span>

//           </h1>

//           {/* Subtitle */}
//           <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
//             AI LifeLens intelligently recommends scholarships,
//             internships, government schemes, fellowships,
//             hackathons, grants and career opportunities
//             tailored to every student's profile.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-wrap gap-5">

//           <Button
//   text="Get Started"
//   href="/auth"
// />

//             <Button
//               text="Explore Opportunities"
//               href="/explore"
//               variant="secondary"
//             />

//           </div>

//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 0.9,
//             delay: 0.2,
//             ease: "easeOut",
//           }}
//         >
//           <DashboardPreview />
//         </motion.div>

//       </div>

//     </section>
//   );
// }
// // "use client"; import Button from "@/components/Button"; 
// // import DashboardPreview from "@/components/DashboardPreview"; import { Bot, Sparkles, BrainCircuit, } from "lucide-react"; import { motion } from "framer-motion"; export default function Hero() { return ( <section className="relative overflow-hidden"> {/* Background Gradient */} <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100" /> {/* Blue Glow */} <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[160px]" /> {/* Floating Icons */} <Bot size={42} className="absolute left-10 top-32 text-blue-300 animate-pulse" /> <Sparkles size={36} className="absolute right-16 top-28 text-indigo-300 animate-pulse" /> <BrainCircuit size={44} className="absolute bottom-24 right-44 text-cyan-300 animate-pulse" /> {/* Hero Container */} <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2"> {/* LEFT SIDE */} <motion.div initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", }} > {/* Badge */} <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md"> <Sparkles size={18} className="text-blue-600" /> <span className="font-semibold text-blue-700"> India's AI-Powered Opportunity Platform </span> </div> {/* Heading */} <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl"> Discover Every <br /> <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent"> Opportunity </span> </h1> {/* Subtitle */} <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600"> AI LifeLens intelligently recommends scholarships, internships, government schemes, fellowships, hackathons, grants, and career opportunities tailored to every student's profile. </p> {/* Buttons */} <div className="mt-10 flex flex-wrap gap-5"> <Button text="Get Started" /> <Button text="Explore Opportunities" variant="secondary" /> </div> </motion.div> {/* RIGHT SIDE */} <motion.div initial={{ opacity: 0, x: 70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: "easeOut", }} > <DashboardPreview /> </motion.div> </div> </section> ); } 
"use client";

import Button from "@/components/Button";
import DashboardPreview from "@/components/DashboardPreview";

import {
  Bot,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-slate-950">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[160px] dark:bg-blue-600/10" />

      {/* Floating Icons */}
      <Bot
        size={42}
        className="absolute left-10 top-32 animate-pulse text-blue-300 dark:text-blue-500/60"
      />

      <Sparkles
        size={36}
        className="absolute right-16 top-28 animate-pulse text-indigo-300 dark:text-indigo-500/60"
      />

      <BrainCircuit
        size={44}
        className="absolute bottom-24 right-44 animate-pulse text-cyan-300 dark:text-cyan-500/60"
      />

      {/* Hero Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md transition-colors duration-300 dark:border-blue-900/60 dark:bg-slate-900/80">

            <Sparkles
              size={18}
              className="text-blue-600 dark:text-blue-400"
            />

            <span className="font-semibold text-blue-700 dark:text-blue-300">
              India's AI-Powered Opportunity Platform
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight tracking-tight text-gray-900 transition-colors duration-300 dark:text-white lg:text-7xl">

            Discover Every

            <br />

            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Opportunity
            </span>

          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600 transition-colors duration-300 dark:text-slate-300">
            AI LifeLens intelligently recommends scholarships,
            internships, government schemes, fellowships,
            hackathons, grants and career opportunities
            tailored to every student's profile.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <Button
              text="Get Started"
              href="/auth"
            />

            <Button
              text="Explore Opportunities"
              href="/explore"
              variant="secondary"
            />

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <DashboardPreview />
        </motion.div>

      </div>

    </section>
  );
}