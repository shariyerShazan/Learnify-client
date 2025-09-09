import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

const EditLectureSkeleton = () => {
  return (
    <Card className="animate-pulse space-y-4">
      <CardHeader>
        <div className="h-6 w-1/4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Card className="space-y-2">
          <CardContent>
            <div className="h-6 w-1/2 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
          </CardContent>
          <CardFooter>
            <div className="h-10 w-1/4 bg-gray-300 rounded"></div>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
};

export default EditLectureSkeleton;
