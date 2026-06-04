// timesheet-filters.tsx
"use client";

import {
  Search,
  X,
} from "lucide-react";

type Props = {
  search: string;

  status: string;

  startDate: string;

  endDate: string;

  onSearchChange: (
    value: string
  ) => void;

  onStatusChange: (
    value: string
  ) => void;

  onStartDateChange: (
    value: string
  ) => void;

  onEndDateChange: (
    value: string
  ) => void;
};

export default function TimesheetFilters({
  search,
  status,
  startDate,
  endDate,
  onSearchChange,
  onStatusChange,
  onStartDateChange,
  onEndDateChange,
}: Props) {
  function handleClearFilters() {
    onSearchChange("");

    onStatusChange("");

    onStartDateChange("");

    onEndDateChange("");
  }

  const hasFilters =
    search ||
    status ||
    startDate ||
    endDate;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center">
     

      {/* Start Date */}
      <input
        type="date"
        value={startDate}
        onChange={(e) =>
          onStartDateChange(
            e.target.value
          )
        }
        className="
          h-[48px]
          rounded-[12px]
          border
          border-[#D1D5DB]
          bg-white
          px-4
          text-[14px]
          text-[#374151]
          outline-none
          transition
          focus:border-[#2563EB]
        "
      />

      {/* End Date */}
      <input
        type="date"
        value={endDate}
        onChange={(e) =>
          onEndDateChange(
            e.target.value
          )
        }
        className="
          h-[48px]
          rounded-[12px]
          border
          border-[#D1D5DB]
          bg-white
          px-4
          text-[14px]
          text-[#374151]
          outline-none
          transition
          focus:border-[#2563EB]
        "
      />

      {/* Status */}
      <select
        value={status}
        onChange={(e) =>
          onStatusChange(
            e.target.value
          )
        }
        className="
          h-[48px]
          rounded-[12px]
          border
          border-[#D1D5DB]
          bg-white
          px-4
          text-[14px]
          text-[#374151]
          outline-none
          transition
          focus:border-[#2563EB]
        "
      >
        <option value="">
          All Status
        </option>

        <option value="completed">
          Completed
        </option>

        <option value="incomplete">
          Incomplete
        </option>

        <option value="missing">
          Missing
        </option>
      </select>

      {/* Clear Filters */}
      <button
        type="button"
        onClick={handleClearFilters}
        disabled={!hasFilters}
        className="
          inline-flex
          h-[48px]
          items-center
          justify-center
          gap-2
          rounded-[12px]
          border
          border-[#D1D5DB]
          bg-white
          px-5
          text-[14px]
          font-medium
          text-[#374151]
          transition
          hover:bg-[#F9FAFB]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <X size={16} />

        Clear Filters
      </button>
    </div>
  );
}