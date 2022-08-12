import { useDispatch, useSelector } from "react-redux";
import { priorityOptions } from "../TodoForm/TodoForm";
// import { changeFilter } from "../../redux/todo/todoActions";
import { changeFilter } from "../../redux/todo/todoSlice";
import langOptions from "../../utils/options/langOptions";

const { todoFilter: todoFilterLang } = langOptions;

const TodoFilter = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.value);
  const filter = useSelector((state) => state.todo.filter);

  const handleChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>{todoFilterLang.title[lang]}:</h3>
      <select name="filter" value={filter} onChange={handleChange}>
        <option value="all">{todoFilterLang.priority.all[lang]}</option>
        <option value={priorityOptions.LOW}>
          {todoFilterLang.priority.low[lang]}
        </option>
        <option value={priorityOptions.MEDIUM}>
          {todoFilterLang.priority.medium[lang]}
        </option>
        <option value={priorityOptions.HIGH}>
          {todoFilterLang.priority.high[lang]}
        </option>
      </select>
    </div>
  );
};

export default TodoFilter;
