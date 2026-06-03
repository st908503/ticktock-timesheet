import { NextResponse } from "next/server";

import users from "@/mock/users.json";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const { email, password } = body;

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}