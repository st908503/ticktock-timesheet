"use client";

import {
  ChevronDown,
  LogOut,
} from "lucide-react";

import { useSession } from "next-auth/react";

import { logout } from "@/features/auth/services/auth.service";

export default function Navbar() {
  const { data: session } =
    useSession();

  return (
    <header className="border-b border-[#E5E7EB] bg-white">
      <div className="flex h-[78px] items-center justify-between px-8">
        {/* LEFT */}
        <div className="flex items-center gap-14">
          {/* LOGO */}
          <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">
            ticktock
          </h1>

          {/* PAGE TITLE */}
          <span className="text-[15px] font-medium text-[#111827]">
            Timesheets
          </span>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => logout()}
          className="flex items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white px-5 py-3 text-[16px] font-medium text-[#6B7280] transition hover:bg-[#F9FAFB]"
        >
          {/* USER NAME */}
          <span>
            {session?.user?.name ||
              "John Doe"}
          </span>

          {/* DROPDOWN ICON */}
          <ChevronDown className="h-5 w-5" />

       
        </button>
      </div>
    </header>
  );
}