import { NextResponse } from "next/server";

import { getEntriesByWeekId } from "@/lib/mock-db";

type Params = {
  params: Promise<{
    weekId: string;
  }>;
};

export async function GET(
  _: Request,
  { params }: Params
) {

  const { weekId } = await params;

  const entries =
    await getEntriesByWeekId(weekId);

  return NextResponse.json(entries);
}