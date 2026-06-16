"use client";

import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseEnv = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const requiredFirebaseEnv = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
] as const;

const firebaseEnvByKey: Record<(typeof requiredFirebaseEnv)[number], string | undefined> = {
  NEXT_PUBLIC_FIREBASE_API_KEY: firebaseEnv.apiKey,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: firebaseEnv.authDomain,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: firebaseEnv.projectId,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: firebaseEnv.storageBucket,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: firebaseEnv.messagingSenderId,
  NEXT_PUBLIC_FIREBASE_APP_ID: firebaseEnv.appId,
};

export function getMissingFirebaseEnv() {
  return requiredFirebaseEnv.filter((key) => !firebaseEnvByKey[key]);
}

export function isFirebaseConfigured() {
  return getMissingFirebaseEnv().length === 0;
}

function assertFirebaseConfigured() {
  if (!isFirebaseConfigured()) {
    throw new Error(`Firebase environment variables are missing: ${getMissingFirebaseEnv().join(", ")}`);
  }
}

export function getFirebaseApp(): FirebaseApp {
  assertFirebaseConfigured();
  return getApps()[0] ?? initializeApp(firebaseEnv);
}

export function getFirebaseDb() {
  return getFirestore(getFirebaseApp());
}

export function getFirebaseAuth() {
  return getAuth(getFirebaseApp());
}

export function getFirebaseStorage() {
  return getStorage(getFirebaseApp());
}
