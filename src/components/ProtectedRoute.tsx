"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/features/auth/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "./custom/Spinner"; // Import the Spinner component

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
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

  return <>{children}</>;
};

export default ProtectedRoute;
