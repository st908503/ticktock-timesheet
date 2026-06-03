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
  return (
    <tr className="border-b bg-white transition hover:bg-gray-50">
      <td className="px-6 py-4 font-medium">
        Week {timesheet.weekNumber}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600">
        {formatWeekRange(
          timesheet.startDate,
          timesheet.endDate
        )}
      </td>

      <td className="px-6 py-4">
        <StatusBadge status={timesheet.status} />
      </td>

      <td className="px-6 py-4">
        <Link
          href={`/timesheets/${timesheet.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View

          <ChevronRight className="h-4 w-4" />
        </Link>
      </td>
    </tr>
  );
}