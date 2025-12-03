"use client";

import type { ReactNode } from "react";
import { scrollWithOffset } from "../../lib/scroll_with_offset";

export default function LinkButtonPrimary({ href, children }: { href: string, children: ReactNode }) {
  return (
    <button
      className="
        bg-primary text-secondary py-2 px-4 rounded-4xl font-bold font-face-primary
        transition-transform duration-300
        hover:scale-115 active:scale-95
      "
      onClick={() => scrollWithOffset(href)}
    >
      {children}
    </button >
  );
}
