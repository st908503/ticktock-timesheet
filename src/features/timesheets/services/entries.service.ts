import { fetcher } from "@/lib/fetcher";

import type {
  Entry,
} from "../types/timesheet.types";

export async function getEntriesByWeekId(
  weekId: string
) {
  return fetcher<Entry[]>(
    `/api/timesheets/${weekId}`
  );
}

export async function createEntry(
  payload: Partial<Entry>
) {
  return fetcher<Entry>("/api/entries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateEntry(
  id: string,
  payload: Partial<Entry>
) {
  return fetcher<Entry>(
    `/api/entries/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    }
  );
}

export async function deleteEntry(id: string) {
  return fetcher(`/api/entries/${id}`, {
    method: "DELETE",
  });
}