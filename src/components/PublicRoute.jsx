import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/authSelector";

const PublicRoute = ({ restricted, component: Component, ...props }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth && restricted ? (
    <Navigate to="/counter" />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;
