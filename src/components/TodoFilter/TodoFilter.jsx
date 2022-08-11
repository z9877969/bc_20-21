import { useDispatch, useSelector } from "react-redux";
import { priorityOptions } from "../TodoForm/TodoForm";
import { changeFilter } from "../../redux/todo/todoActions";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  const handleChange = (e) => dispatch(changeFilter(e));

  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>Filter by priority:</h3>
      <select name="filter" value={filter} onChange={handleChange}>
        <option value="all">ALL</option>
        <option value={priorityOptions.LOW}>LOW</option>
        <option value={priorityOptions.MEDIUM}>MEDIUM</option>
        <option value={priorityOptions.HIGH}>HIGH</option>
      </select>
    </div>
  );
};

export default TodoFilter;
