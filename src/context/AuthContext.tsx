"use client";

import React, { createContext, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: Error | undefined;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: undefined,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);
  const value = useMemo(
    () => ({
      user: user ?? null,
      loading,
      error,
    }),
    [user, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
