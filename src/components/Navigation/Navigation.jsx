import PropTypes from "prop-types";
import s from "./Navigation.module.scss";

const Navigation = ({ handleOpenActivePage }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("counter");
            }}
          >
            Counter
          </a>
        </li>
        <li className={s.navItem}>
          <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("todo");
            }}
          >
            Todo
          </a>
        </li>
        <li className={s.navItem}>
          <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("news");
            }}
          >
            News
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  handleOpenActivePage: PropTypes.func.isRequired,
};

export default Navigation;
