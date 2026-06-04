import TimesheetRow from "./timesheet-row";

import type { Timesheet } from "../types/timesheet.types";

type Props = {
  timesheets: Timesheet[];
};

export default function TimesheetTable({
  timesheets,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white">
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#F9FAFB]">
            <tr className="border-b border-[#E5E7EB]">
              <th className="px-6 py-5 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                WEEK #
              </th>

              <th className="px-6 py-5 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                DATE
              </th>

              <th className="px-6 py-5 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                STATUS
              </th>

              <th className="px-6 py-5 text-right text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody>
            {timesheets.map(
              (timesheet) => (
                <TimesheetRow
                  key={timesheet.id}
                  timesheet={timesheet}
                />
              )
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col gap-5 border-t border-[#E5E7EB] px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <select className="h-[44px] w-[140px] rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[15px] text-[#374151] outline-none">
          <option>
            5 per page
          </option>
        </select>

        <div className="flex items-center overflow-hidden rounded-[12px] border border-[#D1D5DB]">
          {[
            "Previous",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "...",
            "99",
            "Next",
          ].map((item) => (
            <button
              key={item}
              className={`h-[44px] border-r border-[#E5E7EB] px-4 text-[15px]
              ${
                item === "3"
                  ? "bg-[#EEF2FF] font-medium text-[#2563EB]"
                  : "bg-white text-[#374151]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      
    </div>
  );
}