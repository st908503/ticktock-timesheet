import { NextResponse } from "next/server";

import { createEntry } from "@/lib/mock-db";

export async function POST(request: Request) {
  const body = await request.json();

  const entry = await createEntry(body);

  return NextResponse.json(entry);
}