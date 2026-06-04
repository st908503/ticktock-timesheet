"use client";

import {
  useMemo,
  useState,
} from "react";

import { Plus } from "lucide-react";

import EmptyState from "@/components/shared/empty-state";

import ErrorState from "@/components/shared/error-state";

import LoadingSpinner from "@/components/shared/loading-spinner";

import PageContainer from "@/components/layout/page-container";

import TaskEntryCard from "./task-entry-card";

import TaskEntryModal from "./task-entry-modal";

import WeeklyProgress from "./weekly-progress";

import TimesheetFilters from "./timesheet-filters";

import { useTimesheetEntries } from "../hooks/use-timesheet-entries";

import type { Entry } from "../types/timesheet.types";

type Props = {
  weekId: string;
};

export default function TimesheetDetailsClient({
  weekId,
}: Props) {
  const {
    entries,
    isLoading,
    error,

    createEntry,
    updateEntry,
    deleteEntry,
  } = useTimesheetEntries(weekId);

  const [open, setOpen] =
    useState(false);

  const [selectedEntry, setSelectedEntry] =
    useState<Entry | null>(null);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const totalHours = useMemo(() => {
    return entries.reduce(
      (acc, entry) =>
        acc + entry.hours,
      0
    );
  }, [entries]);

  function getStatus(
    hours: number
  ) {
    if (hours >= 40)
      return "completed";

    if (hours > 0)
      return "incomplete";

    return "missing";
  }

  const filteredEntries =
    useMemo(() => {
      return entries.filter(
        (entry) => {
          const matchesSearch =
            entry.projectName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            entry.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const entryStatus =
            getStatus(entry.hours);

          const matchesStatus =
            status
              ? entryStatus ===
                status
              : true;

          const entryDate =
            new Date(entry.date);

          const matchesStart =
            startDate
              ? entryDate >=
                new Date(
                  startDate
                )
              : true;

          const matchesEnd =
            endDate
              ? entryDate <=
                new Date(endDate)
              : true;

          return (
            matchesSearch &&
            matchesStatus &&
            matchesStart &&
            matchesEnd
          );
        }
      );
    }, [
      entries,
      search,
      status,
      startDate,
      endDate,
    ]);

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
            className="
              inline-flex
              h-11
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <Plus className="h-4 w-4" />
            Add Entry
          </button>
        }
      >
        <div className="space-y-5">
 
          <TimesheetFilters
            search={search}
            status={status}
            startDate={startDate}
            endDate={endDate}
            onSearchChange={
              setSearch
            }
            onStatusChange={
              setStatus
            }
            onStartDateChange={
              setStartDate
            }
            onEndDateChange={
              setEndDate
            }
          />

          <WeeklyProgress
            totalHours={totalHours}
          />

       
          <div className="space-y-4">
            {filteredEntries.length ===
            0 ? (
              <EmptyState
                title="No matching entries"
                description="Try changing filters or add a new entry."
              />
            ) : (
              filteredEntries.map(
                (entry) => (
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
                )
              )
            )}
          </div>
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