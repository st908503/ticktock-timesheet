"use client";

import TaskRowMenu from "./task-row-menu";

import type { Entry } from "../types/timesheet.types";

type Props = {
  entry: Entry;
  onEdit: (entry: Entry) => void;
  onDelete: (id: string) => void;
};

export default function TimesheetTaskRow({
  entry,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-1.5">
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-gray-900">
          {entry.description}
        </p>
      </div>

      <div className="w-16 text-right text-sm text-gray-400">
        {entry.hours} hrs
      </div>

      <div className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
        {entry.projectName}
      </div>

      <TaskRowMenu
        onEdit={() => onEdit(entry)}
        onDelete={() =>
          onDelete(entry.id)
        }
      />
    </div>
  );
}