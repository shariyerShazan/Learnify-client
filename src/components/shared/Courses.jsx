import React, { useState, useEffect } from 'react'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from '../ui/badge'
import CourseSkeleton from './skeletons/CourseSkeleton'


const Courses = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-wrap gap-4 mt-12'>
      {
        (loading ? Array(10).fill(0) : [0,1,2,3,4,5,6,7,8,9]).map((_, index) => (
          <Card className="w-72 pt-0 pb-1" key={index}>
            {loading ? (
              <CourseSkeleton />
            ) : (
              <div className='flex flex-col gap-2'>
                <img 
                  className='rounded-t-lg' 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuk5lXG95QWWtQtoDeiGj9mUnkU7m8QXhYbw&s" 
                  alt="" 
                />
                <h2 className='text-lg font-bold mx-3'>Next js full course 2025</h2>
                <div className='flex items-center justify-around gap-2 mx-3'>
                  <Avatar className='w-10 h-10 rounded-full'>
                    <AvatarImage className='w-10 h-10 rounded-full' src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className='w-10 h-10 rounded-full'>DP</AvatarFallback>
                  </Avatar>
                  <h3 className='font-medium'>shariyer shazan</h3>
                  <Badge className='!py-1'>Advance</Badge>
                </div>
                <h4 className='mx-3 font-bold text-lg'>$100</h4>
              </div>
            )}
          </Card>
        ))
      }
    </div>
  )
}

export default Courses
