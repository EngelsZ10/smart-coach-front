import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isloged = () => {
    const credenciales = localStorage.getItem("credenciales");
    if (!credenciales || credenciales === "undefined") {
      setIsLoggedIn(false);
      return navigate("/");
    }

    setIsLoggedIn(true);
  };
  useEffect(() => {
    isloged();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
