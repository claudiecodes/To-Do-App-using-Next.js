import { createTodo, readTodo } from "@/models/todo";

export const GET = async () => {
  const data = await readTodo();

  return Response.json({
    status: 200,
    data,
  });
};

export const POST = async (request: Request) => {
  const body = await request.json();
  await createTodo(body);

  return Response.json({
    status: 201,
    message: "Success add todo",
    body,
  });
};
