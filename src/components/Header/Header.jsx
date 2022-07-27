import PropTypes from "prop-types";
import styles from "./Header.module.css";
import logoImg from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ handleOpenCart }) => {
  console.log("HEADER");
  for (let i = 0; i < 1e9; i += 1) {
    let n = 0;
    n += i;
  }
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logoImg} alt="" />
      </a>
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
};

export default Header;
