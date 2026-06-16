"use client";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirebaseStorage } from "@/src/lib/firebase/client";

export async function uploadCmsImage(file: File, folder: "blog" | "testimonials" | "countries") {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const path = `${folder}/${Date.now()}-${safeName}`;
  const snapshot = await uploadBytes(ref(getFirebaseStorage(), path), file, { contentType: file.type });
  return getDownloadURL(snapshot.ref);
}
