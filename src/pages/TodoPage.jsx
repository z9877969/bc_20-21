import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";

const TodoPage = () => {
  console.log("TODOPAGE");
  return (
    <div>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </div>
  );
};

export default TodoPage;
