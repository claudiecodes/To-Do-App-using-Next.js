import { database } from "@/config/mongoConfig";
import { ObjectId } from "mongodb";

export const readTodo = async () => {
  const data = await database.collection("todos").find().toArray();

  return data;
};

export const createTodo = async ({
  title,
  category,
}: {
  title: string;
  category: string;
}) => {
  const data = await database
    .collection("todos")
    .insertOne({ title, category });
  return data;
};

export const deleteTodo = async (_id: string) => {
  const newId = new ObjectId(_id);
  const data = await database
    .collection("todos")
    .findOneAndDelete({ _id: newId });

  return data;
};

export const updateTodo = async ({
  _id,
  title,
  category,
}: {
  _id: string;
  title: string;
  category: string;
}) => {
  const newId = new ObjectId(_id);
  const data = await database
    .collection("todos")
    .findOneAndUpdate(
      { _id: newId },
      { $set: { title, category } },
      { returnDocument: "after" }
    );

  return data;
};

export const readTodoById = async (_id: string) => {
  const newId = new ObjectId(_id);
  const data = await database.collection("todos").findOne({ _id: newId });

  return data;
};
