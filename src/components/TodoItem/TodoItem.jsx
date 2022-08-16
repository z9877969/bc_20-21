import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { updateStatusTodo } from "../../redux/todo/todoSlice";
import { removeTodo } from "../../redux/todo/todoOperations";
import langOptions from "../../utils/options/langOptions";
import { getLang } from "../../redux/lang/langSelector";

const { todoItem: todoItemLang, todoForm: todoFormLang } = langOptions;

const TodoItem = ({ title, descr, id, date, priority, isDoneStatus }) => {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  const handleRemove = () => dispatch(removeTodo(id));

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${isDoneStatus && s.isDone}`}>{title}</h3>
      <p className={`${s.descr} ${isDoneStatus && s.isDone}`}>{descr}</p>
      <p className={`${s.priority} ${isDoneStatus && s.isDone}`}>
        {todoItemLang.priorityTitle[lang]} -{" "}
        <span>{todoFormLang.priority[priority][lang]}</span>
      </p>

      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          onChange={() => dispatch(updateStatusTodo(id))}
          checked={isDoneStatus}
        />
        {todoItemLang.status[lang]}
      </label>
      <button className={s.todoBtn} onClick={handleRemove}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  date: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  isDoneStatus: PropTypes.bool.isRequired,
};

export default TodoItem;
