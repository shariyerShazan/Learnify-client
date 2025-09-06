import React, { useState, useEffect } from 'react'
import { Card } from '../components/ui/card'
import CourseSkeleton from '../components/skeletons/CourseSkeleton'
import CourseCard from '@/components/shared/CourseCard'



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
               <CourseCard />
            )}
          </Card>
        ))
      }
    </div>
  )
}

export default Courses
