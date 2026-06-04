

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TickTock Timesheets",
  description:
    "Timesheet management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}

          <Toaster
            position="top-right"
            richColors
            closeButton
          />
        </Providers>
      </body>
    </html>
  );
}

