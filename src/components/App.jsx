import { Navigate, Route, Routes } from "react-router-dom";
import Counter from "./Counter/Counter";
import NewsPage from "../pages/NewsPage";
import TodoPage from "../pages/TodoPage";
import HomePage from "../pages/HomePage";
import TopNewspage from "../pages/TopNewsPage";
import CountryNews from "./CountryNews/CountryNews";
import MainWrapper from "./MainLayout/MainLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="counter" element={<Counter />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="top-news" element={<TopNewspage />}>
            <Route path=":country" element={<CountryNews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
