"use client";

import { logout } from "@/lib/firebase/auth";
import { withAuth } from "@/utils/withAuth";
import React from "react";

function AuthPage() {
  return (
    <div>
      Authenticated Page<button onClick={logout}>logout</button>
    </div>
  );
}

export default withAuth(AuthPage);
