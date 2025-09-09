import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import LectureTableSkeleton from '@/components/skeletons/LectureTableSkeleton'
import axios from 'axios'
import { LECTURE_API_END_POINT } from '@/utils/apiEndPoint'
import { toast } from 'react-toastify'
import { useGetSingleCourse } from '@/hooks/useGetSingleCourse'

const DaLectures = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()

  const {refetchSingleCourse} = useGetSingleCourse(courseId)
const {singleCourse} = useSelector((state)=> state.course)

  const [lectureTitle, setLectureTitle] = useState("")
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    refetchSingleCourse()
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleCreateLecture = async () => {
    if (!lectureTitle.trim()) return
       
    try {
      const res = await axios.post(`${LECTURE_API_END_POINT}/create-lecture/${courseId}` , {lectureTitle} , {withCredentials: true})
      if(res.data.success){
          toast(res.data.message)
           setLectureTitle("")
           refetchSingleCourse()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
   
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
          <Button variant={"secondary"} className={"hover:scale-101 cursor-pointer"} onClick={() => navigate(`/dashboard/courses/${courseId}`)}>
            Back to course
          </Button>
          <Button className={"hover:scale-101 cursor-pointer"} onClick={handleCreateLecture}>
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
                <TableHead className={" font-bold"}>#</TableHead>
                <TableHead className={"font-bold w-full "}>Lecture Title</TableHead>
                <TableHead className="text-right font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <LectureTableSkeleton rows={3} />
              ) : singleCourse?.lectures.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-gray-500">
                    No lectures created yet
                  </TableCell>
                </TableRow>
              ) : (
                singleCourse?.lectures.map((lecture, index) => (
                  <TableRow key={lecture._id}>
                    <TableCell>Lecture - {index + 1}: </TableCell>
                    <TableCell className={"font-semibold"}>{lecture.lectureTitle}</TableCell>
                    <TableCell className="text-right">
                      <Button onClick={()=>{navigate(`${lecture._id}`)}} className={"hover:scale-101 cursor-pointer"} size="sm" variant="outline">
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
