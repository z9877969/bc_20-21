import PropTypes from "prop-types";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import logoImg from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ handleOpenCart, handleOpenActivePage }) => {
  return (
    <header className={styles.header}>
      <a href="https://" className={styles.logo}>
        <img src={logoImg} alt="" />
      </a>
      <Navigation handleOpenActivePage={handleOpenActivePage} />
      <div className={styles["user-info"]}>
        <span className={styles["user-name"]}>B</span>
        <span className={styles["user-email"]}>user@mail.com</span>
      </div>
      <div className={styles["cart-info"]}>
        <button
          onClick={handleOpenCart}
          type="button"
          className={styles["btn-cart"]}
        >
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </button>
        <p className={styles["cart-descr"]}>ProdNum: 0</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleOpenCart: PropTypes.func.isRequired,
  handleOpenActivePage: PropTypes.func.isRequired,
};

export default Header;
