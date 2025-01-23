"use client";

import { FaceRecognition } from "@/components/FaceRecognition";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [start, setStart] = useState(false);
  return (
    <div className="min-h-[700px] rounded-[40px] border-black container flex flex-col gap-16 px-3 py-8 max-w-[360px] mx-auto border my-6">
      <h1 className="font-bold text-4xl text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 mt-10">
        Face Control <span className={"text-black"}>🚨</span>‍️
      </h1>
      <Button
        className={cn(
          "rounded-xl  font-bold",
          !start && "bg-gradient-to-r from-blue-500 to-indigo-600",
          start && "bg-gradient-to-r from-orange-500 to-pink-600",
        )}
        size={"lg"}
        onClick={() => setStart(!start)}
      >
        {start ? "Stop" : "Start"} Face Control
      </Button>

      {start && <FaceRecognition />}
    </div>
  );
}
