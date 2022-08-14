import { NavLink, useLocation } from "react-router-dom";
import LangSelect from "../LangSelect/LangSelect";
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
          <NavLink to="/counter" className={setActiveLinkClass}>
            Counter
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/todo" className={setActiveLinkClass}>
            Todo
          </NavLink>
        </li>
      </ul>
      <LangSelect />
    </nav>
  );
};

export default Navigation;
