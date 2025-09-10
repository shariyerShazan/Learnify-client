import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, Book, DollarSign, CheckCircle } from "lucide-react";
import DaHomeSkeleton from "@/components/skeletons/DaHomeSkeleton";

const DaHome = () => {
  const [loading , setLoading] = useState(true)
 
  useEffect(()=>{
     setTimeout(() => {
      setLoading(false)
     }, 1000);
  }, [])
  // Fake data
  const totalCourses = 12;
  const totalUsers = 120;
  const totalEnrolledCourses = 350;
  const totalRevenue = 4200; // in dollars

  const stats = [
    {
      id: 1,
      title: "Total Courses",
      value: totalCourses,
      icon: <Book className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Total Users",
      value: totalUsers,
      icon: <Users className="w-6 h-6 text-green-500" />,
    },
    {
      id: 3,
      title: "Enrolled Courses",
      value: totalEnrolledCourses,
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
    },
    {
      id: 4,
      title: "Revenue",
      value: `$${totalRevenue}`,
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
    },
  ];

  if(loading){
    return <DaHomeSkeleton />
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.id} className="hover:shadow-lg transition">
          <CardHeader className="flex items-center gap-4">
            {stat.icon}
            <CardTitle className="text-lg font-bold">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-extrabold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DaHome;
