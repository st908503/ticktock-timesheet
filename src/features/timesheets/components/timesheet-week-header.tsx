type Props = {
  startDate?: string;
  endDate?: string;
};

export default function TimesheetWeekHeader({
  startDate,
  endDate,
}: Props) {
  function formatRange() {
    if (
      !startDate ||
      !endDate
    ) {
      return "";
    }

    const start =
      new Date(startDate);

    const end =
      new Date(endDate);

    return `${start.getDate()} - ${end.getDate()} ${end.toLocaleDateString(
      "en-US",
      {
        month: "long",
        year: "numeric",
      }
    )}`;
  }

  return (
    <div>
      <h1 className="text-[20px] font-semibold tracking-tight text-gray-900">
        This week's timesheet
      </h1>

      <p className="mt-3 text-[15px] text-gray-500">
        {formatRange()}
      </p>
    </div>
  );
}