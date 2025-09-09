import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useGetSingleCourse } from "@/hooks/useGetSingleCourse"
import { PlayCircleIcon } from "lucide-react"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

const CourseProgress = () => {
  const { courseId } = useParams()
  const { fetchSingleCourse } = useGetSingleCourse(courseId)
  const { singleCourse } = useSelector((state) => state.course)

  const [selectedLecture, setSelectedLecture] = useState(null)

  useEffect(() => {
    fetchSingleCourse()
  }, [courseId])

  useEffect(() => {
    if (singleCourse?.lectures?.length > 0) {
      setSelectedLecture(singleCourse.lectures[0])
    }
  }, [singleCourse])

  if (!singleCourse) {
    return <p className="text-center mt-10 animate-pulse">Loading...</p>
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left side - Video player */}
      <Card className="col-span-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {selectedLecture?.lectureTitle || "Select a Lecture"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedLecture ? (
            <video
              key={selectedLecture._id}
              src={selectedLecture.videoUrl}
              controls
              className="w-full h-[500px] rounded-lg border"
            />
          ) : (
            <p className="text-gray-500">Please select a lecture to start.</p>
          )}
        </CardContent>
      </Card>

      {/* Right side - Lecture list */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Lectures</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-2">
            <div className="space-y-2">
              {singleCourse.lectures.map((lecture) => (
                <div
                  key={lecture._id}
                  onClick={() => setSelectedLecture(lecture)}
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-all ${
                    selectedLecture?._id === lecture._id
                      ? "bg-blue-100 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <PlayCircleIcon className="w-5 h-5 text-gray-600" />
                  <span>{lecture.lectureTitle}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseProgress
