import { Component } from "react";
import Header from "./Header/Header";
import ShopPage from "./ShopPage/ShopPage";
import TodoPage from "./TodoPage/TodoPage";

class App extends Component {
  state = {
    activePage: "todo",
    isCartOpen: false,
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage: activePage });
  };

  handleOpenCart = () => {
    this.setState({ isCartOpen: true });
  };

  handleCloseCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    const { activePage, isCartOpen } = this.state;
    return (
      <>
        <Header
          handleOpenActivePage={this.handleOpenActivePage}
          handleOpenCart={this.handleOpenCart}
        />
        {activePage === "todo" && <TodoPage />}
        {activePage === "shop" && (
          <ShopPage
            isCartOpen={isCartOpen}
            handleCloseCart={this.handleCloseCart}
          />
        )}
      </>
    );
  }
}

export default App;
