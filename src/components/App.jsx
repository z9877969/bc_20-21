import { useState } from "react";
import Counter from "./Counter/Counter";
import Navigation from "./Navigation/Navigation";
import NewsPage from "./NewsPage/NewsPage";
import TodoPage from "./TodoPage/TodoPage";

const App = () => {
  const [activePage, setActivePage] = useState("todo");

  const handleOpenActivePage = (activePage) => {
    setActivePage(activePage);
  };

  return (
    <>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      {activePage === "todo" && <TodoPage activePage={activePage} />}
      {activePage === "counter" && <Counter />}
      {activePage === "news" && <NewsPage />}
    </>
  );
};

export default App;
