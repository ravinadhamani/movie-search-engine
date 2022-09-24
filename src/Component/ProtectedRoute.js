import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
const { user } = useUserAuth();

const navigate = useNavigate();

  console.log("Check user in Private: ", user);
  if (!user) {
    console.log("ravina");
    navigate("/");
  }
  return children;
};

export default ProtectedRoute;