import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DaHomeSkeleton = () => {
  const skeletons = [1, 2, 3, 4];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skeletons.map((item) => (
        <Card key={item} className="animate-pulse">
          <CardHeader className="flex items-center gap-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <CardTitle className="h-5 bg-gray-300 rounded w-24"></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DaHomeSkeleton;
