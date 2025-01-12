"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Todo } from "@/lib/type";

import { useEffect, useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { handleDelete } from "@/lib/actions";

export default function TableComp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchGetTodo = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
      { cache: "no-store", headers: { "content-type": "application/json" } }
    );
    const responseJson = await response.json();

    setTodos(responseJson.data);
    return responseJson;
  };

  useEffect(() => {
    fetchGetTodo();
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-end">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {todos.length > 0 ? (
            todos.map((todo, idx) => (
              <TableRow key={todo._id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.category}</TableCell>
                <TableCell className="text-end">
                  <div className="flex justify-end gap-2">
                    <button className="hover:scale-125">
                      <InfoIcon />
                    </button>
                    <button className="hover:scale-125">
                      <EditIcon />
                    </button>
                    <button
                      className="hover:scale-125"
                      onClick={() => handleDelete(todo._id, fetchGetTodo)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
