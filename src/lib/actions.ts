// "use server";

// import { readTodo } from "@/models/todo";

// export const fetchTodos = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
//       { cache: "no-store" }
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchTodos = async () => {
//   const response = await readTodo();
//   const responseJson = await response.json();

//   return Response.json({
//     status: 200,
//     todos: responseJson,
//   });
// };

export const handleDelete = async (_id: string, fetchGetTodo: () => void) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${_id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
  fetchGetTodo();
};
