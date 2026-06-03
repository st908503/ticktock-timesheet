import { NextResponse } from "next/server";

import { getEntriesByWeekId } from "@/lib/mock-db";

type Params = {
  params: {
    weekId: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const entries = await getEntriesByWeekId(params.weekId);

  return NextResponse.json(entries);
}