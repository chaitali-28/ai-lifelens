
// "use client";

// import { useState } from "react";
// import {
//   Bot,
//   X,
//   Send,
// } from "lucide-react";

// import { defaultProfile } from "@/data/profile";
// import { getRecommendations } from "@/lib/recommendationEngine";
// import { getAIResponse } from "@/lib/aiMentor";

// export default function AIAssistant() {
//   const [open, setOpen] = useState(false);

//   const [message, setMessage] = useState("");

//   const [messages, setMessages] = useState<
//     {
//       sender: "user" | "ai";
//       text: string;
//     }[]
//   >([
//     {
//       sender: "ai",
//       text:
//         "👋 Hi! I'm AI LifeLens.\nAsk me about scholarships, internships, hackathons, fellowships or government schemes.",
//     },
//   ]);

//   const suggestions = [
//     "Scholarships",
//     "Internships",
//     "Hackathons",
//     "Government Schemes",
//   ];

// //   const sendMessage = (text?: string) => {
// //     const userText = (text ?? message).trim();

// //     if (!userText) return;

// //     const savedProfile =
// //       localStorage.getItem("studentProfile");

// //     const profile = savedProfile
// //       ? JSON.parse(savedProfile)
// //       : defaultProfile;

// //     const allRecommendations =
// //       getRecommendations(profile);

// //     const query = userText.toLowerCase();

// //     const recommendations =
// //       allRecommendations.filter((item) => {
// //         return (
// //           item.title
// //             .toLowerCase()
// //             .includes(query) ||
// //           item.provider
// //             .toLowerCase()
// //             .includes(query) ||
// //           item.category
// //             .toLowerCase()
// //             .includes(query) ||
// //           item.description
// //             .toLowerCase()
// //             .includes(query) ||
// //           item.eligibility
// //             .toLowerCase()
// //             .includes(query) ||
// //           item.reasons.some((reason: string) =>
// //             reason
// //               .toLowerCase()
// //               .includes(query)
// //           )
// //         );
// //       });

// //     let aiReply = "";

// //     if (recommendations.length === 0) {
// //       aiReply =
// //         "😔 I couldn't find an exact match.\n\n🎯 Here are your top personalized recommendations:\n\n" +
// //         allRecommendations
// //           .slice(0, 3)
// //           .map(
// //             (item) =>
// //               `• ${item.title}\n  ${item.provider}\n  AI Match: ${item.matchScore}%`
// //           )
// //           .join("\n\n");
// //     } else {
// //       aiReply =
// //         "🎯 Based on your profile, I recommend:\n\n" +
// //         recommendations
// //           .slice(0, 3)
// //           .map(
// //             (item) =>
// //               `• ${item.title}\n  ${item.provider}\n  AI Match: ${item.matchScore}%`
// //           )
// //           .join("\n\n");
// //     }

// //     setMessages((prev) => [
// //       ...prev,
// //       {
// //         sender: "user",
// //         text: userText,
// //       },
// //       {
// //         sender: "ai",
// //         text: aiReply,
// //       },
// //     ]);

// //     setMessage("");
// //   };
// const sendMessage = (text?: string) => {
//   const userText = (text ?? message).trim();

//   if (!userText) return;

//   const savedProfile = localStorage.getItem(
//     "studentProfile"
//   );

//   const profile = savedProfile
//     ? JSON.parse(savedProfile)
//     : defaultProfile;

//   const recommendations = getRecommendations(profile);

//   let aiReply = "";

//   // Career Mentor Response
//   aiReply = getAIResponse(userText);

//   // If user is asking about opportunities,
//   // append personalized recommendations
//   if (
//     userText.toLowerCase().includes("scholar") ||
//     userText.toLowerCase().includes("intern") ||
//     userText.toLowerCase().includes("hackathon") ||
//     userText.toLowerCase().includes("government")
//   ) {
//     aiReply +=
//       "\n\n🎯 Recommended For You:\n\n" +
//       recommendations
//         .slice(0, 3)
//         .map(
//           (item) =>
//             `• ${item.title}\n${item.provider}\nAI Match: ${item.matchScore}%`
//         )
//         .join("\n\n");
//   }

//   setMessages((prev) => [
//     ...prev,
//     {
//       sender: "user",
//       text: userText,
//     },
//     {
//       sender: "ai",
//       text: aiReply,
//     },
//   ]);

//   setMessage("");
// };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transition hover:scale-110"
//       >
//         <Bot size={30} />
//       </button>

//       {/* Chat Window */}
//       {open && (
//         <div className="fixed inset-0 z-50">

//           {/* Background Overlay */}
//           <div
//             className="absolute inset-0 bg-black/20"
//             onClick={() => setOpen(false)}
//           />

//           {/* Panel */}
//           <div
//             className="absolute bottom-8 right-8 flex h-[600px] w-[400px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* Header */}
//             <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white">

//               <div>
//                 <h2 className="text-xl font-bold">
//                   AI LifeLens
//                 </h2>

//                 <p className="text-sm text-blue-100">
//                   Your AI Opportunity Assistant
//                 </p>
//               </div>

//               <button onClick={() => setOpen(false)}>
//                 <X />
//               </button>

//             </div>

//             {/* Messages */}
//             <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-5">

//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`max-w-[85%] whitespace-pre-line rounded-2xl p-4 ${
//                     msg.sender === "ai"
//                       ? "bg-white shadow"
//                       : "ml-auto bg-blue-600 text-white"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}

//             </div>

