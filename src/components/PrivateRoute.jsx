import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/authSelector";

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? <Component {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
