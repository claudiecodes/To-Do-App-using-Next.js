export const fetchTodos = async () => {
  const response = await fetch("http://localhost:3000/api/todos");
  const responseJson = await response.json();

  return responseJson;
};
