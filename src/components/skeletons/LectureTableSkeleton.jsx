import { TableRow, TableCell } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

const LectureTableSkeleton = ({ rows = 3 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <TableRow key={i}>
          <TableCell>
            <Skeleton className="h-4 w-6" /> {/* index */}
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-40" /> {/* lecture title */}
          </TableCell>
          <TableCell className="text-right">
            <Skeleton className="h-8 w-16 ml-auto" /> {/* action btn */}
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default LectureTableSkeleton
