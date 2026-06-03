import { NextResponse } from "next/server";

import { getTimesheets } from "@/lib/mock-db";

export async function GET() {
  const data = await getTimesheets();

  return NextResponse.json(data);
}