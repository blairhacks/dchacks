"use client";
import { ReactNode } from "react";

export function LearnMoreScroll({ children }: { children: ReactNode }) {
  return (
    <div
      className="mb-20 flex flex-col items-center text-white duration-100 hover:cursor-pointer hover:font-semibold"
      onClick={() => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </div>
  );
}
