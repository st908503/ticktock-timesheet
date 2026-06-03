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
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* DATE RANGE */}
      <select className="h-[52px] w-[190px] rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[16px] text-[#6B7280] outline-none">
        <option>Date Range</option>
      </select>

      {/* STATUS */}
      <select className="h-[52px] w-[150px] rounded-[12px] border border-[#D1D5DB] bg-white px-4 text-[16px] text-[#6B7280] outline-none">
        <option>Status</option>
      </select>

    
    </div>
  );
}