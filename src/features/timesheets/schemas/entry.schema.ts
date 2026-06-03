import { z } from "zod";

export const entrySchema = z.object({
  projectName: z
    .string()
    .min(1, "Project name is required"),

  workType: z
    .string()
    .min(1, "Work type is required"),

  description: z
    .string()
    .min(
      5,
      "Description must be at least 5 characters"
    ),

  hours: z
    .number()
    .min(1, "Minimum 1 hour")
    .max(24, "Maximum 24 hours"),

  date: z
    .string()
    .min(1, "Date is required"),
});

export type EntrySchemaValues = z.infer<
  typeof entrySchema
>;