import TimesheetRow from "./timesheet-row";

import type { Timesheet } from "../types/timesheet.types";

type Props = {
  timesheets: Timesheet[];
};

export default function TimesheetTable({
  timesheets,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="px-6 py-4 font-medium">
                Week #
              </th>

              <th className="px-6 py-4 font-medium">
                Date
              </th>

              <th className="px-6 py-4 font-medium">
                Status
              </th>

              <th className="px-6 py-4 font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {timesheets.map((timesheet) => (
              <TimesheetRow
                key={timesheet.id}
                timesheet={timesheet}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}