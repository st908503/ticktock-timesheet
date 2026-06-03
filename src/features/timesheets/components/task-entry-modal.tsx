"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EntryForm from "./entry-form";

import type {
  Entry,
} from "../types/timesheet.types";

type Props = {
  open: boolean;

  onOpenChange: (
    open: boolean
  ) => void;

  initialValues?: Partial<Entry>;

  onSubmit: (
    values: any
  ) => Promise<void>;
};

export default function TaskEntryModal({
  open,
  onOpenChange,
  initialValues,
  onSubmit,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {initialValues
              ? "Edit Entry"
              : "Add Entry"}
          </DialogTitle>
        </DialogHeader>

        <EntryForm
          defaultValues={initialValues}
          onSubmit={async (values) => {
            await onSubmit(values);

            onOpenChange(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}