import { Component } from "react";
import Navigation from "./Navigation/Navigation";
import TodoPage from "./TodoPage/TodoPage";

class App extends Component {
  state = {
    activePage: "shop",
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage: activePage });
  };

  render() {
    const { activePage } = this.state;
    return (
      <>
        <Navigation handleOpenActivePage={this.handleOpenActivePage} />
        {activePage === "todo" && <TodoPage />}
        {activePage === "home" && <h1>Wellcome to our amazing page!</h1>}
      </>
    );
  }
}

export default App;
