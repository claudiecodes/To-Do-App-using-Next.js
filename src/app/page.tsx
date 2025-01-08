import MenuBarComp from "@/components/MenuBarComp";
import TableComp from "@/components/TableComp";

export default function Home() {
  return (
    <main className="p-10">
      <div className="flex justify-center font-bold p-10 text-3xl">
        <span>To Do List</span>
      </div>
      <div className="flex justify-center">
        <MenuBarComp />
      </div>
      <div className="flex justify-center p-10 min-w-screen">
        <TableComp />
      </div>
    </main>
  );
}
