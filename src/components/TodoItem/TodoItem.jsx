import { useEffect, useRef, useState } from "react";
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
  const [isIntervalActive, setIsIntervalActive] = useState(true);

  const intervalIdRef = useRef(null);
  const itemRef = useRef(null);

  const handleStopInterval = () => {
    setIsIntervalActive(false);
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1500);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <li
      className={s.toDoItem}
      ref={itemRef}
      style={!isIntervalActive ? { backgroundColor: "red" } : null}
    >
      <p className={s.date}>
        {date} <span>Counter: {counter}</span>
      </p>
      <button type="button" onClick={handleStopInterval}>
        Stop Interval
      </button>
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
