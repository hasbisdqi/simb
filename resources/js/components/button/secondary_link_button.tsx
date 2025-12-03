"use client";

import { scrollWithOffset } from "../../lib/scroll_with_offset";
import type { ReactNode } from "react";

export default function LinkButtonSecondary({ href, children }: { href: string, children: ReactNode }) {
  return (
    <button className="
      bg-secondary p-1 px-5 rounded-4xl drop-shadow font-face-secondary
      transition-transform duration-300
      hover:scale-115 active:scale-95
    "
      onClick={() => scrollWithOffset(href)}>
      {children}
    </button>
  );
}
