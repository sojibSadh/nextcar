
import ServiceCardSkeleton from '@/components/ServiceCardSkeleton'
import React from 'react'

function loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <ServiceCardSkeleton key={i} />
    ))}
  </div>
  )
}

export default loading