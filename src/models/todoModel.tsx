import { database } from "@/config/mongoConfig";
import { ObjectId } from "mongodb";

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

export const deleteTodo = async (_id: string) => {
  const newId = new ObjectId(_id);
  const todo = await database.collection("todos").deleteOne({ _id: newId });

  return todo;
};
