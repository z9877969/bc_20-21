import { NavLink, useLocation } from "react-router-dom";
import s from "./Navigation.module.scss";

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const Navigation = () => {
  const location = useLocation(); // location-HomePage

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={setActiveLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/counter" className={setActiveLinkClass}>
            Counter
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/todo" className={setActiveLinkClass}>
            Todo
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/news" state={location} className={setActiveLinkClass}>
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

export default Navigation;
