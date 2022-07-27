import { Component } from "react";
import Navigation from "./Navigation/Navigation";
import TodoPage from "./TodoPage/TodoPage";

class App extends Component {
  state = {
    activePage: "todo",
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage });
  };

  render() {
    const { activePage } = this.state;
    return (
      <>
        <Navigation handleOpenActivePage={this.handleOpenActivePage} />
        {activePage === "todo" && <TodoPage />}
        {activePage === "home" && <h1>Welcome to our amazing app!!!</h1>}
      </>
    );
  }
}

export default App;
