import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelector";
import LangSelect from "../LangSelect/LangSelect";
import s from "./Navigation.module.scss";

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={setActiveLinkClass}>
            Home
          </NavLink>
        </li>
        {isAuth ? (
          <>
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
          </>
        ) : (
          <>
            <li className={s.navItem}>
              <NavLink to="/login" className={setActiveLinkClass}>
                Login
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink to="/register" className={setActiveLinkClass}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <LangSelect />
    </nav>
  );
};

export default Navigation;
