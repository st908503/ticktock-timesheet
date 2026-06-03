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
      className="w-full max-w-[640px]"
    >
      <div className="space-y-10">
        {/* HEADER */}
        <div className="space-y-3">
          <h1 className="text-[48px] font-extrabold tracking-[-0.03em] text-[#111827]">
            Welcome back
          </h1>

          <p className="text-[16px] text-[#6B7280]">
            Sign in to continue to TickTock
          </p>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-7">
          {/* EMAIL */}
          <div className="space-y-3">
            <label className="text-[16px] font-semibold text-[#111827]">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="h-[58px] w-full rounded-[14px] border border-[#D1D5DB] bg-white px-5 text-[16px] text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2563EB]"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="space-y-3">
            <label className="text-[16px] font-semibold text-[#111827]">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••••"
              className="h-[58px] w-full rounded-[14px] border border-[#D1D5DB] bg-white px-5 text-[16px] text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#2563EB]"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* REMEMBER ME */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="remember"
              className="h-5 w-5 rounded border border-[#D1D5DB]"
            />

            <label
              htmlFor="remember"
              className="text-[15px] text-[#6B7280]"
            >
              Remember me
            </label>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isLoading}
          className="h-[58px] w-full rounded-[14px] bg-[#2563EB] text-[18px] font-semibold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>

        {/* DEMO */}
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