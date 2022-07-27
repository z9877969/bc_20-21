import PropTypes from "prop-types";

const Navigation = ({ handleOpenActivePage }) => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("shop");
            }}
          >
            Shop
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleOpenActivePage("todo");
            }}
          >
            Todo
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
