const Cart = () => {
  return (
    <div class="cart">
      <button class="cart-btn-close" type="button">
        <svg class="cart-icon-close">
          <use href="../../code/src/assets/icons/sprite.svg#icon-cross"></use>
        </svg>
      </button>
      <ul class="cart-products">
        <li class="cart-product">
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
          <button class="cart-btn-remove" type="button">
            <svg class="cart-icon-remove">
              <use href="../../code/src/assets/icons/sprite.svg#icon-bin2"></use>
            </svg>
          </button>
        </li>
      </ul>
      <button class="cart-btn-order" type="button">Оформить</button>
    </div>
  );
};

export default Cart;
