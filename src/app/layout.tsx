"use client";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "@/components/ProtectedRoute";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isNotLoginPage = !pathname.includes("/auth");

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full py-2">
              {isNotLoginPage && (
                <div className={"px-4 sm:px-6 lg:px-8 py-2"}>
                  <SidebarTrigger />
                </div>
              )}
              {children}
            </main>
            <Toaster />
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
