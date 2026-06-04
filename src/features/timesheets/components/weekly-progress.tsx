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
    <div className="flex items-start justify-between">
      <div />

      <div className="w-[180px]">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            {totalHours}/40 hrs
          </span>

          <span className="text-sm font-medium text-gray-400">
            {progress}%
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-orange-400 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}