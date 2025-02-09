import React from "react";
import { cn } from "../lib/utils";

function Button({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
