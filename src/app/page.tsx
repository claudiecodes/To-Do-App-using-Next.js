"use server";

import { AddForm } from "@/components/AddForm";
import MenuBarComp from "@/components/MenuBarComp";
import TableComp from "@/components/TableComp";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Home() {
  return (
    <main className="p-10 justify-center">
      <div className="flex justify-end mr-10">
        <ThemeToggle />
      </div>
      <div className="flex justify-center font-bold p-10 text-3xl">
        <span>To Do List</span>
      </div>
      <AddForm />
      <div className="flex justify-center">
        <MenuBarComp />
      </div>
      <div className="flex justify-center p-10">
        <TableComp />
      </div>
    </main>
  );
}
