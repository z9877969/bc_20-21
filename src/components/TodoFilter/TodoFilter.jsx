import { priorityOptions } from "../TodoForm/TodoForm";

const TodoFilter = () => {
  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>Filter by priority:</h3>
      <select name="filter">
        <option value="all">ALL</option>
        <option value={priorityOptions.LOW}>LOW</option>
        <option value={priorityOptions.MEDIUM}>MEDIUM</option>
        <option value={priorityOptions.HIGH}>HIGH</option>
      </select>
    </div>
  );
};

export default TodoFilter;