//             {/* Suggestions + Input */}
//             <div className="border-t border-slate-200 bg-white p-4">

//               <div className="mb-3 flex flex-wrap gap-2">

//                 {suggestions.map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => sendMessage(item)}
//                     className="rounded-full border border-slate-300 px-3 py-2 text-sm transition hover:bg-blue-50"
//                   >
//                     {item}
//                   </button>
//                 ))}

//               </div>

//               <div className="flex gap-2">

//                 <input
//                   value={message}
//                   onChange={(e) =>
//                     setMessage(e.target.value)
//                   }
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       sendMessage();
//                     }
//                   }}
//                   placeholder="Ask AI LifeLens..."
//                   className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
//                 />

//                 <button
//                   onClick={() => sendMessage()}
//                   className="rounded-xl bg-blue-600 px-5 text-white transition hover:bg-blue-700"
//                 >
//                   <Send size={20} />
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState } from "react";
import {
  Bot,
  X,
  Send,
} from "lucide-react";

import { defaultProfile } from "@/data/profile";
import { getRecommendations } from "@/lib/recommendationEngine";
import { getAIResponse } from "@/lib/aiMentor";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<
    {
      sender: "user" | "ai";
      text: string;
    }[]
  >([
    {
      sender: "ai",
      text:
        "👋 Hi! I'm AI LifeLens.\nAsk me about scholarships, internships, hackathons, fellowships or government schemes.",
    },
  ]);

  const suggestions = [
    "Scholarships",
    "Internships",
    "Hackathons",
    "Government Schemes",
  ];

  const sendMessage = (text?: string) => {
    const userText = (text ?? message).trim();

    if (!userText) return;

    const savedProfile = localStorage.getItem(
      "studentProfile"
    );

    const profile = savedProfile
      ? JSON.parse(savedProfile)
      : defaultProfile;

    const recommendations =
      getRecommendations(profile);

    let aiReply = "";

    // Career Mentor Response
    aiReply = getAIResponse(userText);

    // Add personalized recommendations
    // when user asks about opportunities
    if (
      userText.toLowerCase().includes("scholar") ||
      userText.toLowerCase().includes("intern") ||
      userText.toLowerCase().includes("hackathon") ||
      userText.toLowerCase().includes("government")
    ) {
      aiReply +=
        "\n\n🎯 Recommended For You:\n\n" +
        recommendations
          .slice(0, 3)
          .map(
            (item) =>
              `• ${item.title}\n${item.provider}\nAI Match: ${item.matchScore}%`
          )
          .join("\n\n");
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
      {
        sender: "ai",
        text: aiReply,
      },
    ]);

    setMessage("");
  };

  return (
    <>
      {/* Floating AI Assistant Button */}

      <button
        onClick={() => setOpen(true)}
        aria-label="Open AI LifeLens Assistant"
        className="
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          text-white
          shadow-2xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-blue-500/30
        "
      >
        <Bot size={30} />
      </button>

      {/* Chat Window */}

      {open && (
        <div className="fixed inset-0 z-50">
          {/* Background Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-black/30
              backdrop-blur-[2px]
              dark:bg-black/50
            "
            onClick={() => setOpen(false)}
          />

          {/* Chat Panel */}

          <div
            className="
              absolute
              bottom-4
              right-4
              flex
              h-[calc(100vh-2rem)]
              max-h-[600px]
              w-[calc(100vw-2rem)]
              max-w-[400px]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              text-slate-900
              shadow-2xl
              transition-colors
              duration-300

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-white

              sm:bottom-8
              sm:right-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                p-5
                text-white
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <Bot size={22} />

                  <h2 className="text-xl font-bold">
                    AI LifeLens
                  </h2>
                </div>

                <p className="mt-1 text-sm text-blue-100">
                  Your AI Opportunity Assistant
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close AI Assistant"
                className="
                  rounded-xl
                  p-2
                  transition
                  hover:bg-white/20
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* Messages */}

            <div
              className="
                flex-1
                space-y-4
                overflow-y-auto
                bg-slate-50
                p-5
                transition-colors
                duration-300

                dark:bg-slate-950
              "
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl p-4 text-sm leading-6 transition-colors duration-300 ${
                    msg.sender === "ai"
                      ? `
                        border
                        border-slate-200
                        bg-white
                        text-slate-700
                        shadow-sm

                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-200
                      `
                      : `
                        ml-auto
                        bg-blue-600
                        text-white
                        shadow-sm
                      `
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Suggestions + Input */}

            <div
              className="
                border-t
                border-slate-200
                bg-white
                p-4
                transition-colors
                duration-300

                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Suggestion Buttons */}

              <div className="mb-3 flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => sendMessage(item)}
                    className="
                      rounded-full
                      border
                      border-slate-300
                      bg-slate-50
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                      transition-all
                      duration-200
                      hover:border-blue-400
                      hover:bg-blue-50
                      hover:text-blue-700

                      dark:border-slate-600
                      dark:bg-slate-800
                      dark:text-slate-300
                      dark:hover:border-blue-500
                      dark:hover:bg-blue-950
                      dark:hover:text-blue-300
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Message Input */}

              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask AI LifeLens..."
                  className="
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    text-slate-900
                    outline-none
                    transition-all
                    duration-200
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

                {/* Send Button */}

                <button
                  onClick={() => sendMessage()}
                  aria-label="Send message"
                  className="
                    flex
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-600
                    px-5
                    text-white
                    transition-all
                    duration-200
                    hover:bg-blue-700
                    hover:shadow-lg
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                  disabled={!message.trim()}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}