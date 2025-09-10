import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const CourseProgressSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left - Video Skeleton */}
      <Card className="col-span-2">
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-[450px] rounded-lg" />
          <div className="flex justify-end mt-4">
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </CardContent>
      </Card>

      {/* Right - Lectures Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/4" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Skeleton className="w-5 h-5 rounded-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CourseProgressSkeleton
