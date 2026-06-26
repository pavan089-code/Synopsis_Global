import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[#B08D57] text-white shadow-sm shadow-[#16325B]/10 hover:-translate-y-0.5 hover:bg-[#967744] focus-visible:outline-[#B08D57]",
    secondary: "bg-[#16325B] text-white hover:-translate-y-0.5 hover:bg-[#244A73] focus-visible:outline-[#16325B]",
    outline:
      "border border-white/25 bg-transparent text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/12 hover:shadow-sm focus-visible:outline-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
