
export type BookmarkOpportunity = {
  id: number;
  title: string;
  provider: string;
  category: string;
  description: string;
  amount: string;
  deadline: string;
  eligibility: string;
  matchScore: number;
  verified: boolean;
  reasons?: string[];
};

const STORAGE_KEY = "bookmarkedOpportunities";

/**
 * Get all bookmarked opportunities
 */
export function getBookmarks(): BookmarkOpportunity[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

/**
 * Save a new bookmark
 */
export function addBookmark(
  opportunity: BookmarkOpportunity
) {
  const bookmarks = getBookmarks();

  const exists = bookmarks.some(
    (item) => item.id === opportunity.id
  );

  if (!exists) {
    bookmarks.push(opportunity);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(bookmarks)
    );

    // Notify the application that bookmarks changed
    window.dispatchEvent(new Event("bookmarkChanged"));
  }
}

/**
 * Remove a bookmark
 */
export function removeBookmark(id: number) {
  const bookmarks = getBookmarks().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(bookmarks)
  );

  // Notify the application that bookmarks changed
  window.dispatchEvent(new Event("bookmarkChanged"));
}

/**
 * Check if an opportunity is bookmarked
 */
export function isBookmarked(id: number): boolean {
  return getBookmarks().some(
    (item) => item.id === id
  );
}

/**
 * Toggle bookmark status
 * Returns true if bookmarked after the operation,
 * false if removed.
 */
export function toggleBookmark(
  opportunity: BookmarkOpportunity
): boolean {
  if (isBookmarked(opportunity.id)) {
    removeBookmark(opportunity.id);
    return false;
  }

  addBookmark(opportunity);
  return true;
}

/**
 * Get total number of bookmarks
 */
export function getBookmarkCount(): number {
  return getBookmarks().length;
}

/**
 * Remove all bookmarks
 */
export function clearBookmarks() {
  localStorage.removeItem(STORAGE_KEY);

  window.dispatchEvent(new Event("bookmarkChanged"));
}