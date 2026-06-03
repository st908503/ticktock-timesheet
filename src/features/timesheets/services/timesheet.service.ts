import { fetcher } from "@/lib/fetcher";

import type { Timesheet } from "../types/timesheet.types";

export async function getTimesheets() {
  return fetcher<Timesheet[]>("/api/timesheets");
}