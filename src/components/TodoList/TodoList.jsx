import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  console.log("TODOLIST");
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
