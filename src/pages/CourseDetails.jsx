import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useGetSingleCourse } from '@/hooks/useGetSingleCourse'
import { Label } from '@radix-ui/react-dropdown-menu'
import { PlayCircleIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const CourseDetails = () => {
    const { courseId } = useParams()
    const { refetchSingleCourse } = useGetSingleCourse(courseId)

    useEffect(() => {
        refetchSingleCourse()
    }, [])

    const { singleCourse } = useSelector((state) => state.course)

    if (!singleCourse) return <p className="text-center mt-10 animate-pulse">Loading...</p>

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            {/* Course Header */}
            <div className="flex flex-col gap-3 animate-fadeIn">
                <h2 className="text-4xl font-extrabold tracking-tight">{singleCourse.courseTitle}</h2>
                <h3 className="text-lg text-gray-700">{singleCourse.subtitle}</h3>
                <h3 className="font-bold text-gray-800">
                    Instructor: <span className="font-medium underline">{singleCourse.instructor.fullName}</span>
                </h3>
                <div className="flex flex-wrap gap-6 text-gray-700 font-medium">
                    <p>Created At: {singleCourse.createdAt.slice(0, 10)}</p>
                    <p>Total Enrolled: {singleCourse.enrolledStudents.length || 0}</p>
                </div>
            </div>

            {/* Description */}
            <div className="animate-slideInUp">
                <Label className="text-xl font-semibold mb-2 block">Description</Label>
                <div
                    className="prose max-w-none border-l-4 border-gray-300 pl-4 animate-fadeIn"
                    dangerouslySetInnerHTML={{ __html: singleCourse.description }}
                />
            </div>

            {/* Course Content and Video */}
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Lectures List */}
                <Card className="w-full hover:shadow-lg transition-shadow duration-300 animate-slideInLeft">
                    <CardHeader className="space-y-2">
                        <h3 className="text-xl font-bold">Course Content</h3>
                        <h4 className="text-gray-700">{singleCourse.lectures.length || 0} Lectures</h4>
                        <div className="flex flex-col gap-2 mt-2">
                            {singleCourse?.lectures?.map((lecture) => (
                                <p
                                    key={lecture._id}
                                    className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors duration-200"
                                >
                                    <PlayCircleIcon className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-200" />
                                    {lecture.lectureTitle}
                                </p>
                            ))}
                        </div>
                    </CardHeader>
                </Card>

                {/* Video Player and Buy */}
                <Card className="w-full hover:shadow-lg transition-shadow duration-300 animate-slideInRight">
                    <CardContent className="space-y-4">
                        <div className="overflow-hidden rounded-lg shadow-md animate-fadeIn">
                            <video
                                src={singleCourse.lectures[0]?.videoUrl}
                                controls
                                className="w-full h-auto"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <p className="font-semibold text-lg">{singleCourse.lectures[0]?.lectureTitle}</p>
                        <p className="text-gray-800 font-bold text-lg">${singleCourse.coursePrice}</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full hover:scale-105 transition-transform duration-200">
                            Buy Course Now
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default CourseDetails
