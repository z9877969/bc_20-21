import PropTypes from "prop-types";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoItem = ({
  title,
  descr,
  id,
  date,
  priority,
  isDoneStatus,
  updateTodoStatus,
  removeTodo,
}) => {
  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${isDoneStatus && s.isDone}`}>{title}</h3>
      <p className={`${s.descr} ${isDoneStatus && s.isDone}`}>{descr}</p>
      <p className={`${s.priority} ${isDoneStatus && s.isDone}`}>
        Priority - <span>{priority}</span>
      </p>

      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          checked={isDoneStatus}
          onChange={() => updateTodoStatus(id)}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={() => removeTodo(id)}>
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
  updateTodoStatus: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
