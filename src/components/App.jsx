import { Component } from "react";
import Header from "./Header/Header";
import ShopPage from "./ShopPage/ShopPage";
import TodoPage from "./TodoPage/TodoPage";
// import Counter from "./Counter/Counter";

class App extends Component {
  state = {
    activePage: "shop",
    isOpenCart: false,
  };

  handleOpenActivePage = (activePage) => {
    this.setState({ activePage });
  };

  handleOpenCart = () => {
    this.setState({ isOpenCart: true });
  };

  render() {
    const { activePage, isOpenCart } = this.state;
    return (
      <>
        <Header
          handleOpenCart={this.handleOpenCart}
          handleOpenActivePage={this.handleOpenActivePage}
        />
        {activePage === "todo" && <TodoPage />}
        {activePage === "shop" && <ShopPage isOpenCart={isOpenCart} handleOpenCart />}
      </>
    );
  }
}

export default App;
