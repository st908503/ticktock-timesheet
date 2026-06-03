import type { ReactNode } from "react";

type Props = {
  title: string;

  description?: string;

  action?: ReactNode;

  children: ReactNode;
};

export default function PageContainer({
  title,
  description,
  action,
  children,
}: Props) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className="shrink-0">
            {action}
          </div>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}