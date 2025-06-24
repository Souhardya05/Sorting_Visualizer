"use client";

interface Props {
  arraySize: number;
  setArraySize: (n: number) => void;
  speed: number;
  setSpeed: (n: number) => void;
  onGenerate: () => void;
  onSort: (type: string) => void;
  isSorting: boolean;
}

export default function Controls({
  arraySize,
  setArraySize,
  speed,
  setSpeed,
  onGenerate,
  onSort,
  isSorting,
}: Props) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 gap-4 bg-gray-800 p-4 rounded shadow">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        onClick={onGenerate}
        disabled={isSorting}
      >
        New Array
      </button>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <label className="flex items-center gap-2">
          Size:
          <input
            type="range"
            min="5"
            max="100"
            value={arraySize}
            onChange={(e) => setArraySize(+e.target.value)}
            disabled={isSorting}
          />
        </label>
        <label className="flex items-center gap-2">
          Speed:
          <input
            type="range"
            min="20"
            max="300"
            value={speed}
            onChange={(e) => setSpeed(+e.target.value)}
            disabled={isSorting}
          />
        </label>
      </div>
      <div className="flex flex-wrap gap-2 justify-end">
        {["bubble", "selection", "insertion", "quick", "merge"].map((type) => (
          <button
            key={type}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            onClick={() => onSort(type)}
            disabled={isSorting}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Sort
          </button>
        ))}
      </div>
    </div>
  );
}