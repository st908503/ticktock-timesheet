type Props = {
  title: string;
  description?: string;
};

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-xl border border-dashed bg-white p-12 text-center">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}