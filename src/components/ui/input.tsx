import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex text-dark-primary h-[44px] w-full rounded-lg border focus:shadow-input-focus focus:border-[#27293759] tracking-[-0.6px] hover:border-[#27293759] border-[#2729371F] bg-white px-4 py-[10px] transition-colors placeholder:text-[#27293759] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-base",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
