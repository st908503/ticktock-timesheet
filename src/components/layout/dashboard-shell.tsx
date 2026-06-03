import type { ReactNode } from "react";

import Navbar from "./navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardShell({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl p-6">
        {children}
      </main>
    </div>
  );
}