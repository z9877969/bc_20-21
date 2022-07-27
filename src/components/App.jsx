import { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Cart from "./Cart/Cart";
// import Counter from "./Counter/Counter";

class App extends Component {
  state = {
    isCartOpen: false,
    cartProducts: [],
  };

  handleAddProductToCart = (product) => {
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, product],
    }));
  };

  handleRemoveProduct = (id) => {
    this.setState((prevState) => ({
      cartProducts: prevState.cartProducts.filter((el) => el.id !== id),
    }));
  };

  handleOpenCart = () => {
    this.setState({ isCartOpen: true });
  };

  handleCloseCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    const { isCartOpen, cartProducts } = this.state;

    return (
      <>
        <Header handleOpenCart={this.handleOpenCart} />
        <Main handleAddProductToCart={this.handleAddProductToCart} />
        <Cart
          cartProducts={cartProducts}
          isCartOpen={isCartOpen}
          handleCloseCart={this.handleCloseCart}
          handleRemoveProduct={this.handleRemoveProduct}
        />
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;
