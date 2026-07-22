// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Stats from "@/components/Stats";
// import Features from "@/components/Features";
// import HowItWorks from "@/components/HowItWorks";
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-slate-50">

      
//       <Navbar />
      
//       <Hero />

//       <Stats />

//       <Features />

//       <HowItWorks />
//     </main>
//   );
// }
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />
    </main>
  );
}