import { useState } from "react";
import Counter from "./Counter/Counter";
import Navigation from "./Navigation/Navigation";
import TodoPage from "./TodoPage/TodoPage";

const App = () => {
  const [activePage, setActivePage] = useState("todo");

  const handleOpenActivePage = (activePage) => {
    setActivePage(activePage);
  };

  console.log("APP");

  return (
    <>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      {activePage === "todo" && <TodoPage activePage={activePage} />}
      {activePage === "counter" && <Counter />}
    </>
  );
};

export default App;
