import { Component } from "react";
import Navigation from "./Navigation/Navigation";
import TodoPage from "./TodoPage/TodoPage";

class App extends Component {
  state = {
    activePage: "shop",
    counter: 0,
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage: activePage });
  };

  render() {
    console.log("RENDER_APP");
    const { activePage, counter } = this.state;
    return (
      <>
        <button
          onClick={() =>
            this.setState((prev) => ({ counter: prev.counter + 1 }))
          }
        >
          Click
        </button>
        <span>COUNTER: {counter}</span>
        <Navigation handleOpenActivePage={this.handleOpenActivePage} />
        {activePage === "todo" && <TodoPage activePage={activePage} />}
        {activePage === "home" && <h1>Wellcome to our amazing page!</h1>}
      </>
    );
  }
}

export default App;
