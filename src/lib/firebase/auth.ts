"use client";

import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/src/lib/firebase/client";

export function loginWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}

export function logoutAdmin() {
  return signOut(getFirebaseAuth());
}

export function subscribeToAuth(callback: (user: User | null) => void) {
  try {
    return onAuthStateChanged(getFirebaseAuth(), callback);
  } catch {
    callback(null);
    return () => undefined;
  }
}
