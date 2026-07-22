type MatchScoreProps = {
  score: number;
};

export default function MatchScore({
  score,
}: MatchScoreProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-full
        bg-green-100
        px-3
        py-1
        text-sm
        font-semibold
        text-green-700

        dark:bg-green-950/50
        dark:text-green-300
      "
    >
      ⭐ {score}% Match
    </div>
  );
}