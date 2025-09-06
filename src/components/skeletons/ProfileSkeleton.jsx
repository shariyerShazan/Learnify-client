// ProfileSkeleton.jsx
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card } from '@/components/ui/card'

const ProfileSkeleton = () => {
  return (
    <div className='p-4 max-w-md mx-auto'>
         <h2 className='text-2xl font-bold mb-6 text-center'>Profile</h2>
      <Card className='p-6 py-18 shadow-lg rounded-lg animate-pulse'>
        <div className='flex flex-col items-center gap-4'>
          {/* Avatar Skeleton */}
          <Skeleton className='w-40 h-40 rounded-full bg-gray-300 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
          </Skeleton>

          {/* Name Skeleton */}
          <Skeleton className='h-6 w-64 rounded bg-gray-300 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
          </Skeleton>

          {/* Email Skeleton */}
          <Skeleton className='h-6 w-64 rounded bg-gray-300 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
          </Skeleton>

          {/* Role Skeleton */}
          <Skeleton className='h-6 w-64 rounded bg-gray-300 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
          </Skeleton>

          {/* Button Skeleton */}
          <Skeleton className='h-10 w-64 rounded bg-gray-300 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-shimmer'></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  )
}

export default ProfileSkeleton
