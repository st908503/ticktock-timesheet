"use client";

import { Plus } from "lucide-react";

import TimesheetTaskRow from "./timesheet-task-row";

import type { Entry } from "../types/timesheet.types";

type Props = {
  date: string;
  entries: Entry[];

  onAddTask: (
    date: string
  ) => void;

  onEdit: (
    entry: Entry
  ) => void;

  onDelete: (
    id: string
  ) => void;
};

export default function TimesheetDayGroup({
  date,
  entries,
  onAddTask,
  onEdit,
  onDelete,
}: Props) {
  const formattedDate =
    new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
      }
    );

  return (
    <div className="grid grid-cols-[80px_1fr] gap-6">
      <div>
        <p className="pt-1 text-[18px] font-semibold text-gray-900">
          {formattedDate}
        </p>
      </div>

      <div className="space-y-2">
        {entries.map((entry) => (
          <TimesheetTaskRow
            key={entry.id}
            entry={entry}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}

        <button
          onClick={() =>
            onAddTask(date)
          }
          className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-white text-sm font-medium text-gray-500 transition hover:border-blue-400 hover:text-blue-600"
        >
          <Plus className="h-4 w-4" />
          Add new task
        </button>
      </div>
    </div>
  );
}