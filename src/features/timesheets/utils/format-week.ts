import { format } from "date-fns";

export function formatWeekRange(
  startDate: string,
  endDate: string
) {
  return `${format(new Date(startDate), "MMM dd")} - ${format(
    new Date(endDate),
    "MMM dd, yyyy"
  )}`;
}