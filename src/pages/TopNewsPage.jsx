import { Outlet } from "react-router-dom";
import NewsCountryNav from "../components/NewsCountryNav/NewsCountryNav";

const TopNewspage = () => {
  return (
    <>
      <h1>TopNewsPage</h1>
      <NewsCountryNav />
      <Outlet />
      {/* // CountryNewsPage */}
    </>
  );
};

export default TopNewspage;
