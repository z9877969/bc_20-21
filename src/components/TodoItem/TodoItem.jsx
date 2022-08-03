import { useEffect, useState } from "react";
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
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>
        {date} <span>Counter: {counter}</span>
      </p>
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

export default TodoItem;
