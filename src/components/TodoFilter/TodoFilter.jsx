import { useContext } from "react";
import { FilterContext } from "../../context/FilterProvider";
import { priorityOptions } from "../TodoForm/TodoForm";

const TodoFilter = () => {
  const data = useContext(FilterContext);

  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>Filter by priority:</h3>
      <select
        name="filter"
        value={data.filter}
        onChange={(e) => data.setFilter(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value={priorityOptions.LOW}>LOW</option>
        <option value={priorityOptions.MEDIUM}>MEDIUM</option>
        <option value={priorityOptions.HIGH}>HIGH</option>
      </select>
    </div>
  );
};

export default TodoFilter;
