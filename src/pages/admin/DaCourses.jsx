import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DaAddCourse from "@/components/shared/admin/DaAddCourse";
import { Badge } from "@/components/ui/badge";


const DaCourses = () => {
  const [openDialog, setOpenDialog] = useState(false);

  // Demo courses
  const courses = [
    { id: 1, courseTitle: "JavaScript Basics", price: 20, status: "publish" },
    { id: 2, courseTitle: "MERN Stack", price: 50, status: "draft" },
    { id: 3, courseTitle: "AI & ML", price: 100, status: "publish" },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <Button className={"cursor-pointer"} onClick={() => setOpenDialog(true)}>Create New Course</Button>
      </div>

      <Card className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow >
              <TableHead className={"font-bold pl-4"}>Course Title</TableHead>
              <TableHead className={"font-bold"}>Price ($)</TableHead>
              <TableHead className={"font-bold"}>Status</TableHead>
              <TableHead className={"font-bold"}>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow  key={course.id}>
                <TableCell className={"pl-4"}>{course.courseTitle}</TableCell>
                <TableCell>{course.price}</TableCell>
                <TableCell>
                  <Badge
                    className={`px-2 py-1  rounded text-white text-sm ${
                      course.status === "publish" ? "bg-green-500" : "bg-gray-500 px-4"
                    }`}
                  >
                    {course.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" className={"cursor-pointer"}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Add Course Dialog */}
      <DaAddCourse open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
};

export default DaCourses;
