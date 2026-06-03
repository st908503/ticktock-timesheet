type Props = {
  message: string;
};

export default function ErrorState({
  message,
}: Props) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6">
      <p className="text-sm font-medium text-red-600">
        {message}
      </p>
    </div>
  );
}