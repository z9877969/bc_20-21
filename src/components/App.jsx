import { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

const Counter = lazy(() => import("./Counter/Counter"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const TopNewspage = lazy(() => import("../pages/TopNewsPage"));
const CountryNews = lazy(() => import("./CountryNews/CountryNews"));

const CustomNavigate = ({ to, ...options }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, options);
  }, []);

  return null;
};

const App = () => {
  return (
    <>
      {/* /uk/learn/5407857/31547/31586/textbook */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="counter" element={<Counter />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="top-news" element={<TopNewspage />}>
            <Route path=":country" element={<CountryNews />} />
          </Route>
          <Route path="error" element={<h1>Some Error</h1>} />
        </Route>
        <Route path="*" element={<CustomNavigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
