import { deleteTodo, readTodoById } from "@/models/todo";

export const GET = async (
  _request: Request,
  { params }: { params: { _id: string } }
) => {
  const _id = params._id;
  const data = await readTodoById(_id);

  return Response.json({
    status: 200,
    data,
  });
};

export const DELETE = async (
  _request: Request,
  { params }: { params: { _id: string } }
) => {
  const _id = params._id;
  await deleteTodo(_id);

  return Response.json({
    status: 200,
    message: `Success delete todo with id ${_id}`,
  });
};

// export const PUT = async (
//   request: Request,
//   { params }: { params: { _id: string } }
// ) => {
//   try {
//     const body = await request.json();
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${params._id}`,
//       {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(body),
//       }
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const DELETE = async (
//   request: Request,
//   { params }: { params: { _id: string } }
// ) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${params._id}`,
//       { method: "DELETE", headers: { "content-type": "application/json" } }
//     );
//     const responseJson = await response.json();

//     return responseJson;
//   } catch (error) {
//     console.log(error);
//   }
// };
