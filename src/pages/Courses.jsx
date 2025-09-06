import React, { useState, useEffect } from 'react'
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
          <CourseCard  loading={loading} index={index}/>
        ))
      }
    </div>
  )
}

export default Courses
