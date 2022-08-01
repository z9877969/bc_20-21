import { Component, PureComponent } from "react";
import { v4 } from "uuid";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import TodoForm from "../TodoForm/TodoForm";

class TodoPage extends PureComponent {
  state = {
    todo: [], // [{},{},{},{}]
    filter: "all",
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // console.log("nextProps :>> ", nextProps);
  //   // console.log("prevState :>> ", prevState);
  //   console.log("GDSF");
  //   if (nextProps.activePage !== "shop") {
  //     return { filter: ToDoForm.priority.MEDIUM };
  //   }
  //   return null;
  // }

  componentDidMount() {
    console.log("CDM");
    const parsedTodo = JSON.parse(localStorage.getItem("todo")) || todoList;
    console.log("parsedTodo :>> ", parsedTodo);
    this.setState({ todo: parsedTodo });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("ShCU_TODOPAGE");
  //   // console.log("nextState :>> ", nextState);
  //   // console.log("this.state :>> ", this.state);

  //   // console.log("this.state === nextState :>> ", this.state === nextState);
  //   // console.log("this.props === nextProps :>> ", this.props === nextProps);
  //   if (
  //     JSON.stringify(nextProps) !== JSON.stringify(this.props) ||
  //     JSON.stringify(nextState) !== JSON.stringify(this.state)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("snapshot :>> ", snapshot);
    // if (this.state.todo !== prevState.todo) {
    //   window.scrollTo({
    //     top: snapshot,
    //     behavior: "smooth",
    //   });
    // }
    if (this.state.todo !== prevProps.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }
  }

  // addManyTodo = (newTodo) => {
  //   this.setState((prevState) => ({
  //     todo: [
  //       ...prevState.todo,
  //       ...Array(18)
  //         .fill(null)
  //         .map((el) => ({ ...newTodo, id: v4() })),
  //     ],
  //   }));
  //   // getItemToLS(todo)
  // };
  addTodo = (newTodo) => {
    this.setState((prevState) => ({
      todo: [...prevState.todo, newTodo],
    }));
    // getItemToLS(todo)
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((el) => el.id !== id),
    }));
    // getItemToLS(todo)
  };

  updateStatus = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.map((el) =>
        el.id === id ? { ...el, isDoneStatus: !el.isDoneStatus } : el
      ),
    }));
    // getItemToLS(todo)
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
    // let n = 0;
    // for (let i = 0; i <= 1e9; i += 1) {
    //   n += i;
    // }
    console.log("RENDER_TODOPAGE");
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
