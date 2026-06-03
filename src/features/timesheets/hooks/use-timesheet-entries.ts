"use client";

import { useEffect, useState } from "react";

import {
  createEntry,
  deleteEntry,
  getEntriesByWeekId,
  updateEntry,
} from "../services/entries.service";

import type {
  Entry,
} from "../types/timesheet.types";

export function useTimesheetEntries(
  weekId: string
) {
  const [entries, setEntries] = useState<Entry[]>(
    []
  );

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] = useState("");

  async function loadEntries() {
    try {
      setIsLoading(true);

      const data = await getEntriesByWeekId(
        weekId
      );

      setEntries(data);
    } catch {
      setError("Failed to load entries");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadEntries();
  }, [weekId]);

  async function handleCreateEntry(
    payload: Partial<Entry>
  ) {
    const created = await createEntry({
      ...payload,
      weekId,
    });

    setEntries((prev) => [
      created,
      ...prev,
    ]);
  }

  async function handleUpdateEntry(
    id: string,
    payload: Partial<Entry>
  ) {
    const updated = await updateEntry(
      id,
      payload
    );

    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? updated : entry
      )
    );
  }

  async function handleDeleteEntry(
    id: string
  ) {
    await deleteEntry(id);

    setEntries((prev) =>
      prev.filter((entry) => entry.id !== id)
    );
  }

  return {
    entries,
    isLoading,
    error,

    createEntry:
      handleCreateEntry,

    updateEntry:
      handleUpdateEntry,

    deleteEntry:
      handleDeleteEntry,
  };
}