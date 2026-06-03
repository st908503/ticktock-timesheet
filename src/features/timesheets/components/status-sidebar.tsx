export default function StatusSidebar() {
  return (
    <aside className="hidden w-[290px] shrink-0 xl:block">
      <div className="space-y-5">
        {/* STATUS CARD */}
        <div className="rounded-[10px] bg-[#F4D35E] p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F9D58] text-[28px] font-bold text-white">
              3
            </div>

            <h3 className="text-[28px] font-bold text-[#111827]">
              Statuses
            </h3>
          </div>

          <div className="space-y-5 text-[15px] leading-7 text-[#111827]">
            <p>
              completed = 40 hours added by the user
            </p>

            <p>
              incomplete = less than 40 hours added by the user
            </p>

            <p>
              missing = no hours added by the user
            </p>
          </div>

          <p className="mt-8 text-[14px] text-[#7C5E10]">
            TenTwenty Developers
          </p>
        </div>

        {/* FILTERS CARD */}
        <div className="rounded-[10px] bg-[#F4D35E] p-6">
          <h3 className="mb-6 text-[28px] font-bold text-[#111827]">
            Filters
          </h3>

          <div className="space-y-4 text-[15px] leading-7 text-[#111827]">
            <p className="font-medium">
              Date Range
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Note: If the selected range covers multiple weeks,
                it should show all those weeks in the result
              </li>
            </ul>
          </div>

          <p className="mt-8 text-[14px] text-[#7C5E10]">
            TenTwenty Developers
          </p>
        </div>
      </div>
    </aside>
  );
}