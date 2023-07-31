import { Navigate, Outlet } from "react-router-dom";
/* const temp = (props) => {
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
  return <Outlet />;
}; */

const ProtectedRoute = (props) => {
  if (!props.credenciales || props.credenciales === "undefined") {
    return <Navigate to={"/"} replace />;
  }
  return props.children ? props.children : <Outlet />;
};
export default ProtectedRoute;
