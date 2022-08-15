import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/todoOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodo = useSelector((state) => Boolean(state.todo.items.length));

  useEffect(() => {
    !isTodo && dispatch(getTodo());
  }, [dispatch]);

  return (
    <div>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </div>
  );
};

export default TodoPage;
