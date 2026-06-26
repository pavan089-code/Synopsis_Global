export function LoadingSpinner({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center gap-3 text-sm font-semibold text-[#16325B]" role="status" aria-live="polite">
      <span className="size-5 animate-spin rounded-full border-2 border-[#B08D57] border-t-transparent" aria-hidden="true" />
      {label}
    </div>
  );
}
