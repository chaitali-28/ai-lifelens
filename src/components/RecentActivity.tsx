"use client";

import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

import {
  Activity,
  getActivities,
} from "@/lib/activity";

export default function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const loadActivities = () => {
      setActivities(getActivities());
    };

    loadActivities();

    window.addEventListener(
      "activityChanged",
      loadActivities
    );

    return () => {
      window.removeEventListener(
        "activityChanged",
        loadActivities
      );
    };
  }, []);

  return (
    <section className="mt-16 rounded-3xl bg-white p-8 shadow">
      <h2 className="mb-8 text-4xl font-bold">
        🕒 Recent Activity
      </h2>

      {activities.length === 0 ? (
        <p className="text-slate-500">
          No recent activity.
        </p>
      ) : (
        <div className="space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex gap-5 rounded-2xl border border-slate-200 p-5"
            >
              <Clock3
                className="mt-1 text-blue-600"
                size={24}
              />

              <div>
                <h3 className="font-bold">
                  {activity.title}
                </h3>

                <p className="mt-1 text-slate-600">
                  {activity.description}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}