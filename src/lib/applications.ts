
export type AppliedOpportunity = {
  id: number;
  title: string;
  provider: string;
  appliedAt: string;
};

const STORAGE_KEY = "appliedOpportunities";

export function getApplications(): AppliedOpportunity[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function hasApplied(id: number): boolean {
  return getApplications().some((item) => item.id === id);
}

export function applyOpportunity(
  id: number,
  title: string,
  provider: string
) {
  const applications = getApplications();

  const exists = applications.some((item) => item.id === id);

  if (exists) return;

  applications.push({
    id,
    title,
    provider,
    appliedAt: new Date().toISOString(),
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(applications)
  );

  window.dispatchEvent(
    new Event("applicationsChanged")
  );
}

export function removeApplication(id: number) {
  const applications = getApplications().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(applications)
  );

  window.dispatchEvent(
    new Event("applicationsChanged")
  );
}