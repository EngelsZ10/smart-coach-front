import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedLogin = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isloged = () => {
    const credenciales = localStorage.getItem("credenciales");

    if (credenciales) {
      setIsLoggedIn(false);
      return navigate("/home");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    isloged();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedLogin;
