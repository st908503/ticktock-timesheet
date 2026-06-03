import { signIn, signOut } from "next-auth/react";

import type { LoginPayload } from "../types/auth.types";

export async function login(payload: LoginPayload) {
  return signIn("credentials", {
    email: payload.email,
    password: payload.password,
    redirect: false,
  });
}

export async function logout() {
  return signOut({
    callbackUrl: "/login",
  });
}