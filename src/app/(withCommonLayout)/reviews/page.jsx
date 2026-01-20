import { getAllReviews } from "@/services/reviews.service";
import Link from "next/link";

export default async function ReviewsPage() {
    const {reviews} = await getAllReviews();
    console.log(reviews);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-base-content">
                        Customer Reviews
                    </h2>
                    <p className="text-sm text-base-content/60 mt-1">
                        What people are saying about us
                    </p>
                    <Link href={"/reviews/create-review"} className="btn border-2 p-2 m-2 inline-block rounded-md"> Create Review </Link>
                </div>

                <div className="mt-4 sm:mt-0">
                    <span className="badge badge-primary badge-lg">
                        Total: {reviews?.length || 0}
                    </span>
                </div>
            </div>

            {/* Reviews Grid */}
            {reviews?.length === 0 ? (
                <div className="alert alert-info">
                    <span>No reviews found.</span>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="card bg-base-100 shadow-md hover:shadow-xl transition"
                        >
                            <div className="card-body">
                                {/* User Info */}
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg">
                                        {review.name}
                                    </h3>
                                    <div className="rating rating-sm">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <input
                                                key={star}
                                                type="radio"
                                                className="mask mask-star-2 bg-orange-400"
                                                checked={star === review.rating}
                                                readOnly
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Comment */}
                                <p className="text-sm text-base-content/70 mt-2">
                                    {review.comment}
                                </p>

                                {/* Footer */}
                                <div className="card-actions justify-between mt-4">
                                    <span className="badge badge-outline">
                                        {review.test}
                                    </span>
                                    <button className="btn btn-sm btn-ghost">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
