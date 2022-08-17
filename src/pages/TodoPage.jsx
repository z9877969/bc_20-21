import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/todoOperations";
import { getIsTodo, getError } from "../redux/todo/todoSelectors";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodo = useSelector(getIsTodo);
  const error = useSelector(getError);

  useEffect(() => {
    !isTodo && dispatch(getTodo());
  }, [dispatch, isTodo]);

  return (
    <div>
      <ToDoForm />
      {error ? (
        <h1>Error</h1>
      ) : (
        <>
          <TodoFilter />
          <ToDoList />
        </>
      )}
    </div>
  );
};

export default TodoPage;
