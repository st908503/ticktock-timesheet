"use client";

import {
  use,
  useMemo,
  useState,
} from "react";

import { toast } from "sonner";

import EmptyState from "@/components/shared/empty-state";
import ErrorState from "@/components/shared/error-state";
import LoadingSpinner from "@/components/shared/loading-spinner";

import WeeklyProgress from "@/features/timesheets/components/weekly-progress";
import TimesheetDayGroup from "@/features/timesheets/components/timesheet-day-group";
import TimesheetWeekHeader from "@/features/timesheets/components/timesheet-week-header";
import TaskEntryModal from "@/features/timesheets/components/task-entry-modal";

import { useTimesheetEntries } from "@/features/timesheets/hooks/use-timesheet-entries";

import type {
  Entry,
} from "@/features/timesheets/types/timesheet.types";

type Props = {
  params: Promise<{
    weekId: string;
  }>;
};

export default function TimesheetDetailsPage({
  params,
}: Props) {
  const { weekId } =
    use(params);

  const {
    entries,
    isLoading,
    error,

    createEntry,
    updateEntry,
    deleteEntry,
  } = useTimesheetEntries(
    weekId
  );

  const [open, setOpen] =
    useState(false);

  const [selectedEntry, setSelectedEntry] =
    useState<Entry | null>(null);

  const [selectedDate, setSelectedDate] =
    useState<string>();

  const totalHours = useMemo(() => {
    return entries.reduce(
      (acc, entry) =>
        acc + entry.hours,
      0
    );
  }, [entries]);

  const groupedEntries =
    useMemo(() => {
      const grouped: Record<
        string,
        Entry[]
      > = {};

      entries.forEach((entry) => {
        if (
          !grouped[entry.date]
        ) {
          grouped[entry.date] =
            [];
        }

        grouped[
          entry.date
        ].push(entry);
      });

      return Object.entries(
        grouped
      ).sort(
        ([dateA], [dateB]) =>
          new Date(
            dateA
          ).getTime() -
          new Date(
            dateB
          ).getTime()
      );
    }, [entries]);

  function handleEditEntry(
    entry: Entry
  ) {
    setSelectedDate(
      undefined
    );

    setSelectedEntry(entry);

    setOpen(true);
  }

  function handleAddTask(
    date: string
  ) {
    setSelectedEntry(null);

    setSelectedDate(date);

    setOpen(true);
  }

  async function handleSubmit(
    values: any
  ) {
    if (selectedEntry) {
      await updateEntry(
        selectedEntry.id,
        values
      );

      toast.success(
        "Task updated successfully"
      );

      return;
    }

    await createEntry(values);

    toast.success(
      "Task added successfully"
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorState message={error} />
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="mb-8">
            <div className="flex items-start justify-between">
              <div>
                <TimesheetWeekHeader />

                {groupedEntries.length >
                  0 && (
                  <p className="mt-3 text-[#6B7280]">
                    {new Date(
                      groupedEntries[0][0]
                    ).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month:
                          "short",
                      }
                    )}{" "}
                    -{" "}
                    {new Date(
                      groupedEntries[
                        groupedEntries.length -
                          1
                      ][0]
                    ).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month:
                          "short",
                        year:
                          "numeric",
                      }
                    )}
                  </p>
                )}
              </div>

              <WeeklyProgress
                totalHours={
                  totalHours
                }
              />
            </div>
          </div>

          {entries.length ===
          0 ? (
            <EmptyState
              title="No entries yet"
              description="Create your first task entry."
            />
          ) : (
            <div className="space-y-8">
              {groupedEntries.map(
                ([
                  date,
                  dayEntries,
                ]) => (
                  <TimesheetDayGroup
                    key={date}
                    date={date}
                    entries={
                      dayEntries
                    }
                    onAddTask={
                      handleAddTask
                    }
                    onEdit={
                      handleEditEntry
                    }
                    onDelete={
                      deleteEntry
                    }
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>

      <TaskEntryModal
        open={open}
        onOpenChange={setOpen}
        initialValues={
          selectedEntry
            ? selectedEntry
            : selectedDate
              ? {
                  date:
                    selectedDate,
                }
              : undefined
        }
        onSubmit={
          handleSubmit
        }
      />

      <div className="border-t border-[#E5E7EB] py-10 text-center text-[15px] text-[#6B7280]">
        © 2026 tentwenty. All rights
        reserved.
      </div>
    </>
  );
}