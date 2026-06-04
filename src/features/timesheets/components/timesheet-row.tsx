import Link from "next/link";

import { ChevronRight } from "lucide-react";

import StatusBadge from "@/components/shared/status-badge";

import { formatWeekRange } from "../utils/format-week";

import type { Timesheet } from "../types/timesheet.types";

type Props = {
  timesheet: Timesheet;
};

export default function TimesheetRow({
  timesheet,
}: Props) {
  const actionLabel =
    timesheet.status === "missing"
      ? "Create"
      : timesheet.status ===
          "incomplete"
        ? "Update"
        : "View";

  return (
    <tr className="border-b border-[#E5E7EB] bg-white transition hover:bg-[#FAFAFA]">
      {/* WEEK */}
      <td className="px-6 py-5 text-[15px] font-medium text-[#111827]">
        {timesheet.weekNumber}
      </td>

      {/* DATE */}
      <td className="px-6 py-5 text-[15px] text-[#6B7280]">
        {formatWeekRange(
          timesheet.startDate,
          timesheet.endDate
        )}
      </td>

      {/* STATUS */}
      <td className="px-6 py-5">
        <StatusBadge
          status={timesheet.status}
        />
      </td>

      {/* ACTION */}
      <td className="px-6 py-5 text-right">
        <Link
          href={`/timesheets/${timesheet.id}`}
          className="inline-flex w-full items-center justify-end gap-1 text-[15px] font-medium text-[#2563EB] transition hover:text-[#1D4ED8]"
        >
          {actionLabel}

          <ChevronRight className="h-4 w-4" />
        </Link>
      </td>
    </tr>
  );
}