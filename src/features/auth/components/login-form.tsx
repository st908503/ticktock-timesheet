"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "../hooks/use-login";

import {
  loginSchema,
  type LoginSchemaValues,
} from "../schemas/login.schema";

export default function LoginForm() {
  const {
    handleLogin,
    isLoading,
    error,
  } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaValues>({
    resolver: zodResolver(
      loginSchema
    ),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit() {
  await handleLogin();
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[635px]"
    >
      <div className="space-y-8">
        {/* HEADING */}
        <div className="space-y-2">
          <h1 className="text-[28px] font-bold tracking-[-0.02em] text-[#111827]">
            Welcome back
          </h1>
        </div>

        {/* FIELDS */}
        <div className="space-y-5">
          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-[14px] font-medium text-[#111827]">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-4 text-[15px] text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2563EB]"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-[13px] text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <label className="text-[14px] font-medium text-[#111827]">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-4 text-[15px] text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2563EB]"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-[13px] text-red-500">
                {
                  errors.password
                    .message
                }
              </p>
            )}
          </div>

          {/* REMEMBER */}
          <div className="flex items-center gap-2 pt-1">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border border-[#D1D5DB]"
            />

            <label
              htmlFor="remember"
              className="text-[14px] text-[#6B7280]"
            >
              Remember me
            </label>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-[13px] text-red-500">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isLoading}
          className="h-[48px] w-full rounded-[10px] bg-[#1A56DB] text-[16px] font-medium text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading
            ? "Signing in..."
            : "Sign in"}
        </button>


        <div className="rounded-[14px] border border-dashed border-[#D1D5DB] bg-white p-5 text-[15px] leading-7 text-[#6B7280]">
          <span className="font-semibold text-[#111827]">
            Demo Credentials
          </span>

          <br />

          demo@xyz.com

          <br />

          password123
        </div>
      </div>
    </form>
  );
}