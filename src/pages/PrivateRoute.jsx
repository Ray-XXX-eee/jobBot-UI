import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/AppContext";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useContext(Context);

  useEffect(() => {
    if (!isAuth) {
      // Redirect to the login page if not authenticated
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default PrivateRoute;
