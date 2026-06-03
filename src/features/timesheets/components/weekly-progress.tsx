import { calculateProgress } from "../utils/calculate-progress";

type Props = {
  totalHours: number;
};

export default function WeeklyProgress({
  totalHours,
}: Props) {
  const progress =
    calculateProgress(totalHours);

  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Weekly Progress
          </h2>

          <p className="text-sm text-gray-500">
            Track submitted hours
          </p>
        </div>

        <span className="text-2xl font-bold">
          {totalHours}h
        </span>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">
        <div
          style={{
            width: `${progress}%`,
          }}
          className="h-full rounded-full bg-blue-600 transition-all"
        />
      </div>

      <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
        <span>0h</span>

        <span>40h target</span>
      </div>
    </div>
  );
}