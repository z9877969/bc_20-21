import {
  StyledCartContainer,
  StyledBtnClose,
  StyledProductsList,
  StyledProductItem,
  StyledBtnRemove,
  StyledBtnOrder,
} from "./Cart.styled";
import sprite from "../../assets/icons/sprite.svg";

const Cart = () => {
  const isOpen = false;
  return (
    <StyledCartContainer isOpen={isOpen ? true : false}>
      <StyledBtnClose type="button">
        <svg class="icon-close">
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </StyledBtnClose>
      <StyledProductsList class="cart-products">
        <StyledProductItem class="cart-product">
          <img
            class="cart-image"
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <div class="cart-descr">
            <h3 class="cart-model">ZTE RedMagic</h3>
            <span class="cart-price">11999</span>
            <span class="cart-currency">UAH</span>
          </div>
          <StyledBtnRemove class="cart-btn-remove" type="button">
            <svg class="icon-remove">
              <use href={sprite + "#icon-cross"}></use>
            </svg>
          </StyledBtnRemove>
        </StyledProductItem>
        <StyledProductItem class="cart-product">
          <img
            class="cart-image"
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <div class="cart-descr">
            <h3 class="cart-model">ZTE RedMagic</h3>
            <span class="cart-price">11999</span>
            <span class="cart-currency">UAH</span>
          </div>
          <StyledBtnRemove class="cart-btn-remove" type="button">
            <svg class="icon-remove">
              <use href={sprite + "#icon-cross"}></use>
            </svg>
          </StyledBtnRemove>
        </StyledProductItem>
      </StyledProductsList>
      <StyledBtnOrder class="cart-btn-order" type="button">
        Замовити
      </StyledBtnOrder>
    </StyledCartContainer>
  );
};

export default Cart;
