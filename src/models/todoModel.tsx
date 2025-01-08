import { database } from "@/config/mongoConfig";

export const read = async () => {
  const todos = await database.collection("todos").find().toArray();

  return todos;
};

// export const create = async (request: Request) => {
//   const todos = await database.collection("todos").insertOne({});

//   return {
//     status: 201,
//     todos,
//   };
// };
