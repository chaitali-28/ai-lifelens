"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn) {
      router.replace("/auth");
      return;
    }

    setAuthorized(true);
    setChecking(false);
  }, [router]);

  if (checking) {
    return null;
  }

  if (!authorized) {
    return null;
  }

  return <>{children}</>;
}