// components/navbar.tsx
"use client";

import { useState } from "react";

import {
  ChevronDown,
  LogOut,
} from "lucide-react";

import { useSession } from "next-auth/react";

import { logout } from "@/features/auth/services/auth.service";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Navbar() {
  const { data: session } =
    useSession();

  const [open, setOpen] =
    useState(false);

  async function handleLogout() {
    await logout();
  }

  return (
    <>
      <header className="border-b border-[#E5E7EB] bg-white">
        <div className="flex h-[78px] items-center justify-between px-8">
          {/* Left */}
          <div className="flex items-center gap-14">
            <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#111827]">
              ticktock
            </h1>

            <span className="text-[15px] font-medium text-[#111827]">
              Timesheets
            </span>
          </div>

          {/* Right */}
          <button
            onClick={() =>
              setOpen(true)
            }
            className="
              flex
              items-center
              gap-3
              rounded-[12px]
              border
              border-[#E5E7EB]
              bg-white
              px-5
              py-3
              text-[15px]
              font-medium
              text-[#6B7280]
              transition
              hover:bg-[#F9FAFB]
            "
          >
            <span>
              {session?.user?.name ||
                "John Doe"}
            </span>

            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent
          className="
            !w-[92vw]
            sm:!w-full
            !max-w-[420px]

            rounded-2xl
            border
            border-[#E5E7EB]
            bg-white
            p-0
            shadow-xl
            overflow-hidden
          "
        >
          <DialogHeader className="border-b px-5 py-4">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                "
              >
                <LogOut className="h-5 w-5 text-red-500" />
              </div>

              <div>
                <DialogTitle className="text-[18px] font-semibold text-[#111827]">
                  Logout
                </DialogTitle>

                <DialogDescription className="mt-1 text-[13px] text-[#6B7280]">
                  Are you sure you want
                  to logout?
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Footer */}
          <div className="flex gap-3 px-5 py-5">
            <button
              type="button"
              onClick={() =>
                setOpen(false)
              }
              className="
                h-[44px]
                flex-1
                rounded-lg
                border
                border-[#D1D5DB]
                bg-white
                text-[14px]
                font-medium
                text-[#111827]
                transition
                hover:bg-gray-50
              "
            >
              No
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="
                h-[44px]
                flex-1
                rounded-lg
                bg-red-500
                text-[14px]
                font-medium
                text-white
                transition
                hover:bg-red-600
              "
            >
              Yes, Logout
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}