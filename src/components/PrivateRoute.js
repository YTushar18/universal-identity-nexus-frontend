import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");

  // Redirect to login if accessToken is missing
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
