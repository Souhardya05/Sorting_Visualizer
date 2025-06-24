"use client";

export default function Bars({ bars }: { bars: number[] }) {
  return (
    <div className="flex items-end justify-center h-[500px] overflow-hidden gap-[1px] bg-gray-800 px-4 rounded shadow-md">
      {bars.map((height, idx) => (
        <div
          key={idx}
          className="bar"
          style={{
            height: `${height * 2}px`,
            width: `${Math.max(5, Math.floor(600 / bars.length))}px`,
            backgroundColor: "cyan",
            border: "1px solid black",
            transition: "0.1s all ease",
          }}
        />
      ))}
    </div>
  );
}