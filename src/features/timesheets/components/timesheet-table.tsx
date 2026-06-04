"use client";

import { useMemo, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import TimesheetRow from "./timesheet-row";

import type { Timesheet } from "../types/timesheet.types";

type Props = {
  timesheets: Timesheet[];
};

export default function TimesheetTable({
  timesheets,
}: Props) {
 
  const [currentPage, setCurrentPage] =
    useState(1);

  const [rowsPerPage, setRowsPerPage] =
    useState(5);


  const totalPages = Math.ceil(
    timesheets.length / rowsPerPage
  );

 
  const paginatedTimesheets =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        rowsPerPage;

      const end =
        start + rowsPerPage;

      return timesheets.slice(
        start,
        end
      );
    }, [
      timesheets,
      currentPage,
      rowsPerPage,
    ]);


  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );


  function goToPage(page: number) {
    setCurrentPage(page);
  }


  function handleRowsChange(
    value: number
  ) {
    setRowsPerPage(value);

    setCurrentPage(1);
  }

  return (
    <div className="overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white">
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
            {paginatedTimesheets.map(
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

      <div className="flex flex-col gap-5 border-t border-[#E5E7EB] px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <select
          value={rowsPerPage}
          onChange={(e) =>
            handleRowsChange(
              Number(
                e.target.value
              )
            )
          }
          className="
            h-[44px]
            w-[140px]
            rounded-[12px]
            border
            border-[#D1D5DB]
            bg-white
            px-4
            text-[15px]
            text-[#374151]
            outline-none
            focus:border-[#2563EB]
          "
        >
          <option value={5}>
            5 per page
          </option>

          <option value={10}>
            10 per page
          </option>

          <option value={15}>
            15 per page
          </option>

          <option value={20}>
            20 per page
          </option>
        </select>

   
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() =>
              goToPage(
                currentPage - 1
              )
            }
            disabled={
              currentPage === 1
            }
            className="
              flex
              h-[42px]
              items-center
              gap-1
              rounded-[10px]
              border
              border-[#D1D5DB]
              bg-white
              px-4
              text-[14px]
              text-[#374151]
              transition
              hover:bg-[#F9FAFB]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <ChevronLeft size={16} />

            Previous
          </button>

        
          {pages.map((page) => (
            <button
              key={page}
              onClick={() =>
                goToPage(page)
              }
              className={`
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-[10px]
                border
                text-[14px]
                font-medium
                transition
                ${
                  currentPage ===
                  page
                    ? "border-[#2563EB] bg-[#EEF2FF] text-[#2563EB]"
                    : "border-[#D1D5DB] bg-white text-[#374151] hover:bg-[#F9FAFB]"
                }
              `}
            >
              {page}
            </button>
          ))}

       
          <button
            onClick={() =>
              goToPage(
                currentPage + 1
              )
            }
            disabled={
              currentPage ===
              totalPages
            }
            className="
              flex
              h-[42px]
              items-center
              gap-1
              rounded-[10px]
              border
              border-[#D1D5DB]
              bg-white
              px-4
              text-[14px]
              text-[#374151]
              transition
              hover:bg-[#F9FAFB]
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Next

            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}