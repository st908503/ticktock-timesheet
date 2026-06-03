"use client";

import { useEffect, useState } from "react";

import { getTimesheets } from "../services/timesheet.service";

import type { Timesheet } from "../types/timesheet.types";

export function useTimesheets() {
  const [timesheets, setTimesheets] = useState<
    Timesheet[]
  >([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTimesheets() {
      try {
        setIsLoading(true);

        const data = await getTimesheets();

        setTimesheets(data);
      } catch {
        setError("Failed to load timesheets");
      } finally {
        setIsLoading(false);
      }
    }

    loadTimesheets();
  }, []);

  return {
    timesheets,
    isLoading,
    error,
  };
}