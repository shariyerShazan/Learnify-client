import CourseCard from '@/components/shared/CourseCard'
import React, { useEffect, useState } from 'react'

const MyCourses = () => {

   const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)
  
      return () => clearTimeout(timer)
    }, [])


  return (
    <div>
         <h2 className='font-bold text-xl mt-6'>MY COURSES</h2>
         <div className='flex flex-wrap gap-4 mt-6'>
         {
        (loading ? Array(2).fill(0) : [0,1]).map((_, index) => (
          <CourseCard  loading={loading} index={index}/>
        ))
      }
         </div>
    </div>
  )
}

export default MyCourses
