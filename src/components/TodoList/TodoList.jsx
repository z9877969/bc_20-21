import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, removeTodo, updateStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
          removeTodo={removeTodo}
          updateStatus={updateStatus}
        />
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
