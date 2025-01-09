"use server";

export const fetchTodos = async () => {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return responseJson;
};

export const handleDelete = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/todos/${id}`, {
    method: "DELETE",
  });
  const responseJson = await response.json();

  return responseJson;
};
