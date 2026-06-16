export function LoadingSpinner({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center gap-3 text-sm font-semibold text-[#082B6A]" role="status" aria-live="polite">
      <span className="size-5 animate-spin rounded-full border-2 border-[#C9A227] border-t-transparent" aria-hidden="true" />
      {label}
    </div>
  );
}
