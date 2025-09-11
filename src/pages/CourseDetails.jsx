import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useGetSingleCourse } from '@/hooks/useGetSingleCourse'
import { PURCHASE_API_END_POINT } from '@/utils/apiEndPoint'
import axios from 'axios'
import { PlayCircleIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'

const CourseDetails = () => {

      useEffect(()=>{
        document.title = `Course details | Learnify`
      },[])
    
    const { courseId } = useParams()
    const { refetchSingleCourse } = useGetSingleCourse(courseId)

    useEffect(() => {
        refetchSingleCourse()
    }, [courseId])

    const { singleCourse } = useSelector((state) => state.course)

// console.log(singleCourse)

    if (!singleCourse) return <p className="text-center mt-10 animate-pulse">Loading...</p>


    // Function to handle checkout
    const handleEnroll = async () => {
        try {
          const { data } = await axios.post(`${PURCHASE_API_END_POINT}/create-checkOut`, {
            courseId: singleCourse._id,
          } , {withCredentials: true});
      
          if (data.url) {
            window.location.href = data.url; 
          }
        } catch (err) {
          console.log(err);
          toast.error(err.response.data.message)
        }
      };
  

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-12">

            {/* Header Section */}
           
            <div className="flex flex-col gap-4">
               <img className='w-full h-64 rounded-xl object-cover' src={singleCourse.courseThumbnail} alt="" />

                <h1 className="text-5xl font-extrabold tracking-tight animate-fadeIn">
                    {singleCourse.courseTitle}
                </h1>
                <h2 className="text-lg text-gray-700 animate-fadeIn delay-100">{singleCourse.subtitle}</h2>
                <div className="flex flex-wrap items-center gap-6 text-gray-700 font-medium animate-fadeIn delay-200">
                    <span>
                        Instructor:{" "}
                        <span className="font-medium underline cursor-pointer hover:text-gray-900 transition-colors">
                            {singleCourse.instructor.fullName}
                        </span>
                    </span>
                    <span>Created: {singleCourse.createdAt.slice(0, 10)}</span>
                    <span>Enrolled: {singleCourse.enrolledStudents.length || 0}</span>
                </div>
            </div>

            {/* Description Section */}
            <div className="animate-slideInUp">
                <Label className="text-xl font-semibold mb-3 block">Course Description</Label>
                <div
                    className="prose max-w-none border-l-4 border-gray-200 pl-5 bg-gray-50 rounded-lg p-4 animate-fadeIn"
                    dangerouslySetInnerHTML={{ __html: singleCourse.description }}
                />
            </div>

            {/* Content and Video Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lecture List */}
                <Card className="col-span-1 lg:col-span-1 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="space-y-2">
                        <h3 className="text-xl font-bold">Course Content</h3>
                        <p className="text-gray-600 p-1 border-2 rounded-lg">{singleCourse.lectures.length || 0} Lectures Available</p>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {singleCourse?.lectures?.map((lecture) => (
                            <div
                                key={lecture._id}
                                className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200"
                            >
                                <PlayCircleIcon className="w-5 h-5 text-gray-500 hover:text-gray-900 transition-colors" />
                                <span className="text-gray-800">{lecture.lectureTitle}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Video & Price Card */}
                <Card className="col-span-2 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                    <CardContent className="space-y-4">
                        <div className="overflow-hidden rounded-xl shadow-md animate-fadeIn">
                            <video
                                src={singleCourse.lectures[0]?.videoUrl}
                                controls
                                muted
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                        <h3 className="font-semibold text-2xl">{singleCourse.lectures[0]?.lectureTitle}</h3>
                        <p className="text-black font-bold text-xl">Course price: <span className='font-normal text-gray-900'>${singleCourse.coursePrice}</span></p>
                    </CardContent>
                    <CardFooter>
                            <Button
                                className="w-full py-3 font-semibold hover:scale-102 cursor-pointer transition-transform duration-200"
                                onClick={()=>handleEnroll()}
                            >
                                Enroll Course
                            </Button>
                            </CardFooter>
                </Card>
            </div>

            {/* CTA Section */}
            {/* <div className="text-center mt-10 animate-fadeInUp">
                <Button className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200">
                    Enroll & Start Learning
                </Button>
            </div> */}
        </div>
    )
}

export default CourseDetails
