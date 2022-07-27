import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoList = ({ todo }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
          <p className={`${s.descr} ${true && s.isDone}`}>{descr}</p>
          <label className={s.status}>
            <input type="checkbox" name="status" />
            Done
          </label>
          <button className={s.todoBtn}>
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
};

export default TodoList;
