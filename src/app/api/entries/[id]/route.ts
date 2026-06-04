import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  deleteEntry,
  updateEntry,
} from "@/lib/mock-db";

export async function PUT(
  request: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await context.params;

  const body = await request.json();

  const updated = await updateEntry(
    id,
    body
  );

  return NextResponse.json(updated);
}

export async function DELETE(
  _: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await context.params;

  await deleteEntry(id);

  return NextResponse.json({
    success: true,
  });
}