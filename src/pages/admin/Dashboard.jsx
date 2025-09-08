import DaSidebar from "@/components/shared/DaSidebar";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";



const Dashboard = () => {
const navigate = useNavigate()
useEffect(()=>{
    navigate("/dashboard/preview")
} ,[])
  return (
    <div className="flex min-h-screen">
      <DaSidebar />
      <div className="flex-1 p-4 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
