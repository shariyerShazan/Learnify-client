import React from "react"
import { TableRow, TableCell } from "@/components/ui/table"

const LectureTableSkeleton = ({ rows = 3 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <TableRow key={i}>
          <TableCell className="w-10">
            <div className="h-4 w-4 bg-gray-300 animate-pulse rounded"></div>
          </TableCell>
          <TableCell>
            <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
          </TableCell>
          <TableCell className="text-right">
            <div className="h-6 w-12 bg-gray-300 animate-pulse rounded"></div>
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default LectureTableSkeleton
