import { Navigate, Outlet } from "react-router-dom";
const ProtectedAdmin = (props) => {
  if (!props.credenciales || props.credenciales === "undefined") {
    return <Navigate to={"/"} replace />;
  }
  if (props.admin === 0) {
    return <Navigate to={"/home"} replace />;
  }
  return props.children ? props.children : <Outlet />;
};
export default ProtectedAdmin;
