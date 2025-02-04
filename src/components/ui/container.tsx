import type React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg w-full ${className}`}
    >
      {children}
    </div>
  );
}
