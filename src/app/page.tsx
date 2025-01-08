import MenuBarComp from "@/components/MenuBarComp";

export default function Home() {
  return (
    <main className="p-10">
      <section className="flex justify-center font-bold p-10 text-3xl">
        <span>To Do List</span>
      </section>
      <section className="flex justify-center">
        <MenuBarComp />
      </section>
    </main>
  );
}
