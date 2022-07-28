import { Component } from "react";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todoList,
  };

  addTodo = (newTodo) => {
    this.setState((prevState) => ({ todo: [...prevState.todo, newTodo] }));
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

  render() {
    const { todo } = this.state;
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <ToDoList
          todo={todo}
          removeTodo={this.removeTodo}
          updateStatus={this.updateStatus}
        />
      </>
    );
  }
}

export default TodoPage;
