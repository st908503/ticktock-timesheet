export type TimesheetStatus =
  | "completed"
  | "incomplete"
  | "missing";

export type Timesheet = {
  id: string;
  weekNumber: number;
  startDate: string;
  endDate: string;
  status: TimesheetStatus;
  totalHours: number;
};

export type Entry = {
  id: string;
  weekId: string;
  date: string;
  projectName: string;
  workType: string;
  description: string;
  hours: number;
};