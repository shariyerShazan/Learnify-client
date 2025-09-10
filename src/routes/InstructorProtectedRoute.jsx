import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const InstructorProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.warning("You must login to access this page!");
    } else if (user.role !== "instructor") {
      toast.error("You are not authorized to access this page!");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "instructor") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default InstructorProtectedRoute;
