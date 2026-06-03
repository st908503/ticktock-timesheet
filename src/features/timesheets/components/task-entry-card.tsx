"use client";

import { Pencil, Trash2 } from "lucide-react";

import type {
  Entry,
} from "../types/timesheet.types";

type Props = {
  entry: Entry;

  onEdit: (entry: Entry) => void;

  onDelete: (id: string) => void;
};

export default function TaskEntryCard({
  entry,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 transition hover:shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold">
              {entry.projectName}
            </h3>

            <p className="text-sm text-gray-500">
              {entry.workType}
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-gray-600">
            {entry.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>
              {entry.hours} hours
            </span>

            <span>
              {entry.date}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(entry)}
            className="rounded-lg border p-2 transition hover:bg-gray-100"
          >
            <Pencil className="h-4 w-4" />
          </button>

          <button
            onClick={() =>
              onDelete(entry.id)
            }
            className="rounded-lg border p-2 transition hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}