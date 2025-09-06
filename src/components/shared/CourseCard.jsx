import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Badge } from '../ui/badge'

const CourseCard = () => {
  return (
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
  )
}

export default CourseCard
