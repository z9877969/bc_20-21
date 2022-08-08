import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const MainWrapper = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default MainWrapper;
