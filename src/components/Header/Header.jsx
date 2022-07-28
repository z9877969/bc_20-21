import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ handleOpenCart, handleOpenActivePage }) => {
  return (
    <header className={s.header}>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      <div className={s["cart-info"]}>
        <button
          onClick={handleOpenCart}
          type="button"
          className={s["btn-cart"]}
        >
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </button>
        <p className={s["cart-descr"]}>ProdNum: 0</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleOpenCart: PropTypes.func.isRequired,
};

export default Header;
