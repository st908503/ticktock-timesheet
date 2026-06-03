"use client";

import { ChevronDown, LogOut } from "lucide-react";

import { useSession } from "next-auth/react";

import { logout } from "@/features/auth/services/auth.service";

export default function Navbar() {
  const { data: session } =
    useSession();

  return (
    <header className="h-16 border-b bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold">
            ticktock
          </h1>

          <span className="text-sm font-medium text-gray-500">
            Timesheets
          </span>
        </div>

        <button
          onClick={() => logout()}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-50"
        >
          {session?.user?.name}

          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}