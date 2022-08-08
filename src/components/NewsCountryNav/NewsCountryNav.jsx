import { Link, NavLink } from "react-router-dom";

const stylesNav = {
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "10px",
};

const linkStyles = { padding: "10px", border: "1px solid blue" };

const setLinkStyles = ({ isActive }) =>
  isActive
    ? { ...linkStyles, color: "red", border: "1px solid red" }
    : linkStyles;

const NewsCountryNav = () => {
  return (
    <nav style={stylesNav}>
      <NavLink to="ua" style={setLinkStyles}>
        UA
      </NavLink>
      <NavLink to="pl" style={setLinkStyles}>
        PL
      </NavLink>
      <NavLink to="us" style={setLinkStyles}>
        US
      </NavLink>
      <NavLink to="fr" style={setLinkStyles}>
        FR
      </NavLink>
    </nav>
  );
};

export default NewsCountryNav;
