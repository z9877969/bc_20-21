import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);
  const filter = useSelector((state) => state.todo.filter);

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
