import { Component } from "react";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";

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

  render() {
    const { isCartOpen, handleCloseCart } = this.props;
    const { cartProducts } = this.state;
    return (
      <>
        <Main handleAddProductToCart={this.handleAddProductToCart} />
        <Cart
          cartProducts={cartProducts}
          isCartOpen={isCartOpen}
          handleCloseCart={handleCloseCart}
          handleRemoveProduct={this.handleRemoveProduct}
        />
      </>
    );
  }
}

export default ShopPage;
