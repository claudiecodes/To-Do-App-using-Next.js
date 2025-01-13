"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { useRouter } from "next/navigation";

export const AddForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = JSON.stringify({ title, category });
      if (!title || !category) {
        alert("Please fill in both fields.");
        return;
      }
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body,
      });

      setTitle("");
      setCategory("");

      // router.refresh()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-80 p-4 ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title..."
              value={title}
              disabled={loading}
            />
            <Input
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category..."
              value={category}
              disabled={loading}
            />
          </div>
          <div className="flex justify-center p-5">
            <Button
              type="submit"
              className="dark:bg-white dark:text-black bg-black text-white font-bold  hover:text-white"
              disabled={loading}
            >
              {loading ? "Please wait.." : "Add"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
