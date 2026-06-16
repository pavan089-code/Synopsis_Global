"use client";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  type DocumentData,
  type FirestoreError,
  type QueryDocumentSnapshot,
  type Unsubscribe,
} from "firebase/firestore";
import { getFirebaseDb } from "@/src/lib/firebase/client";
import type { BlogPost, BlogPostInput } from "@/src/types/blog";
import type { Consultation, ConsultationStatus, CreateConsultationInput } from "@/src/types/consultation";
import type { Country, CountryInput } from "@/src/types/country";
import type { ContactLead, CreateContactLeadInput, LeadStatus } from "@/src/types/lead";
import type { Testimonial, TestimonialInput } from "@/src/types/testimonial";

type SnapshotHandler<T> = (items: T[]) => void;
type ErrorHandler = (error: FirestoreError) => void;

const collections = {
  leads: "contact_leads",
  consultations: "consultations",
  blog: "blog_posts",
  testimonials: "testimonials",
  countries: "countries",
} as const;

function toDate(value: unknown): Date | null {
  if (value instanceof Date) return value;
  if (value && typeof value === "object" && "toDate" in value && typeof value.toDate === "function") {
    return value.toDate() as Date;
  }
  return null;
}

function readString(data: Record<string, unknown>, key: string) {
  const value = data[key];
  return typeof value === "string" ? value : "";
}

function readBoolean(data: Record<string, unknown>, key: string) {
  return typeof data[key] === "boolean" ? data[key] : false;
}

function mapDoc<T>(snapshot: QueryDocumentSnapshot<DocumentData>, mapper: (data: Record<string, unknown>) => Omit<T, "id">): T {
  return { id: snapshot.id, ...mapper(snapshot.data()) } as T;
}

function subscribeCollection<T>(
  collectionName: string,
  mapper: (doc: QueryDocumentSnapshot<DocumentData>) => T,
  onNext: SnapshotHandler<T>,
  onError: ErrorHandler,
): Unsubscribe {
  return onSnapshot(query(collection(getFirebaseDb(), collectionName), orderBy("createdAt", "desc")), (snapshot) => onNext(snapshot.docs.map(mapper)), onError);
}

export function createContactLead(input: CreateContactLeadInput) {
  return addDoc(collection(getFirebaseDb(), collections.leads), { ...input, status: "New" satisfies LeadStatus, createdAt: serverTimestamp() });
}

export function subscribeToLeads(onNext: SnapshotHandler<ContactLead>, onError: ErrorHandler) {
  return subscribeCollection(
    collections.leads,
    (item) =>
      mapDoc<ContactLead>(item, (data) => ({
        name: readString(data, "name"),
        email: readString(data, "email"),
        phone: readString(data, "phone"),
        service: readString(data, "service"),
        message: readString(data, "message"),
        status: (readString(data, "status") || "New") as LeadStatus,
        createdAt: toDate(data.createdAt),
      })),
    onNext,
    onError,
  );
}

export function updateLeadStatus(id: string, status: LeadStatus) {
  return updateDoc(doc(getFirebaseDb(), collections.leads, id), { status });
}

export function deleteLead(id: string) {
  return deleteDoc(doc(getFirebaseDb(), collections.leads, id));
}

export function createConsultation(input: CreateConsultationInput) {
  return addDoc(collection(getFirebaseDb(), collections.consultations), { ...input, status: "Pending" satisfies ConsultationStatus, createdAt: serverTimestamp() });
}

export function subscribeToConsultations(onNext: SnapshotHandler<Consultation>, onError: ErrorHandler) {
  return subscribeCollection(
    collections.consultations,
    (item) =>
      mapDoc<Consultation>(item, (data) => ({
        name: readString(data, "name"),
        email: readString(data, "email"),
        phone: readString(data, "phone"),
        service: readString(data, "service"),
        preferredDate: readString(data, "preferredDate"),
        preferredTime: readString(data, "preferredTime"),
        notes: readString(data, "notes"),
        status: (readString(data, "status") || "Pending") as ConsultationStatus,
        createdAt: toDate(data.createdAt),
      })),
    onNext,
    onError,
  );
}

export function updateConsultationStatus(id: string, status: ConsultationStatus) {
  return updateDoc(doc(getFirebaseDb(), collections.consultations, id), { status });
}

export function deleteConsultation(id: string) {
  return deleteDoc(doc(getFirebaseDb(), collections.consultations, id));
}

export function createBlogPost(input: BlogPostInput) {
  return addDoc(collection(getFirebaseDb(), collections.blog), { ...input, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
}

export function updateBlogPost(id: string, input: BlogPostInput) {
  return updateDoc(doc(getFirebaseDb(), collections.blog, id), { ...input, updatedAt: serverTimestamp() });
}

export function deleteBlogPost(id: string) {
  return deleteDoc(doc(getFirebaseDb(), collections.blog, id));
}

export function subscribeToBlogPosts(onNext: SnapshotHandler<BlogPost>, onError: ErrorHandler) {
  return subscribeCollection(
    collections.blog,
    (item) =>
      mapDoc<BlogPost>(item, (data) => ({
        title: readString(data, "title"),
        slug: readString(data, "slug"),
        excerpt: readString(data, "excerpt"),
        content: readString(data, "content"),
        image: readString(data, "image"),
        published: readBoolean(data, "published"),
        createdAt: toDate(data.createdAt),
        updatedAt: toDate(data.updatedAt),
      })),
    onNext,
    onError,
  );
}

export function createTestimonial(input: TestimonialInput) {
  return addDoc(collection(getFirebaseDb(), collections.testimonials), { ...input, createdAt: serverTimestamp() });
}

export function updateTestimonial(id: string, input: TestimonialInput) {
  return updateDoc(doc(getFirebaseDb(), collections.testimonials, id), input);
}

export function deleteTestimonial(id: string) {
  return deleteDoc(doc(getFirebaseDb(), collections.testimonials, id));
}

export function subscribeToTestimonials(onNext: SnapshotHandler<Testimonial>, onError: ErrorHandler) {
  return subscribeCollection(
    collections.testimonials,
    (item) =>
      mapDoc<Testimonial>(item, (data) => ({
        name: readString(data, "name"),
        designation: readString(data, "designation"),
        country: readString(data, "country"),
        testimonial: readString(data, "testimonial"),
        image: readString(data, "image"),
        createdAt: toDate(data.createdAt),
      })),
    onNext,
    onError,
  );
}

export function createCountry(input: CountryInput) {
  return addDoc(collection(getFirebaseDb(), collections.countries), { ...input, createdAt: serverTimestamp() });
}

export function updateCountry(id: string, input: CountryInput) {
  return updateDoc(doc(getFirebaseDb(), collections.countries, id), input);
}

export function deleteCountry(id: string) {
  return deleteDoc(doc(getFirebaseDb(), collections.countries, id));
}

export function subscribeToCountries(onNext: SnapshotHandler<Country>, onError: ErrorHandler) {
  return subscribeCollection(
    collections.countries,
    (item) =>
      mapDoc<Country>(item, (data) => ({
        name: readString(data, "name"),
        description: readString(data, "description"),
        opportunities: readString(data, "opportunities"),
        image: readString(data, "image"),
        createdAt: toDate(data.createdAt),
      })),
    onNext,
    onError,
  );
}
