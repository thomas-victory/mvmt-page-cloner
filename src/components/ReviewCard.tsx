
import { Star } from "lucide-react";
import { Review } from "@/types/Review";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border-b border-mvmt-gray-200 pb-6 mb-6 last:border-0">
      <div className="flex items-center mb-2 justify-between">
        <div>
          <span className="font-medium text-mvmt-black">{review.username}</span>
          {review.verified && (
            <span className="ml-2 text-xs text-mvmt-gray-600 bg-mvmt-gray-100 px-2 py-0.5 rounded">
              Verified Purchase
            </span>
          )}
        </div>
        <span className="text-sm text-mvmt-gray-500">{review.date}</span>
      </div>
      
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < review.rating
                ? "text-amber-400 fill-amber-400"
                : "text-mvmt-gray-300"
            }`}
          />
        ))}
      </div>
      
      <p className="text-mvmt-gray-700 text-sm">{review.reviewText}</p>
    </div>
  );
};

export default ReviewCard;
