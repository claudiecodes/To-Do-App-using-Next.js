import { createTodo, deleteTodo, readTodo, updateTodo } from "@/models/todo";

export const GET = async () => {
  const response = await readTodo();
  const responseJson = await response.json();

  return Response.json({
    status: 200,
    todos: responseJson,
  });
};

export const POST = async (request: Request) => {
  const { title, category } = await request.json();
  const response = await createTodo({ title, category });
  const responseJson = await response.json();

  return Response.json({
    status: 201,
    message: "Successfully add todo",
    todos: responseJson,
  });
};

export const DELETE = async (request: Request) => {
  const { _id } = await request.json();
  const response = await deleteTodo({ _id });
  const responseJson = await response.json();

  return Response.json({
    status: 200,
    message: "Successfully delete todo",
    todos: responseJson,
  });
};

export const PUT = async (request: Request) => {
  const { _id, title, category } = await request.json();
  const response = await updateTodo({ _id, title, category });
  const responseJson = await response.json();

  return Response.json({
    status: 200,
    message: "Successfully update todo",
    todos: responseJson,
  });
};
