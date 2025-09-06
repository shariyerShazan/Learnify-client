import CourseCard from '@/components/shared/CourseCard'
import CourseSkeleton from '@/components/skeletons/CourseSkeleton'
import { Card } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'

const MyCourses = () => {

   const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)
  
      return () => clearTimeout(timer)
    }, [])


  return (
    <div>
         <h2 className='font-bold text-xl mt-6'>MY COURSES</h2>
         <div className='flex flex-wrap gap-4 mt-6'>
         {
        (loading ? Array(2).fill(0) : [0,1]).map((_, index) => (
          <Card className="w-72 pt-0 pb-1" key={index}>
            {loading ? (
              <CourseSkeleton />
            ) : (
               <CourseCard />
            )}
          </Card>
        ))
      }
         </div>
    </div>
  )
}

export default MyCourses
