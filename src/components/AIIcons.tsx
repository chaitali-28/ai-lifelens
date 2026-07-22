import {
  Bot,
  Brain,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function AIIcons() {
  return (
    <>
      <Bot
        className="
        absolute
        top-24
        left-8
        w-10
        h-10
        text-blue-400
        animate-bounce
        opacity-40
      "
      />

      <Brain
        className="
        absolute
        top-52
        right-24
        w-12
        h-12
        text-cyan-400
        animate-pulse
        opacity-40
      "
      />

      <Sparkles
        className="
        absolute
        bottom-32
        left-20
        w-8
        h-8
        text-indigo-400
        animate-ping
        opacity-30
      "
      />

      <GraduationCap
        className="
        absolute
        bottom-24
        right-10
        w-10
        h-10
        text-blue-500
        animate-bounce
        opacity-40
      "
      />
    </>
  );
}