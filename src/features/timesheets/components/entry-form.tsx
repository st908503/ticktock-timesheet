// entry-form.tsx
"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  ChevronDown,
  Minus,
  Plus,
  Info,
} from "lucide-react";

import {
  entrySchema,
  type EntrySchemaValues,
} from "../schemas/entry.schema";

type Props = {
  defaultValues?: Partial<EntrySchemaValues>;

  onSubmit: (
    values: EntrySchemaValues
  ) => Promise<void>;

  onCancel: () => void;

  isSubmitting?: boolean;
};

const PROJECTS = [
  "Project Name",
  "CRM Dashboard",
  "Website Revamp",
];

const WORK_TYPES = [
  "Bug fixes",
  "Development",
  "Testing",
];

export default function EntryForm({
  defaultValues,
  onSubmit,
  onCancel,
  isSubmitting,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EntrySchemaValues>({
    resolver: zodResolver(entrySchema),

    defaultValues: {
      projectName:
        defaultValues?.projectName ||
        "Project Name",

      workType:
        defaultValues?.workType ||
        "Bug fixes",

      description:
        defaultValues?.description ||
        "",

      hours:
        defaultValues?.hours || 12,

      date:
        defaultValues?.date ||
        new Date()
          .toISOString()
          .split("T")[0],
    },
  });

  const hours = watch("hours");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Project */}
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          <label className="text-[13px] font-medium text-[#111827]">
            Select Project *
          </label>

          <Info
            size={13}
            className="text-[#9CA3AF]"
          />
        </div>

        <div className="relative">
          <select
            {...register("projectName")}
            className="
              h-[46px]
              w-full
              appearance-none
              rounded-lg
              border
              border-[#D1D5DB]
              bg-white
              px-3
              text-[13px]
              text-[#374151]
              outline-none
              transition
              focus:border-[#2563EB]
            "
          >
            {PROJECTS.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#6B7280]
            "
          />
        </div>

        {errors.projectName && (
          <p className="text-xs text-red-500">
            {
              errors.projectName
                .message
            }
          </p>
        )}
      </div>

      {/* Work Type */}
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          <label className="text-[13px] font-medium text-[#111827]">
            Type of Work *
          </label>

          <Info
            size={13}
            className="text-[#9CA3AF]"
          />
        </div>

        <div className="relative">
          <select
            {...register("workType")}
            className="
              h-[46px]
              w-full
              appearance-none
              rounded-lg
              border
              border-[#D1D5DB]
              bg-white
              px-3
              text-[13px]
              text-[#374151]
              outline-none
              transition
              focus:border-[#2563EB]
            "
          >
            {WORK_TYPES.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#6B7280]
            "
          />
        </div>

        {errors.workType && (
          <p className="text-xs text-red-500">
            {
              errors.workType
                .message
            }
          </p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-[13px] font-medium text-[#111827]">
          Task Description *
        </label>

        <textarea
          rows={3}
          placeholder="Write text here ..."
          {...register(
            "description"
          )}
          className="
            w-full
            resize-none
            rounded-lg
            border
            border-[#D1D5DB]
            bg-white
            p-3
            text-[13px]
            text-[#111827]
            outline-none
            focus:border-[#2563EB]
          "
        />

        <p className="text-[11px] text-[#6B7280]">
          A note for extra info
        </p>

        {errors.description && (
          <p className="text-xs text-red-500">
            {
              errors.description
                .message
            }
          </p>
        )}
      </div>

      {/* Hours */}
      <div className="space-y-2">
        <label className="text-[13px] font-medium text-[#111827]">
          Hours *
        </label>

        <div
          className="
            flex
            h-[46px]
            w-[120px]
            overflow-hidden
            rounded-lg
            border
            border-[#D1D5DB]
            bg-white
          "
        >
          <button
            type="button"
            onClick={() =>
              setValue(
                "hours",
                Math.max(
                  1,
                  Number(hours) - 1
                )
              )
            }
            className="
              flex
              w-10
              items-center
              justify-center
              border-r
              border-[#E5E7EB]
              text-[#111827]
            "
          >
            <Minus size={14} />
          </button>

          <div
            className="
              flex
              flex-1
              items-center
              justify-center
              text-[13px]
              text-[#374151]
            "
          >
            {hours}
          </div>

          <button
            type="button"
            onClick={() =>
              setValue(
                "hours",
                Number(hours) + 1
              )
            }
            className="
              flex
              w-10
              items-center
              justify-center
              border-l
              border-[#E5E7EB]
              text-[#111827]
            "
          >
            <Plus size={14} />
          </button>
        </div>

        {errors.hours && (
          <p className="text-xs text-red-500">
            {
              errors.hours
                .message
            }
          </p>
        )}
      </div>

      {/* Date */}
      <div className="space-y-2">
        <label className="text-[13px] font-medium text-[#111827]">
          Date *
        </label>

        <input
          type="date"
          {...register("date")}
          className="
            h-[46px]
            w-full
            rounded-lg
            border
            border-[#D1D5DB]
            bg-white
            px-3
            text-[13px]
            text-[#374151]
            outline-none
            transition
            focus:border-[#2563EB]
          "
        />

        {errors.date && (
          <p className="text-xs text-red-500">
            {errors.date.message}
          </p>
        )}
      </div>

      {/* Footer Buttons */}
      <div
        className="
          mt-6
          flex
          flex-col-reverse
          gap-3
          border-t
          pt-5

          sm:flex-row
        "
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            h-[46px]
            flex-1
            rounded-lg
            bg-[#2563EB]
            text-[13px]
            font-medium
            text-white
            transition
            hover:bg-[#1D4ED8]
            disabled:opacity-50
          "
        >
          {isSubmitting
            ? "Saving..."
            : "Add Entry"}
        </button>

       <button
  type="button"
  onClick={onCancel}
  className="
    h-[46px]
    flex-1
    rounded-lg
    border
    border-[#D1D5DB]
    bg-white
    text-[13px]
    font-medium
    text-[#111827]
    transition
    hover:bg-gray-50
  "
>
  Cancel
</button>
      </div>
    </form>
  );
}