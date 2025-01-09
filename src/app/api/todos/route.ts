import { read, readByCategory } from "@/models/todoModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  const todos = await read();

  return NextResponse.json({
    status: 200,
    todos,
  });
};

export const GET_BY_CATEGORY = async () => {
  const todos = await readByCategory();

  return NextResponse.json({
    status: 200,
    todos,
  });
};
