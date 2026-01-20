import { version } from "react";

const reviewsData = [
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




export async function GET(request) {
  return Response.json({
    reviewsData,
    message: "reviews api is working fine"})

}