import { useSelector } from "react-redux";
import { getFilteredTodo } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const todo = useSelector(getFilteredTodo);

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
