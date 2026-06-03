"use client";

import { useMemo, useState } from "react";

import EmptyState from "@/components/shared/empty-state";
import ErrorState from "@/components/shared/error-state";
import LoadingSpinner from "@/components/shared/loading-spinner";

import TimesheetFilters from "@/features/timesheets/components/timesheet-filters";

import TimesheetTable from "@/features/timesheets/components/timesheet-table";

import StatusSidebar from "@/features/timesheets/components/status-sidebar";

import { useTimesheets } from "@/features/timesheets/hooks/use-timesheets";

export default function TimesheetsPage() {
  const {
    timesheets,
    isLoading,
    error,
  } = useTimesheets();

  const [search, setSearch] =
    useState("");

  const filteredTimesheets =
    useMemo(() => {
      return timesheets.filter(
        (timesheet) =>
          `week ${timesheet.weekNumber}`
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [timesheets, search]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorState message={error} />
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[1500px] gap-8 px-6 py-2">
      {/* MAIN CONTENT */}
      <div className="flex-1 rounded-[12px] border border-[#E5E7EB] bg-white">
        <div className="p-6">
          {/* HEADING */}
          <div className="mb-8">
            <h1 className="text-[24px] font-bold tracking-[-0.03em] text-[#111827]">
              Your Timesheets
            </h1>
          </div>

          {/* FILTERS */}
          <TimesheetFilters
            search={search}
            onSearchChange={
              setSearch
            }
          />

          {/* TABLE */}
          <div className="mt-8">
            {filteredTimesheets.length ===
            0 ? (
              <EmptyState
                title="No timesheets found"
                description="Try adjusting your search."
              />
            ) : (
              <TimesheetTable
                timesheets={
                  filteredTimesheets
                }
              />
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#E5E7EB] py-10 text-center text-[15px] text-[#6B7280]">
          © 2026 tentwenty. All rights
          reserved.
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      {/* <StatusSidebar /> */}
    </div>
  );
}