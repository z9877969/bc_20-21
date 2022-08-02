import { Component } from "react";
import Counter from "./Counter/Counter";
import Navigation from "./Navigation/Navigation";
import TodoPage from "./TodoPage/TodoPage";

class App extends Component {
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
