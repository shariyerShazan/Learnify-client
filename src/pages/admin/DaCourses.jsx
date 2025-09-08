import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DaAddCourse from "@/components/shared/admin/DaAddCourse";
import { Badge } from "@/components/ui/badge";
import { useGetAdminCourses } from "@/hooks/useGetAdminCourses";
import { useSelector } from "react-redux";
import CourseTableSkeleton from "@/components/skeletons/CourseTableSkeleton";
import { useNavigate } from "react-router";

const DaCourses = () => {
    const navigate = useNavigate()
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  const { refetchCourses } = useGetAdminCourses();

  useEffect(()=>{
    refetchCourses()
  }, [])

setTimeout(() => {
    setLoading(false)
}, 1000);

  const { adminCourses } = useSelector((state) => state.course);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <Button className="cursor-pointer" onClick={() => setOpenDialog(true)}>
          Create New Course
        </Button>
      </div>

      <Card className="overflow-x-auto">
        {loading ? (
          <CourseTableSkeleton />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold pl-4">Course Title</TableHead>
                <TableHead className="font-bold">Category</TableHead>
                <TableHead className="font-bold">Price ($)</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminCourses.length > 0 ? (
                adminCourses.map((course , index) => (
                  <TableRow key={index}>
                    <TableCell className="pl-4">{course?.courseTitle}</TableCell>
                    <TableCell>{course?.category}</TableCell>
                    <TableCell>{course?.coursePrice || "N/A"}</TableCell>
                    <TableCell>
                      <Badge
                        className={`px-2 py-1 rounded text-white text-sm ${
                          course.isPublished ? "bg-green-500" : "bg-gray-500 px-4"
                        }`}
                      >
                        {course?.isPublished ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button onClick={()=>navigate(`/dashboard/courses/${course?._id}`)} size="sm" variant="outline" className="cursor-pointer">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                    No course created
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </Card>

      {/* Add Course Dialog */}
      <DaAddCourse refetch={refetchCourses} open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
};

export default DaCourses;
