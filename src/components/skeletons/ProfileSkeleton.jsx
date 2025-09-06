// ProfileSkeleton.jsx
import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProfileSkeleton = () => {
  return (
    <div className='p-4 animate-pulse'>
      <div className='flex flex-col items-center gap-4'>
        <Skeleton className='w-40 h-40 rounded-full bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>

        <Skeleton className='h-6 w-64 rounded bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
        <Skeleton className='h-6 w-64 rounded bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
        <Skeleton className='h-6 w-64 rounded bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
        <Skeleton className='h-10 w-64 rounded bg-gray-300 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
        </Skeleton>
      </div>
    </div>
  )
}

export default ProfileSkeleton
