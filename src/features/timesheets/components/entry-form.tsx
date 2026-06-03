"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  entrySchema,
  type EntrySchemaValues,
} from "../schemas/entry.schema";

type Props = {
  defaultValues?: Partial<EntrySchemaValues>;

  onSubmit: (
    values: EntrySchemaValues
  ) => Promise<void>;

  isSubmitting?: boolean;
};

export default function EntryForm({
  defaultValues,
  onSubmit,
  isSubmitting,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EntrySchemaValues>({
    resolver: zodResolver(entrySchema),

    defaultValues: {
      projectName:
        defaultValues?.projectName || "",

      workType:
        defaultValues?.workType || "",

      description:
        defaultValues?.description || "",

      hours:
        defaultValues?.hours || 1,

      date:
        defaultValues?.date ||
        new Date()
          .toISOString()
          .split("T")[0],
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Project Name
        </label>

        <input
          {...register("projectName")}
          className="h-11 w-full rounded-lg border px-4"
        />

        {errors.projectName && (
          <p className="text-sm text-red-500">
            {
              errors.projectName
                .message
            }
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Work Type
        </label>

        <input
          {...register("workType")}
          className="h-11 w-full rounded-lg border px-4"
        />

        {errors.workType && (
          <p className="text-sm text-red-500">
            {
              errors.workType
                .message
            }
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          {...register(
            "description"
          )}
          className="w-full rounded-lg border p-4"
        />

        {errors.description && (
          <p className="text-sm text-red-500">
            {
              errors.description
                .message
            }
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Hours
          </label>

          <input
            type="number"
            {...register("hours", {
              valueAsNumber: true,
            })}
            className="h-11 w-full rounded-lg border px-4"
          />

          {errors.hours && (
            <p className="text-sm text-red-500">
              {
                errors.hours
                  .message
              }
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Date
          </label>

          <input
            type="date"
            {...register("date")}
            className="h-11 w-full rounded-lg border px-4"
          />

          {errors.date && (
            <p className="text-sm text-red-500">
              {
                errors.date
                  .message
              }
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full rounded-lg bg-blue-600 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting
          ? "Saving..."
          : "Save Entry"}
      </button>
    </form>
  );
}