type DeadlineBadgeProps = {
  daysLeft: number;
};

export default function DeadlineBadge({
  daysLeft,
}: DeadlineBadgeProps) {
  const urgent = daysLeft <= 7;

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        urgent
          ? `
            bg-red-100
            text-red-700
            dark:bg-red-950/50
            dark:text-red-300
          `
          : `
            bg-blue-100
            text-blue-700
            dark:bg-blue-950/50
            dark:text-blue-300
          `
      }`}
    >
      {urgent
        ? `⏰ ${daysLeft} days left`
        : `${daysLeft} days left`}
    </span>
  );
}