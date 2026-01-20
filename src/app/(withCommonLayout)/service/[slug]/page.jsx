import Image from "next/image";
import BookingBtn from "../_component/BookingBtn";
import { getSingleService } from "@/services/services.service";



export default async function ServiceDetails({ params }) {
  const { slug } = await params;
  const serviceRes = await getSingleService(slug);
  const service = serviceRes?.data;
  console.log(service);
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={service?.img}
            alt="Service Image"
            fill
            className="object-cover"
            priority
          />

          {service?.isFeatured && (
            <span className="absolute top-4 left-4 bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Featured Service
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {service?.name}
            </h1>
            <p className="text-gray-500 mt-2">
              Professional car care service
            </p>
          </div>

          {/* Price & Duration */}
          <div className="flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold text-purple-600">
                ৳ {service?.price}
              </p>
              <p className="text-sm text-gray-500">Total Cost</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-900">
                {service?.duration} mins
              </p>
              <p className="text-sm text-gray-500">Service Duration</p>
            </div>
          </div>

          {/* Description */}
          <div>
            {service?.description}
          </div>

          {/* Action */}
          <div className="pt-4 flex gap-4">
            <BookingBtn service={service} />

            <button className="border border-gray-300 hover:border-purple-600 hover:text-purple-600 px-6 py-3 rounded-xl font-medium transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
