

// "use client";
// import { addActivity } from "@/lib/activity";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { defaultProfile } from "@/data/profile";

// import InputField from "./InputField";
// import SelectField from "./SelectField";
// import SkillSelector from "./SkillSelector";
// import InterestSelector from "./InterestSelector";

// export default function StudentProfileForm() {
//   const [profile, setProfile] =useState(defaultProfile);
//   const [saved, setSaved] = useState(false);
// const router = useRouter();
//   // useEffect(() => {
//   //   const savedProfile = localStorage.getItem("studentProfile");

//   //   if (!savedProfile) return;

//   //   try {
//   //     setProfile(JSON.parse(savedProfile));
//   //   } catch (error) {
//   //     console.error("Failed to load saved profile:", error);
//   //   }
//   // }, []);
//   useEffect(() => {
//   const savedProfile = localStorage.getItem("studentProfile");
//   const savedUser = localStorage.getItem("user");

//   if (savedProfile) {
//     try {
//       setProfile(JSON.parse(savedProfile));
//       return;
//     } catch (error) {
//       console.error("Failed to load saved profile:", error);
//     }
//   }

//   if (savedUser) {
//     try {
//       const user = JSON.parse(savedUser);

//       setProfile((prev) => ({
//         ...prev,
//         fullName: user.fullName || "",
//         email: user.email || "",
//         state: user.state || "",
//       }));
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }, []);

//   const updateField = (
//     field: keyof typeof profile,
//     value: string
//   ) => {
//     setProfile((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };


// const saveProfile = () => {
//   try {
//     const savedUser = localStorage.getItem("user");

//     let updatedProfile = profile;

//     if (savedUser) {
//       const user = JSON.parse(savedUser);

//       updatedProfile = {
//         ...profile,
//         fullName: user.fullName,
//         email: user.email,
//         state: user.state,
//       };
//     }

//     localStorage.setItem(
//       "studentProfile",
//       JSON.stringify(updatedProfile)
//     );

//     addActivity(
//       "Profile Updated",
//       "Your student profile was updated successfully."
//     );

//     setSaved(true);

//     setTimeout(() => {
//       router.push("/dashboard");
//     }, 1000);

//   } catch (error) {
//     console.error("Failed to save profile:", error);
//   }
// };
//   return (
//     <section className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl">

//       <h1 className="text-center text-4xl font-bold text-slate-900">
//         👤 Student Profile
//       </h1>

//       <p className="mt-3 text-center text-slate-600">
//         Complete your profile to receive AI-powered personalized opportunities.
//       </p>

//       {saved && (
//         <div className="mt-8 rounded-2xl border border-green-300 bg-green-50 p-4 text-center font-medium text-green-700">
//           ✅ Profile saved successfully! Your recommendations have been updated.
//         </div>
//       )}

//       <div className="mt-10 grid gap-6 md:grid-cols-2">

//         <InputField
//           label="Full Name"
//           placeholder="Enter your full name"
//           value={profile.fullName}
//           onChange={(value) =>
//             updateField("fullName", value)
//           }
//         />

//         <InputField
//           label="Email"
//           type="email"
//           placeholder="Enter your email"
//           value={profile.email}
//           onChange={(value) =>
//             updateField("email", value)
//           }
//         />

//         <InputField
//           label="College"
//           placeholder="Enter your college"
//           value={profile.college}
//           onChange={(value) =>
//             updateField("college", value)
//           }
//         />

//         <SelectField
//           label="Course"
//           options={[
//             "B.Tech",
//             "BCA",
//             "B.Sc",
//             "MBA",
//             "M.Tech",
//           ]}
//           value={profile.course}
//           onChange={(value) =>
//             updateField("course", value)
//           }
//         />

//         <SelectField
//           label="Branch"
//           options={[
//             "Computer Engineering",
//             "Information Technology",
//             "AI & DS",
//             "Electronics",
//             "Mechanical",
//           ]}
//           value={profile.branch}
//           onChange={(value) =>
//             updateField("branch", value)
//           }
//         />

//         <SelectField
//           label="Current Year"
//           options={[
//             "First Year",
//             "Second Year",
//             "Third Year",
//             "Final Year",
//           ]}
//           value={profile.year}
//           onChange={(value) =>
//             updateField("year", value)
//           }
//         />

//         <InputField
//           label="CGPA"
//           placeholder="Example: 8.85"
//           value={profile.cgpa}
//           onChange={(value) =>
//             updateField("cgpa", value)
//           }
//         />

//         <InputField
//           label="Family Income"
//           type="number"
//           placeholder="Example: 250000"
//           value={profile.familyIncome}
//           onChange={(value) =>
//             updateField("familyIncome", value)
//           }
//         />

//         <SelectField
//           label="State"
//           options={[
//             "Maharashtra",
//             "Gujarat",
//             "Delhi",
//             "Karnataka",
//             "Tamil Nadu",
//           ]}
//           value={profile.state}
//           onChange={(value) =>
//             updateField("state", value)
//           }
//         />

//         <SelectField
//           label="Category"
//           options={[
//             "Open",
//             "OBC",
//             "SC",
//             "ST",
//             "EWS",
//           ]}
//           value={profile.category}
//           onChange={(value) =>
//             updateField("category", value)
//           }
//         />

//       </div>

//       <div className="mt-10">

