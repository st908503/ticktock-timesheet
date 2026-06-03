"use client";

import { useMemo, useState } from "react";

import EmptyState from "@/components/shared/empty-state";
import ErrorState from "@/components/shared/error-state";
import LoadingSpinner from "@/components/shared/loading-spinner";

import TimesheetFilters from "@/features/timesheets/components/timesheet-filters";
import TimesheetTable from "@/features/timesheets/components/timesheet-table";

import { useTimesheets } from "@/features/timesheets/hooks/use-timesheets";

export default function TimesheetsPage() {
  const {
    timesheets,
    isLoading,
    error,
  } = useTimesheets();

  const [search, setSearch] = useState("");

  const filteredTimesheets = useMemo(() => {
    return timesheets.filter((timesheet) =>
      `week ${timesheet.weekNumber}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [timesheets, search]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <div className="space-y-6">
      <TimesheetFilters
        search={search}
        onSearchChange={setSearch}
      />

      {filteredTimesheets.length === 0 ? (
        <EmptyState
          title="No timesheets found"
          description="Try adjusting your search."
        />
      ) : (
        <TimesheetTable
          timesheets={filteredTimesheets}
        />
      )}
    </div>
  );
}