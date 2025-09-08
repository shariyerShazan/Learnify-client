import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const CourseTableSkeleton = () => {
  return (
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
        {[...Array(3)].map((_, i) => (
          <TableRow key={i}>
            <TableCell className="pl-4">
              <Skeleton className="h-4 w-40" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-26" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-20 rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-16 rounded-md" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CourseTableSkeleton;
