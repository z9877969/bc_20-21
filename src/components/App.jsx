import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { getCurUser } from "../redux/auth/authOperations";
import { getMustCurUser } from "../redux/auth/authSelector";

const HomePage = lazy(() => import("../pages/HomePage"));
const CounterPage = lazy(() => import("../pages/CounterPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const App = () => {
  const dispatch = useDispatch();
  const mustCurUser = useSelector(getMustCurUser);

  useEffect(() => {
    mustCurUser && dispatch(getCurUser());
  }, [dispatch, mustCurUser]);

  console.log("APP");

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PublicRoute component={HomePage} />} />
        <Route path="todo" element={<PrivateRoute component={TodoPage} />} />
        <Route
          path="counter"
          element={<PrivateRoute component={CounterPage} />}
        />
        <Route
          path="login"
          element={<PublicRoute component={LoginPage} restricted />}
        />
        <Route
          path="register"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

// request -> error 400 || 401 -> refreshToken -> newToken -> repeat request
