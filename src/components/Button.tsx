// type ButtonProps = {
//   text: string;
//   variant?: "primary" | "secondary";
// };

// export default function Button({
//   text,
//   variant = "primary",
// }: ButtonProps) {
//   const baseStyles =
//   "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

//   const variants = {
//    primary:
//   "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-blue-300",

//     secondary:
//   "border border-blue-600 text-blue-700 hover:bg-blue-50 hover:scale-105",
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]}`}
//     >
//       {text}
//     </button>
//   );
// }
import Link from "next/link";

type ButtonProps = {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-blue-300",

    secondary:
      "border border-blue-600 text-blue-700 hover:bg-blue-50 hover:scale-105",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  );
}