export default function ServiceCardSkeleton() {
    return (
      <div className="relative bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">

        {/* Featured badge placeholder */}
        <div className="absolute top-4 left-4 h-5 w-16 bg-gray-200 rounded-full" />

        {/* Image skeleton */}
        <div className="h-52 w-full bg-gray-200" />

        {/* Content */}
        <div className="p-5 space-y-4">

          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-200 rounded" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-11/12 bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between pt-4">
            <div className="space-y-2">
              <div className="h-5 w-20 bg-gray-200 rounded" />
              <div className="h-3 w-24 bg-gray-200 rounded" />
            </div>

            {/* Button */}
            <div className="h-10 w-24 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }
