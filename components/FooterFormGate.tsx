"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function FooterFormGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/register" || pathname === "/thank-you") return null;
  return <div>{children}</div>;
}
