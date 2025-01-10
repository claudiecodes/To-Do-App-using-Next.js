"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TableComp() {
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
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-end">
              <div className="flex justify-end gap-2">
                <button className="hover:scale-125">
                  <InfoIcon />
                </button>
                <button className="hover:scale-125">
                  <EditIcon />
                </button>
                <button className="hover:scale-125">
                  <DeleteIcon />
                </button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No data available
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
