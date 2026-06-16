"use client";

import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { subscribeToAuth } from "@/src/lib/firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return subscribeToAuth((nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });
  }, []);

  return { user, loading, authenticated: Boolean(user) };
}
