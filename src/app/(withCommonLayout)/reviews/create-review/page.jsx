"use client";

import { createReview } from "@/services/reviews.service";
import { Star } from "lucide-react";
import React, { useState } from "react";
import Rating from "react-rating";


const CreateReviewPage = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;
    const reviewData = { name, rating: rating, comment };
    console.log("Review submitted", reviewData);

    const res = await createReview(reviewData);

    if (res?.message) {
      alert(res.message || "Review submitted successfully!");
      e.target.reset();
      setRating(0);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 rounded-md p-4 mx-auto flex flex-col gap-4 w-full max-w-md"
      >
        <h2 className="font-bold text-2xl">Add your review</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-slate-400 px-4 py-2 rounded-md"
        />
        <div className="flex items-center gap-2">
          <Rating
            initialRating={rating}
            onChange={(value) => setRating(value)}
            emptySymbol={<Star />}
            fullSymbol={<Star className="text-purple-500 " />}
          />
          <span className="text-sm text-slate-300">
            {rating || "No rating"}
          </span>
        </div>

        <textarea
          name="comment"
          rows={7}
          placeholder="Your Review"
          required
          className="border border-slate-400 px-4 py-2 rounded-md"
        ></textarea>
        <button type="submit" className="bg-purple-500 p-2 rounded-md">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default CreateReviewPage;