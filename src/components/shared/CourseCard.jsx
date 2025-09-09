
import React from 'react'
import { Badge } from '../ui/badge'
import CourseSkeleton from '../skeletons/CourseSkeleton'
import { Card } from '../ui/card'
import { useNavigate } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const CourseCard = ({ loading, course , myCourse }) => {
  const navigate = useNavigate()
  return (
    <Card key={course._id} onClick={()=>navigate(`${myCourse ? `/my-course/${course._id}` : `/course-details/${course._id}`}  `)} className="w-72 pt-0 pb-1 hover:scale-101 cursor-pointer hover:shadow-xl">
      {loading ? (
        <CourseSkeleton />
      ) : (
        <div className='flex  flex-col gap-2'>
          <img
            className='rounded-t-lg min-h-[60%] object-cover'
            src={course.courseThumbnail}
            alt={course.courseTitle}
          />
          <h2 className='text-lg font-bold mx-3'>{course.courseTitle}</h2>
          <div className='flex items-center justify-around gap-2 mx-3'>
            <Avatar className='w-10 h-10 rounded-full'>
              <AvatarImage
                className='w-10 h-10 rounded-full'
                src={course.instructor?.profilePicture}
                alt={course.instructor?.fullName}
              />
              <AvatarFallback className='w-10 h-10 rounded-full'>DP</AvatarFallback>
            </Avatar>
            <h3 className='font-medium'>{course.instructor?.fullName}</h3>
            <Badge className='!py-1'>{course.courseLevel}</Badge>
          </div>
          <h4 className='mx-3 font-bold text-lg'>${course.coursePrice}</h4>
        </div>
      )}
    </Card>
  )
}

export default CourseCard
