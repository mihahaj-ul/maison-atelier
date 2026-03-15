import { Star } from "lucide-react";

export default function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={11}
          className={
            i <= Math.round(rating)
              ? "fill-amber-600 stroke-amber-600"
              : "fill-none stroke-amber-600"
          }
        />
      ))}
    </div>
  );
}
