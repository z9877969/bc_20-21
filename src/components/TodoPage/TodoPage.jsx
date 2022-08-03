import { Component, useState, useEffect } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoPage = () => {
  const [filter, setFilter] = useState("all");
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) || todoList
  );

  const addTodo = (newTodo) => {
    // this.setState((prevState) => ({
    //   todo: [...prevState.todo, newTodo],
    // }));
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

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

  const handleChange = (e) => {
    const { value } = e.target;
    // this.setState({ filter: value });
    setFilter(value);
  };

  const filterTodosByPriority = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodos = filterTodosByPriority();

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <div style={{ width: "200px", margin: "0 auto 20px" }}>
        <h3>Filter by priority:</h3>
        <select name="filter" value={filter} onChange={handleChange}>
          <option value="all">ALL</option>
          <option value={TodoForm.priority.LOW}>LOW</option>
          <option value={TodoForm.priority.MEDIUM}>MEDIUM</option>
          <option value={TodoForm.priority.HIGH}>HIGH</option>
        </select>
      </div>
      <ToDoList
        todo={filteredTodos}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </>
  );
};

export default TodoPage;
