import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

const UserProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      toast.warning("You must login to access this page!");
    }
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserProtectedRoute;
