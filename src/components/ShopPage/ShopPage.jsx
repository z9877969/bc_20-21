import { Component } from "react";
import Cart from "../Cart/Cart";
import Main from "../Main/Main";

class ShopPage extends Component {
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
        <Main handleAddProductToCart={this.handleAddProductToCart} />
        <Cart
          cartProducts={cartProducts}
          isCartOpen={isCartOpen}
          handleCloseCart={this.handleCloseCart}
          handleRemoveProduct={this.handleRemoveProduct}
        />
      </>
    );
  }
}

export default ShopPage;
