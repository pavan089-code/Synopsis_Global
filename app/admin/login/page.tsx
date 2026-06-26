"use client";

import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/admin/LoadingSpinner";
import { useAuth } from "@/src/hooks/useAuth";
import { loginWithEmail } from "@/src/lib/firebase/auth";

function AdminLoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { authenticated, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!loading && authenticated) {
      router.replace(searchParams.get("next") ?? "/admin/dashboard");
    }
  }, [authenticated, loading, router, searchParams]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    setSubmitting(true);
    try {
      await loginWithEmail(email.trim(), password);
      router.replace(searchParams.get("next") ?? "/admin/dashboard");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <LoadingSpinner label="Preparing login" />;
  }

  return (
    <main className="grid min-h-screen bg-[#16325B] px-5 py-10 text-white lg:grid-cols-[1fr_520px]">
      <section className="flex items-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B08D57]">Synopsis Global</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">Admin command center</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
            Manage leads, consultations, blog content, testimonials, countries, and operational settings from a secured Firebase-backed panel.
          </p>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-xl items-center">
        <form onSubmit={handleSubmit} className="w-full border border-white/15 bg-white p-6 text-slate-800 shadow-2xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B08D57]">Email Password Auth</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#16325B]">Sign in</h2>
          </div>
          {error ? <div className="mb-5 border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div> : null}
          <label className="grid gap-2 text-sm font-semibold text-[#16325B]">
            Email
            <span className="flex min-h-12 items-center gap-3 border border-slate-300 px-3 focus-within:border-[#B08D57]">
              <Mail className="size-5 text-slate-400" aria-hidden="true" />
              <input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full outline-none" />
            </span>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-[#16325B]">
            Password
            <span className="flex min-h-12 items-center gap-3 border border-slate-300 px-3 focus-within:border-[#B08D57]">
              <LockKeyhole className="size-5 text-slate-400" aria-hidden="true" />
              <input type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full outline-none" />
              <button type="button" onClick={() => setShowPassword((value) => !value)} className="text-slate-500" aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <EyeOff className="size-5" aria-hidden="true" /> : <Eye className="size-5" aria-hidden="true" />}
              </button>
            </span>
          </label>
          <button type="submit" disabled={submitting} className="mt-7 min-h-12 w-full bg-[#16325B] px-5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#244A73] disabled:opacity-60">
            {submitting ? "Signing in..." : "Login"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<LoadingSpinner label="Preparing login" />}>
      <AdminLoginContent />
    </Suspense>
  );
}
