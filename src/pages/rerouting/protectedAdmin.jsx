import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const ProtectedAdmin = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isloged = useCallback(() => {
    const credenciales = localStorage.getItem("credenciales");
    if (!credenciales || credenciales === "undefined") {
      setIsLoggedIn(false);
      return navigate("/");
    }

    const isadmin = localStorage.getItem("adminStatus");
    if (isadmin === "false") {
      setIsLoggedIn(false);
      return navigate("/");
    }
    setIsLoggedIn(true);
  }, [navigate]);

  useEffect(() => {
    isloged();
  }, [isLoggedIn, isloged]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedAdmin;
