import { cn } from "@/lib/utils";

type Props = {
  status: "completed" | "incomplete" | "missing";
};

const styles = {
  completed:
    "bg-green-100 text-green-700",

  incomplete:
    "bg-yellow-100 text-yellow-700",

  missing:
    "bg-pink-100 text-pink-700",
};

export default function StatusBadge({
  status,
}: Props) {
  return (
    <div
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase",
        styles[status]
      )}
    >
      {status}
    </div>
  );
}