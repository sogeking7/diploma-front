import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH72({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-dark-primary text-[72px] leading-[72px] tracking-[-3px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH56({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-dark-primary text-[56px] leading-[60px] tracking-[-2px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH40({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-dark-primary text-[40px] leading-[44px] tracking-[-1.5px]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH32({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "text-dark-primary text-[32px] leading-[36px] tracking-[-1px]",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyH24({ children, className }: TypographyProps) {
  return (
    <h5
      className={cn(
        "text-dark-primary text-[24px] leading-[32px] tracking-[-1px]",
        className,
      )}
    >
      {children}
    </h5>
  );
}

export function TypographyH20({ children, className }: TypographyProps) {
  return (
    <h6
      className={cn(
        "text-dark-primary text-[20px] leading-[28px] tracking-[-0.8px]",
        className,
      )}
    >
      {children}
    </h6>
  );
}

export function TypographyH16({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-dark-primary text-[16px] leading-[24px] tracking-[-0.6px]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TypographyH14({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-dark-primary text-[14px] leading-[20px] tracking-[-0.1px]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TypographyH12({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-dark-primary text-[12px] leading-[16px] tracking-[0.3px]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TypographyH10({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-dark-primary text-[10px] leading-[12px] tracking-[0.3px]",
        className,
      )}
    >
      {children}
    </p>
  );
}
