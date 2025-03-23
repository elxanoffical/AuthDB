import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import User from "../../../lib/models/User";

export async function POST(req) {
  await connectDB();

  const { Fullname, username, password } = req.json();

  try {
    const newUser = await new User({ Fullname, username, password });
    await newUser.save();
    return NextResponse.json(
      { mes: "User added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ mes: error.message }, { status: 500 });
  }
}
