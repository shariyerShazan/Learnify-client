import CourseCard from '@/components/shared/CourseCard'
import { useGetPurchasedCourse } from '@/hooks/useGetPurchasedCourse'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MyCourses = () => {

  useEffect(()=>{
    document.title = `My courses | Learnify`
  },[])


  const {refetchPurchasedCourse} = useGetPurchasedCourse()
  useEffect(()=>{
    refetchPurchasedCourse()
  }, [])

  const {purchasedCourse} = useSelector((state)=>state.course)
  
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
        (loading ? Array(10).fill(0) : purchasedCourse).map((course) => (
          <CourseCard course={course} myCourse={true}  loading={loading}/>
        ))
      }
         </div>
    </div>
  )
}

export default MyCourses
