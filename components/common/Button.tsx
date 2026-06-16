import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[#C9A227] text-[#082B6A] hover:bg-[#b99321] focus-visible:outline-[#C9A227]",
    secondary: "bg-[#082B6A] text-white hover:bg-[#061f4f] focus-visible:outline-[#082B6A]",
    outline:
      "border border-[#C9A227]/70 bg-white/10 text-white hover:bg-white hover:text-[#082B6A] focus-visible:outline-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
