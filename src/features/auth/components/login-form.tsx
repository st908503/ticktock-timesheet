"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../hooks/use-login";
import {
  loginSchema,
  type LoginSchemaValues,
} from "../schemas/login.schema";

export default function LoginForm() {
  const { handleLogin, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchemaValues) {
    await handleLogin(values.email, values.password);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-6"
    >
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome back
        </h1>

        <p className="text-sm text-gray-500">
          Sign in to continue to TickTock
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="name@example.com"
            className="h-12 w-full rounded-lg border px-4 outline-none transition focus:border-blue-500"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="h-12 w-full rounded-lg border px-4 outline-none transition focus:border-blue-500"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="h-12 w-full rounded-lg bg-blue-600 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>

      <div className="rounded-lg border border-dashed p-4 text-sm text-gray-500">
        Demo Credentials:
        <br />
        demo@xyz.com
        <br />
        password123
      </div>
    </form>
  );
}