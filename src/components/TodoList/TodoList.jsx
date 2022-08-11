import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);
  const filter = useSelector((state) => state.todo.filter);

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(items));
  // }, [items]);

  const todo =
    filter === "all" ? items : items.filter((item) => item.priority === filter);

  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;
