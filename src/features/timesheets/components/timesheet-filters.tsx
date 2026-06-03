"use client";

type Props = {
  search: string;
  onSearchChange: (
    value: string
  ) => void;
};

export default function TimesheetFilters({
  search,
  onSearchChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold">
          Timesheets
        </h2>

        <p className="text-sm text-gray-500">
          Manage and review submitted timesheets
        </p>
      </div>

      <input
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        placeholder="Search week..."
        className="h-11 rounded-lg border px-4 outline-none focus:border-blue-500"
      />
    </div>
  );
}