import { MongoClient } from "mongodb";

const uri = process.env.NEXT_MONGODB_CONNECTION_STRING;

if (!uri) throw new Error("Connection database error");

export const client = new MongoClient(uri);

export const database = client.db("");
