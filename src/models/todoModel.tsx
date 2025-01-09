import { database } from "@/config/mongoConfig";

export const read = async () => {
  const todos = await database.collection("todos").find().toArray();

  return todos;
};

export const readByCategory = async () => {
  const todos = await database
    .collection("todos")
    .find({ category: "category" })
    .toArray();

  return todos;
};
