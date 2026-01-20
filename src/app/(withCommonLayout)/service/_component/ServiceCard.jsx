import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
    const {
        name,
        description,
        price,
        img,
        isFeatured,
        duration,
    } = service || {};

    return (
        <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

            {/* Featured Badge */}
            {isFeatured && (
                <span className="absolute top-4 left-4 z-10 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                </span>
            )}

            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
                <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {name}
                </h3>

                {/* Description */}
                <div
                    className="text-sm text-gray-600 leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4">
                    <div>
                        <p className="text-lg font-bold text-purple-600">৳ {price}</p>
                        <p className="text-xs text-gray-500">{duration} mins service</p>
                    </div>

                    <Link href={`/service/${service._id}`}>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
