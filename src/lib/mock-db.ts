import timesheets from "@/mock/timesheets.json";
import entriesData from "@/mock/entries.json";


let entries = [...entriesData];

export async function getTimesheets() {
  return timesheets;
}

export async function getTimesheetById(id: string) {
  return timesheets.find(
    (item) => item.id === id
  );
}

export async function getEntriesByWeekId(
  weekId: string
) {
  return entries.filter(
    (entry) => entry.weekId === weekId
  );
}

export async function createEntry(data: any) {
  const newEntry = {
    id: crypto.randomUUID(),
    ...data,
  };

  entries.push(newEntry);

  return newEntry;
}

export async function updateEntry(
  id: string,
  data: any
) {
  entries = entries.map((entry) =>
    entry.id === id
      ? { ...entry, ...data }
      : entry
  );

  return entries.find(
    (entry) => entry.id === id
  );
}

export async function deleteEntry(id: string) {
  entries = entries.filter(
    (entry) => entry.id !== id
  );

  return true;
}