export type Activity = {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
};

const STORAGE_KEY = "aiLifeLensActivities";

export function getActivities(): Activity[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function addActivity(
  title: string,
  description: string
) {
  if (typeof window === "undefined") return;

  const activities = getActivities();

  activities.unshift({
    id: Date.now(),
    title,
    description,
    time: new Date().toLocaleString(),
    read: false,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(activities.slice(0, 20))
  );

  window.dispatchEvent(new Event("activityChanged"));
}

export function markAllAsRead() {
  const activities = getActivities().map((item) => ({
    ...item,
    read: true,
  }));

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(activities)
  );

  window.dispatchEvent(new Event("activityChanged"));
}

export function clearActivities() {
  localStorage.removeItem(STORAGE_KEY);

  window.dispatchEvent(new Event("activityChanged"));
}