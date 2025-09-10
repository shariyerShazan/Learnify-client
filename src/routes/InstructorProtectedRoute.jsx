import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { toast } from "react-toastify";


const InstructorProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    toast.error("You must login to access this page!");
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "instructor") {
    toast.error("You are not authorized to access this page!");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default InstructorProtectedRoute;
