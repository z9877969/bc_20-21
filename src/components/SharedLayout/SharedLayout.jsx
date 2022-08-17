import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { authToggle } from "../../redux/auth/authSlice";
import Navigation from "../Navigation/Navigation";

const SharedLayout = ({ isAuth }) => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <Navigation isAuth={isAuth} />
        <button onClick={() => dispatch(authToggle())}>AuthToggle</button>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
