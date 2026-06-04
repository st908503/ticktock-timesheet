"use client";

import { useState } from "react";

import { toast } from "sonner";

import users from "@/mock/users.json";

type LoginValues = {
  email: string;
  password: string;
};

export function useLogin() {
  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin({
    email,
    password,
  }: LoginValues) {
    try {
      setIsLoading(true);

      setError("");

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      const user = users.find(
        (item) =>
          item.email === email &&
          item.password === password
      );

      if (!user) {
        setError(
          "Invalid email or password"
        );

        toast.error(
          "Invalid credentials"
        );

        return false;
      }

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      toast.success(
        `Welcome back, ${user.name}`
      );

      window.location.replace(
        "/timesheets"
      );

      return true;
    } catch {
      setError("Something went wrong");

      toast.error(
        "Login failed"
      );

      return false;
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