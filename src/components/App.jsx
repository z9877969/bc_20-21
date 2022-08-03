import { Component, useState } from "react";
import Counter from "./Counter/Counter";
import Navigation from "./Navigation/Navigation";
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
    </>
  );
};

class AppClass extends Component {
  state = {
    activePage: "counter",
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage: activePage });
  };

  render() {
    const { activePage } = this.state;
    return (
      <>
        <Navigation handleOpenActivePage={this.handleOpenActivePage} />
        {activePage === "todo" && <TodoPage activePage={activePage} />}
        {activePage === "counter" && <Counter />}
      </>
    );
  }
}

export default App;
