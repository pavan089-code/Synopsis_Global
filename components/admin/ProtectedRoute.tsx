"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { useAuth } from "@/src/hooks/useAuth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { authenticated, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authenticated) {
      router.replace(`/admin/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [authenticated, loading, pathname, router]);

  if (loading || !authenticated) {
    return <LoadingSpinner label="Checking admin session" />;
  }

  return children;
}
