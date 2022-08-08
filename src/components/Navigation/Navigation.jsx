import { Link, NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={setActiveLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          {/* <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("counter");
            }}
          >
            Counter
          </a> */}
          <NavLink to="/counter" className={setActiveLinkClass}>
            Counter
          </NavLink>
        </li>
        <li className={s.navItem}>
          {/* <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("todo");
            }}
          >
            Todo
          </a> */}
          <NavLink to="/todo" className={setActiveLinkClass}>
            Todo
          </NavLink>
        </li>
        <li className={s.navItem}>
          {/* <a
            href="/"
            className={s.navLink}
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("news");
            }}
          >
            News
          </a> */}
          <NavLink to="/news" className={setActiveLinkClass}>
            News
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/top-news" className={setActiveLinkClass}>
            Top News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

// Navigation.propTypes = {
//   handleOpenActivePage: PropTypes.func.isRequired,
// };

export default Navigation;
