"use client";

import { use, useMemo, useState } from "react";

import { Plus } from "lucide-react";

import EmptyState from "@/components/shared/empty-state";
import ErrorState from "@/components/shared/error-state";
import LoadingSpinner from "@/components/shared/loading-spinner";

import PageContainer from "@/components/layout/page-container";

import TaskEntryCard from "@/features/timesheets/components/task-entry-card";
import TaskEntryModal from "@/features/timesheets/components/task-entry-modal";
import WeeklyProgress from "@/features/timesheets/components/weekly-progress";

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

  // unwrap params
  const { weekId } = use(params);

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

  const totalHours = useMemo(() => {
    return entries.reduce(
      (acc, entry) =>
        acc + entry.hours,
      0
    );
  }, [entries]);

  function handleAddEntry() {
    setSelectedEntry(null);

    setOpen(true);
  }

  function handleEditEntry(
    entry: Entry
  ) {
    setSelectedEntry(entry);

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

      return;
    }

    await createEntry(values);
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
      <PageContainer
        title={`Week ${weekId}`}
        description="Manage weekly task entries"
        action={
          <button
            onClick={handleAddEntry}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Entry
          </button>
        }
      >
        <WeeklyProgress
          totalHours={totalHours}
        />

        <div className="space-y-4">
          {entries.length === 0 ? (
            <EmptyState
              title="No entries yet"
              description="Create your first task entry for this week."
            />
          ) : (
            entries.map((entry) => (
              <TaskEntryCard
                key={entry.id}
                entry={entry}
                onEdit={
                  handleEditEntry
                }
                onDelete={
                  deleteEntry
                }
              />
            ))
          )}
        </div>
      </PageContainer>

      <TaskEntryModal
        open={open}
        onOpenChange={setOpen}
        initialValues={
          selectedEntry || undefined
        }
        onSubmit={handleSubmit}
      />
    </>
  );
}