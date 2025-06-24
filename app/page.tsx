"use client";
import { useEffect, useState } from "react";
import Bars from "@/components/Bars";
import Controls from "@/components/Controls";
import { generateArray, wait } from "@/utils/helpers";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
} from "@/utils/sort";

export default function Home() {
  const [bars, setBars] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState(60);
  const [speed, setSpeed] = useState(60);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setBars(generateArray(arraySize));
  }, [arraySize]);

  const handleNewArray = () => {
    if (isSorting) return;
    setBars(generateArray(arraySize));
  };

  const handleSort = async (type: string) => {
    setIsSorting(true);
    const barElements = document.querySelectorAll(".bar");
    const delay = 320 - speed;

    switch (type) {
      case "bubble":
        await bubbleSort(barElements, delay);
        break;
      case "selection":
        await selectionSort(barElements, delay);
        break;
      case "insertion":
        await insertionSort(barElements, delay);
        break;
      case "quick":
        await quickSort(barElements, 0, barElements.length - 1, delay);
        break;
      case "merge":
        await mergeSort(barElements, 0, barElements.length - 1, delay);
        break;
    }
    setIsSorting(false);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Sorting Visualizer</h1>
      <Controls
        arraySize={arraySize}
        setArraySize={setArraySize}
        speed={speed}
        setSpeed={setSpeed}
        onGenerate={handleNewArray}
        onSort={handleSort}
        isSorting={isSorting}
      />
      <Bars bars={bars} />
    </main>
  );
}