//         <SkillSelector
//           selectedSkills={profile.skills}
//           onChange={(skills) =>
//             setProfile((prev) => ({
//               ...prev,
//               skills,
//             }))
//           }
//         />

//       </div>

//       <div className="mt-10">

//         <InterestSelector
//           selectedInterests={profile.interests}
//           onChange={(interests) =>
//             setProfile((prev) => ({
//               ...prev,
//               interests,
//             }))
//           }
//         />

//       </div>

//       <button
//         onClick={saveProfile}
//         className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
//       >
//         💾 Save Profile
//       </button>

//     </section>
//   );
// }
"use client";

import { addActivity } from "@/lib/activity";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { defaultProfile } from "@/data/profile";

import InputField from "./InputField";
import SelectField from "./SelectField";
import SkillSelector from "./SkillSelector";
import InterestSelector from "./InterestSelector";

export default function StudentProfileForm() {
  const [profile, setProfile] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const savedProfile = localStorage.getItem("studentProfile");
    const savedUser = localStorage.getItem("user");

    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
        return;
      } catch (error) {
        console.error("Failed to load saved profile:", error);
      }
    }

    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);

        setProfile((prev) => ({
          ...prev,
          fullName: user.fullName || "",
          email: user.email || "",
          state: user.state || "",
        }));
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    }
  }, []);

  const updateField = (
    field: keyof typeof profile,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveProfile = () => {
    try {
      const savedUser = localStorage.getItem("user");

      let updatedProfile = profile;

      if (savedUser) {
        const user = JSON.parse(savedUser);

        updatedProfile = {
          ...profile,
          fullName: user.fullName,
          email: user.email,
          state: user.state,
        };
      }

      localStorage.setItem(
        "studentProfile",
        JSON.stringify(updatedProfile)
      );

      addActivity(
        "Profile Updated",
        "Your student profile was updated successfully."
      );

      setSaved(true);

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Failed to save profile:", error);
    }
  };

  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-colors duration-300 sm:p-8 md:p-10 dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="text-center">

        <h1 className="text-4xl font-bold text-slate-900 transition-colors dark:text-slate-100">
          👤 Student Profile
        </h1>

        <p className="mt-3 text-slate-600 transition-colors dark:text-slate-400">
          Complete your profile to receive AI-powered personalized opportunities.
        </p>

      </div>

      {/* Success Message */}
      {saved && (
        <div className="mt-8 rounded-2xl border border-green-300 bg-green-50 p-4 text-center font-medium text-green-700 transition-colors dark:border-green-800 dark:bg-green-950/40 dark:text-green-400">
          ✅ Profile saved successfully! Your recommendations have been updated.
        </div>
      )}

      {/* Profile Fields */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <InputField
          label="Full Name"
          placeholder="Enter your full name"
          value={profile.fullName}
          onChange={(value) =>
            updateField("fullName", value)
          }
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={profile.email}
          onChange={(value) =>
            updateField("email", value)
          }
        />

        <InputField
          label="College"
          placeholder="Enter your college"
          value={profile.college}
          onChange={(value) =>
            updateField("college", value)
          }
        />

        <SelectField
          label="Course"
          options={[
            "B.Tech",
            "BCA",
            "B.Sc",
            "MBA",
            "M.Tech",
          ]}
          value={profile.course}
          onChange={(value) =>
            updateField("course", value)
          }
        />

        <SelectField
          label="Branch"
          options={[
            "Computer Engineering",
            "Information Technology",
            "AI & DS",
            "Electronics",
            "Mechanical",
          ]}
          value={profile.branch}
          onChange={(value) =>
            updateField("branch", value)
          }
        />

        <SelectField
          label="Current Year"
          options={[
            "First Year",
            "Second Year",
            "Third Year",
            "Final Year",
          ]}
          value={profile.year}
          onChange={(value) =>
            updateField("year", value)
          }
        />

        <InputField
          label="CGPA"
          placeholder="Example: 8.85"
          value={profile.cgpa}
          onChange={(value) =>
            updateField("cgpa", value)
          }
        />

        <InputField
          label="Family Income"
          type="number"
          placeholder="Example: 250000"
          value={profile.familyIncome}
          onChange={(value) =>
            updateField("familyIncome", value)
          }
        />

        <SelectField
          label="State"
          options={[
            "Maharashtra",
            "Gujarat",
            "Delhi",
            "Karnataka",
            "Tamil Nadu",
          ]}
          value={profile.state}
          onChange={(value) =>
            updateField("state", value)
          }
        />

        <SelectField
          label="Category"
          options={[
            "Open",
            "OBC",
            "SC",
            "ST",
            "EWS",
          ]}
          value={profile.category}
          onChange={(value) =>
            updateField("category", value)
          }
        />

      </div>

      {/* Skills */}
      <div className="mt-10">
        <SkillSelector
          selectedSkills={profile.skills}
          onChange={(skills) =>
            setProfile((prev) => ({
              ...prev,
              skills,
            }))
          }
        />
      </div>

      {/* Interests */}
      <div className="mt-10">
        <InterestSelector
          selectedInterests={profile.interests}
          onChange={(interests) =>
            setProfile((prev) => ({
              ...prev,
              interests,
            }))
          }
        />
      </div>

      {/* Save Button */}
      <button
        onClick={saveProfile}
        className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      >
        💾 Save Profile
      </button>

    </section>
  );
}