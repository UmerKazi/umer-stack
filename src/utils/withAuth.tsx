"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { NextPage } from "next/types";
import React from "react";

export function withAuth<P extends {}>(
  Component: React.ComponentType<P>
): NextPage<P> {
  function WithAuth(props: P): JSX.Element | null {
    const router = useRouter();
    const { user } = useAuth();

    React.useEffect(() => {
      if (!user) {
        router.push("/signin");
      }
    }, [user, router]);

    // Early return null or a loading state until user is verified
    if (!user) return null;

    return <Component {...(props as P)} />;
  }

  if (process.env.NODE_ENV !== "production") {
    const displayName = Component.displayName || Component.name || "Component";
    WithAuth.displayName = `withAuth(${displayName})`;
  }

  return WithAuth;
}
