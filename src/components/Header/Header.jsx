import styles from "./Header.module.css";
import logoImg from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

console.log(logoImg);

const Header = () => {
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
        <button type="button" className={styles["btn-cart"]}>
          <svg>
            <use href={`${sprite}#icon-cart`}></use>
          </svg>
        </button>
        <p className={styles["cart-descr"]}>ProdNum: 0</p>
      </div>
    </header>
  );
};

export default Header;
