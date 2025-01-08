import { read } from "@/models/todoModel";

export const GET = async () => {
  const todos = await read();

  return Response.json({
    status: 200,
    todos,
  });
};
