import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = /* your authentication logic here */ true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      // Redirect to the login page if not authenticated
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default PrivateRoute;
