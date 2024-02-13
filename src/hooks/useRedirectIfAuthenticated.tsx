import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export default function useRedirectIfAuthenticated(
  targetPath: string = "/auth-page",
) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push(targetPath);
    }
  }, [user, loading, router, targetPath]);
}
