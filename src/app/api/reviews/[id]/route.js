import { dbConnect } from "@/lib/provider/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return Response.json(
      { message: "Invalid review id" },
      { status: 400 }
    );
  }

  const reviewsRes = await dbConnect("reviews");
  const review = await reviewsRes.findOne({ _id: new ObjectId(id) });

  return Response.json({
    review,
    message: "Single review fetched successfully",
  });
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const data = await request.json();

  if (!ObjectId.isValid(id)) {
    return Response.json(
      { message: "Invalid review id" },
      { status: 400 }
    );
  }

  const reviewsRes = await dbConnect("reviews");
  const result = await reviewsRes.updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );

  return Response.json({
    result,
    message: "Review updated successfully",
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return Response.json(
      { message: "Invalid review id" },
      { status: 400 }
    );
  }

  const reviewsRes = await dbConnect("reviews");
  const result = await reviewsRes.deleteOne({ _id: new ObjectId(id) });

  return Response.json({
    result,
    message: "Review deleted successfully",
  });
}
