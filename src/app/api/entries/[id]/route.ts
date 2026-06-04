import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  deleteEntry,
  updateEntry,
} from "@/lib/mock-db";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(
  request: NextRequest,
  { params }: Params
) {

  // unwrap async params
  const { id } = await params;

  const body = await request.json();

  const updated =
    await updateEntry(
      id,
      body
    );

  return NextResponse.json(updated);
}

export async function DELETE(
  _: NextRequest,
  { params }: Params
) {

  // unwrap async params
  const { id } = await params;

  await deleteEntry(id);

  return NextResponse.json({
    success: true,
  });
}