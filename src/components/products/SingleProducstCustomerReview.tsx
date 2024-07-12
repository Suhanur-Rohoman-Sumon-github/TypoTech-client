import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { IoStar } from "react-icons/io5";

type Rating = {
  name: string;
  image: string;
  comment: string;
  rating: number;
};

type SingleProducstCustomerReviewProps = {
  reviews: Rating[];
};

const SingleProducstCustomerReview = ({
  reviews,
}: SingleProducstCustomerReviewProps) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <IoIosStar key={index} className="text-[#ffd700]" />
        ))}
        {hasHalfStar && <IoStar className="text-[#ffd700]" />}
        {[...Array(emptyStars)].map((_, index) => (
          <CiStar key={index} className="text-[#ffd700]" />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>
      {reviews?.length === 0 ? (
        <p>No reviews yet. Be the first to write a review!</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="mt-4 border p-4 rounded-md">
            <div className="flex items-center mb-2">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <div className="flex items-center">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SingleProducstCustomerReview;
