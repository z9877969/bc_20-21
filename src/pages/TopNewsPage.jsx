import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NewsCountryNav from "../components/NewsCountryNav/NewsCountryNav";

const TopNewspage = () => {
  return (
    <>
      <h1>TopNewsPage</h1>
      <NewsCountryNav />
      <Suspense fallback={<h1>Loading-2...</h1>}>
        <Outlet />
      </Suspense>
      {/* // CountryNewsPage */}
    </>
  );
};

export default TopNewspage;
