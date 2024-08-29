import React, { useContext } from "react";
import { UserData } from "../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const { user, loading } = useContext(UserData);

  if (loading) {
    return <div>Loading....</div>
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
