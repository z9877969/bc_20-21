import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo } from "../../data/todo";

const TodoPage = () => {
  return (
    <>
      <ToDoForm />
      <ToDoList todo={todo} />
    </>
  );
};

export default TodoPage;
