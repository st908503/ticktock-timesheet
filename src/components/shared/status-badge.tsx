import { cn } from "@/lib/utils";

type Props = {
  status:
    | "completed"
    | "incomplete"
    | "missing";
};

const styles = {
  completed:
    "bg-[#DDF5EA] text-[#0F9D58]",

  incomplete:
    "bg-[#FCE68A] text-[#92400E]",

  missing:
    "bg-[#F9D5E5] text-[#BE185D]",
};

export default function StatusBadge({
  status,
}: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-3 py-[4px] text-[12px] font-semibold uppercase tracking-wide",
        styles[status]
      )}
    >
      {status}
    </div>
  );
}