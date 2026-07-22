"use client";

import { useEffect, useState } from "react";

import OpportunityCard from "@/components/OpportunityCard";

import {
  getBookmarks,
  BookmarkOpportunity,
} from "@/lib/bookmarks";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<
    BookmarkOpportunity[]
  >([]);


useEffect(() => {
  const loadBookmarks = () => {
    setBookmarks(getBookmarks());
  };

  loadBookmarks();

  window.addEventListener("bookmarkChanged", loadBookmarks);

  return () => {
    window.removeEventListener("bookmarkChanged", loadBookmarks);
  };
}, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-5xl font-bold">
          ⭐ Saved Opportunities
        </h1>

        {bookmarks.length === 0 ? (
          <div className="rounded-3xl bg-white p-16 text-center shadow">
            <h2 className="text-3xl font-bold">
              No Bookmarks Yet
            </h2>

            <p className="mt-4 text-slate-600">
              Save opportunities to view them here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((item) => (
              <OpportunityCard
                key={item.id}
                id={item.id}
                title={item.title}
                provider={item.provider}
                category={item.category}
                description={item.description}
                amount={item.amount}
                deadline={item.deadline}
                eligibility={item.eligibility}
                matchScore={item.matchScore}
                verified={item.verified}
                reasons={item.reasons}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}