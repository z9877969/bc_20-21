import {
  StyledCartContainer,
  StyledBtnClose,
  StyledProductsList,
  StyledProductItem,
  StyledBtnRemove,
  StyledBtnOrder,
} from "./Cart.styled";
import sprite from "../../assets/icons/sprite.svg";
import PropTypes from "prop-types";

const Cart = ({
  cartProducts,
  isCartOpen,
  handleCloseCart,
  handleRemoveProduct,
}) => {
  return (
    <StyledCartContainer isOpen={isCartOpen}>
      <StyledBtnClose type="button" onClick={handleCloseCart}>
        <svg class="icon-close">
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </StyledBtnClose>
      <StyledProductsList class="cart-products">
        {cartProducts.map((product) => (
          <StyledProductItem class="cart-product" key={product.id}>
            <img class="cart-image" src={product.url} alt="" />
            <div class="cart-descr">
              <h3 class="cart-model">{product.model}</h3>
              <span class="cart-price">{product.price}</span>
              <span class="cart-currency">{product.currency}</span>
            </div>
            <StyledBtnRemove
              onClick={() => {
                handleRemoveProduct(product.id);
              }}
              class="cart-btn-remove"
              type="button"
            >
              <svg class="icon-remove">
                <use href={sprite + "#icon-cross"}></use>
              </svg>
            </StyledBtnRemove>
          </StyledProductItem>
        ))}
      </StyledProductsList>
      <StyledBtnOrder class="cart-btn-order" type="button">
        Замовити
      </StyledBtnOrder>
    </StyledCartContainer>
  );
};

Cart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  cartProducts: PropTypes.array.isRequired,
  handleCloseCart: PropTypes.func.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
};

export default Cart;
