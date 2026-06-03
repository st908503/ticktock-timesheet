"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { login } from "../services/auth.service";

export function useLogin() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(email: string, password: string) {
    try {
      setIsLoading(true);
      setError("");

      const response = await login({
        email,
        password,
      });

      if (response?.error) {
        setError("Invalid email or password");
        return;
      }

      router.push("/timesheets");
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