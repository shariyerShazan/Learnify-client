import React, { useState, useEffect } from 'react'
import CourseCard from '@/components/shared/CourseCard'
import { useGetPublishedCourse } from '@/hooks/useGetPublishedCourse'
import { useSelector } from 'react-redux'



const Courses = () => {

    useEffect(()=>{
      document.title = `Course | Learnify`
    },[])
  
  const [loading, setLoading] = useState(true)
 
const {refetchPublishedCourses} = useGetPublishedCourse()
const {publishedCourses} = useSelector((state)=> state.course)
useEffect(()=>{
  refetchPublishedCourses()
},[])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex flex-wrap gap-4 mt-12'>
      {
        (loading ? Array(10).fill(0) : publishedCourses).map((course) => (
          <CourseCard key={course._id} course={course}  loading={loading} />
        ))
      }
    </div>
  )
}

export default Courses
