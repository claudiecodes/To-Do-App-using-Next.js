"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const AddForm = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-80 p-4 ">
        <div className="flex flex-col space-y-4">
          <Input placeholder="Enter title..." />
          <Input placeholder="Enter category..." />
        </div>
        <div className="flex justify-center p-5">
          <Button className="dark:bg-white dark:text-black bg-black text-white font-bold  hover:text-white ">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
