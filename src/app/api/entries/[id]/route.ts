import { NextResponse } from "next/server";

import {deleteEntry,updateEntry} from "@/lib/mock-db";

type Params = {
  params: {
    id: string;
  };
};

export async function PUT(
  request: Request,
  { params }: Params
) {
  const body = await request.json();

  const updated = await updateEntry(
    params.id,
    body
  );

  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: Params
) {
  await deleteEntry(params.id);

  return NextResponse.json({
    success: true,
  });
}