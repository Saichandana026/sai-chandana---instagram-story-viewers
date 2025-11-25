interface Props {
  count: number;
  current: number;
}

export default function StoryProgress({ count, current }: Props) {
  return (
    <div className="absolute top-4 w-full px-4 flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 bg-gray-600 overflow-hidden rounded-full`}
        >
          <div
            className={`h-full bg-white transition-all duration-[5000ms] ${
              i < current ? "w-full" : i === current ? "w-full" : "w-0"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
