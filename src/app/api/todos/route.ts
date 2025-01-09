import { read } from "@/models/todoModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const todos = await read();

  return NextResponse.json({
    status: 200,
    todos,
  });
};
