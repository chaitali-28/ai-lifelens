"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bookmark } from "lucide-react";

import {
  toggleBookmark,
  isBookmarked,
  BookmarkOpportunity,
} from "@/lib/bookmarks";

import { addActivity } from "@/lib/activity";

type BookmarkButtonProps = BookmarkOpportunity;

export default function BookmarkButton(
  props: BookmarkButtonProps
) {
  const router = useRouter();

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setSaved(isBookmarked(props.id));
    };

    updateState();

    window.addEventListener(
      "bookmarkChanged",
      updateState
    );

    return () => {
      window.removeEventListener(
        "bookmarkChanged",
        updateState
      );
    };
  }, [props.id]);

  const handleClick = () => {
    const loggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn) {
      alert(
        "Please create an AI LifeLens account to bookmark opportunities."
      );

      router.push("/auth");
      return;
    }

    const newState = toggleBookmark(props);

    setSaved(newState);

    if (newState) {
      addActivity(
        "Opportunity Bookmarked",
        props.title
      );
    } else {
      addActivity(
        "Bookmark Removed",
        props.title
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={
        saved
          ? "Remove Bookmark"
          : "Save Bookmark"
      }
      className={`rounded-full p-2 transition-all duration-300 ${
        saved
          ? "rounded-xl bg-blue-100 hover:bg-blue-200"
          : "rounded-xl hover:bg-blue-50"
      }`}
    >
      <Bookmark
        size={22}
        className={`transition-all duration-300 ${
          saved
            ? "fill-blue-600 text-blue-600"
            : "text-gray-500"
        }`}
      />
    </button>
  );
}