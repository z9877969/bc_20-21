const Filter = ({ options = [] }) => {
  return (
    <ul className="filter">
      {options.map(({ id, title }) => (
        <li className="filter-item" key={id}>
          <label className="filter-label" htmlFor={id}>
            {title}
          </label>
          <input
            className="filter-input"
            name="filter"
            value={id}
            type="checkbox"
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default Filter;
