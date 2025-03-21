"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider
      refetchInterval={5 * 60} // Re-fetch session every 5 minutes
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  );
}