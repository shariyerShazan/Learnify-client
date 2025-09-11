import DaSidebar from "@/components/shared/admin/DaSidebar";
import React, { useEffect } from "react";
import { Outlet,
    //  useNavigate 
    } from "react-router";



const Dashboard = () => {

  useEffect(()=>{
    document.title = `Dashboard | Learnify`
  },[])


// const navigate = useNavigate()
// useEffect(()=>{
//     navigate("/dashboard/preview")
// } ,[])
  return (
    <div className="flex min-h-screen gap-4">
      <DaSidebar />
      <div className="flex-1 p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
