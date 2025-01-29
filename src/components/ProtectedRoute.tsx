"use client";

import React, { useEffect, useLayoutEffect } from "react";
import { useAuth } from "@/features/auth/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "./custom/Spinner"; // Import the Spinner component

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!loading && !isAuthenticated) {
      if (pathname !== "/auth/login") router.replace("/auth/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
