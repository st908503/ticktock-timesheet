"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export function useLogin() {
  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin() {
    try {
      setIsLoading(true);
      setError("");

      await signIn("github", {
        callbackUrl: "/timesheets",
      });
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    handleLogin,
  };
}