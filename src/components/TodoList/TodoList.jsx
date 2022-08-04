import PropTypes from "prop-types";
import s from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
};

export default TodoList;
