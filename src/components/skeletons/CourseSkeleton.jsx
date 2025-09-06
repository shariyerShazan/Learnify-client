import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


const CourseSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 pb-2  animate-pulse'>
      {/* Image */}
      <Skeleton className='h-40 w-full rounded-t-lg rounded-b-none bg-gray-300 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
      </Skeleton>

      {/* Title */}
      <Skeleton className='h-6 w-3/4 mx-3 rounded bg-gray-300 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
      </Skeleton>

      {/* Avatar + Name + Badge */}
      <div className='flex items-center justify-around gap-2 mx-3'>
        <Skeleton className='w-10 h-10 rounded-full bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
        <Skeleton className='h-4 w-20 rounded bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
        <Skeleton className='h-6 w-16 rounded bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
      </div>

      {/* Price */}
      <Skeleton className='h-6 w-20 mx-3 rounded bg-gray-300 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
      </Skeleton>
    </div>
  )
}

export default CourseSkeleton
