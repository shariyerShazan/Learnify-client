import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import LectureTableSkeleton from '@/components/skeletons/LectureTableSkeleton'

const DaLectures = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()

  // Redux থেকে lecture নেওয়া হচ্ছে
  const lectures = useSelector((state) => state.course.singleCourse?.lectures || [])

  const [lectureTitle, setLectureTitle] = useState("")
  const [loading, setLoading] = useState(true)

  // প্রথমে ১ সেকেন্ড loading দেখাবে
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleCreateLecture = () => {
    if (!lectureTitle.trim()) return
    // এখানে lecture তৈরি করার API call হবে
    console.log("Lecture created:", lectureTitle)
    setLectureTitle("")
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <h3 className='text-xl font-bold'>Let's add lectures, and lecture details...</h3>
        </CardHeader>
        <CardContent>
          <div>
            <Label className='m-1'>Lecture Title:</Label>
            <Input
              type="text"
              placeholder="E.g Intro video"
              value={lectureTitle}
              onChange={(e) => setLectureTitle(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => navigate(`/dashboard/courses/${courseId}`)}>
            Back to course
          </Button>
          <Button onClick={handleCreateLecture}>
            Create Lecture
          </Button>
        </CardFooter>
      </Card>

      {/* Table */}
      <Card className="mt-5">
        <CardHeader>
          <h3 className="text-lg font-semibold">Lectures</h3>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Lecture Title</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <LectureTableSkeleton rows={3} />
              ) : lectures.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-gray-500">
                    No lectures created yet
                  </TableCell>
                </TableRow>
              ) : (
                lectures.map((lecture, index) => (
                  <TableRow key={lecture._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{lecture.lectureTitle}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default DaLectures
