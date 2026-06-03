import type { ReactNode } from "react";

import DashboardShell from "@/components/layout/dashboard-shell";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  );
}