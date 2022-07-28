import PropTypes from "prop-types";
import s from "./Filter.module.scss";

const Filter = ({ options = [] }) => {
  return (
    <ul className={s.filter}>
      {options.map(({ id, title }) => (
        <li className={s.item} key={id}>
          <input
            className={s.input}
            name="filter"
            value={id}
            type="checkbox"
            id={id}
          />
          <label className={s.label} htmlFor={id}>
            {title}
          </label>
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default Filter;
