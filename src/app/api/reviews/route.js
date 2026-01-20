import { dbConnect } from "@/lib/provider/dbConnect";
import { version } from "react";

export const reviewsData = [
    {
        "id": 1,
        "name": "John Doe",
        "rating": 4.5,
    },
    {
        "id": 2,
        "name": "John Doe",
        "rating": 4.5,
    },
    {
        "id": 3,
        "name": "John Doe",
        "rating": 4.5,
    }
]


export async function POST(request) {
    const newReview = await request.json();
    const reviewsRes = await dbConnect('reviews');
    const res =  await reviewsRes.insertOne(newReview);

    // reviewsData.push({...newReview, id: reviewsData.length + 1});

    return Response.json({
        message: "Review added successfully",
        review: res
    });
};


export async function GET(request) {
    const reviewsRes = await dbConnect('reviews');
    const reviews = await reviewsRes.find({}).toArray();

    return Response.json({
      reviews,
      message: "reviews api is working fine"})
  };
