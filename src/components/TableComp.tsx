import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TodoProps } from "@/types";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

const fetchTodos = async () => {
  const response = await fetch(`${process.env.NEXT_BASE_URL}/api/todos`);
  const responseJaon = await response.json();

  return responseJaon;
};
export default async function TableComp() {
  const todos: TodoProps = await fetchTodos();

  if (!todos) {
    throw new Error("failed to fetch data");
  }

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
          {todos.todos.length > 0 ? (
            todos.todos.map((todo, idx) => (
              <TableRow key={todo._id}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.category}</TableCell>
                <TableCell className="text-end">
                  <InfoIcon />
                  <EditIcon />
                  <DeleteIcon />
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
