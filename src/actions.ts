export const fetchTodos = async () => {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/todos`);
  const reponseJson = await response.json();

  return reponseJson;
};

export const handleDelete = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/todos/${id}`, {
    method: "DELETE",
  });
  const reponseJson = await response.json();

  return reponseJson;
};
