import { Component, useState, useEffect } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoPage = () => {
  const [filter, setFilter] = useState("all");
  const [todo, setTodo] = useState(
    // () => JSON.parse(localStorage.getItem("todo")) || todoList
    []
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

  const updateStatus = (id) => {
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

  // useEffect(() => {
  //   console.log("TodoPage");
  // }, [filter]);

  // console.log("RENDER_TodoPage");

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
        updateStatus={updateStatus}
      />
    </>
  );
};

class ClassTodoPage extends Component {
  state = {
    todo: [],
    filter: "all",
  };

  componentDidMount() {
    const parsedTodo = JSON.parse(localStorage.getItem("todo")) || todoList;
    this.setState({ todo: parsedTodo });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todo !== prevState.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

  addTodo = (newTodo) => {
    this.setState((prevState) => ({
      todo: [...prevState.todo, newTodo],
    }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((el) => el.id !== id),
    }));
  };

  updateStatus = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.map((el) =>
        el.id === id ? { ...el, isDoneStatus: !el.isDoneStatus } : el
      ),
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  filterTodosByPriority = () => {
    const { todo, filter } = this.state;
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  render() {
    const { filter } = this.state;
    const filteredTodos = this.filterTodosByPriority();
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <div style={{ width: "200px", margin: "0 auto 20px" }}>
          <h3>Filter by priority:</h3>
          <select name="filter" value={filter} onChange={this.handleChange}>
            <option value="all">ALL</option>
            <option value={TodoForm.priority.LOW}>LOW</option>
            <option value={TodoForm.priority.MEDIUM}>MEDIUM</option>
            <option value={TodoForm.priority.HIGH}>HIGH</option>
          </select>
        </div>
        <ToDoList
          todo={filteredTodos}
          removeTodo={this.removeTodo}
          updateStatus={this.updateStatus}
        />
      </>
    );
  }
}

export default TodoPage;
