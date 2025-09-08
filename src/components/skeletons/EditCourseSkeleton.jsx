import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EditCourseSkeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex justify-between my-4">
        <div className="h-8 w-1/3 bg-gray-300 rounded-md"></div>
        <div className="h-10 w-36 bg-gray-300 rounded-md"></div>
      </div>

      <Card>
        <CardHeader className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-96 bg-gray-200 rounded-md"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {/* Course Title */}
          <div className="space-y-1">
            <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-full bg-gray-200 rounded-md"></div>
          </div>

          {/* Subtitle */}
          <div className="space-y-1">
            <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-full bg-gray-200 rounded-md"></div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <div className="h-4 w-36 bg-gray-300 rounded-md"></div>
            <div className="h-32 w-full bg-gray-200 rounded-md"></div>
          </div>

          {/* Selects */}
          <div className="flex gap-6">
            <div className="h-10 w-60 bg-gray-200 rounded-md"></div>
            <div className="h-10 w-60 bg-gray-200 rounded-md"></div>
            <div className="h-10 w-36 bg-gray-200 rounded-md"></div>
          </div>

          {/* Thumbnail */}
          <div className="space-y-1">
            <div className="h-4 w-40 bg-gray-300 rounded-md"></div>
            <div className="h-42 w-96 bg-gray-200 rounded-md"></div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditCourseSkeleton;
