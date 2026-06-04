
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EntryForm from "./entry-form";

import type { Entry } from "../types/timesheet.types";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues?: Partial<Entry>;
  onSubmit: (values: any) => Promise<void>;
};

export default function TaskEntryModal({
  open,
  onOpenChange,
  initialValues,
  onSubmit,
}: Props) {
  const isEdit = Boolean(initialValues?.id);

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
         !w-[92vw]
sm:!w-full
!max-w-[680px]

          rounded-2xl
          border
          border-[#E5E7EB]
          bg-white
          p-0
          shadow-xl

          overflow-hidden

          max-h-[85vh]
          flex
          flex-col

          top-[50%]
          translate-y-[-50%]
        "
      >
        
        <DialogHeader
          className="
            border-b
            px-4
            py-3
            shrink-0

            sm:px-5
          "
        >
          <DialogTitle
            className="
              text-[18px]
              font-semibold
              text-[#111827]

              sm:text-[20px]
            "
          >
            {isEdit
              ? "Edit Entry"
              : "Add New Entry"}
          </DialogTitle>
        </DialogHeader>

    
        <div
          className="
            overflow-y-auto
            px-4
            py-4

            sm:px-5
            sm:py-5
          "
        >
         <EntryForm
  defaultValues={initialValues}
  onCancel={() =>
    onOpenChange(false)
  }
  onSubmit={async (values) => {
    await onSubmit(values);

    onOpenChange(false);
  }}
/>
        </div>
      </DialogContent>
    </Dialog>
  );
}
