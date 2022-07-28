import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoList = ({ todo, removeTodo, updateStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date, priority, isDoneStatus }) => (
        <li key={id} className={s.toDoItem}>
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
              onChange={() => updateStatus(id)}
            />
            Done
          </label>
          <button className={s.todoBtn} onClick={() => removeTodo(id)}>
            <svg className={s.icon}>
              <use href={sprite + "#icon-trash"}></use>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

export default TodoList;
