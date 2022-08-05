import {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import TodoFilter from "../TodoFilter/TodoFilter";
import { FilterContext } from "../../context/FilterProvider";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = () => {
  const { filter } = useContext(FilterContext);

  const [todo, setTodo] = useLocalStorage(todoList, "todo");

  const [color, setColor] = useState("transparent");

  // const firstRenderRef = useRef(true);

  const addTodo = useCallback((newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  }, []);

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((el) =>
        el.id !== id ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      )
    );
  };

  const filteredTodos = useMemo(() => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [filter, todo]);

  return (
    <div style={{ backgroundColor: color }}>
      <button
        type="button"
        onClick={() =>
          setColor((prev) => (prev !== "transparent" ? "transparent" : "blue"))
        }
      >
        Change BG color
      </button>
      <ToDoForm addTodo={addTodo} />
      <TodoFilter />
      <ToDoList
        todo={filteredTodos}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </div>
  );
};

export default TodoPage;
