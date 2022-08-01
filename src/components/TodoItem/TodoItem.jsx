import { Component } from "react";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

class TodoItem extends Component {
  state = {
    counter: 0,
  };

  intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log(this.intervalId);
//       this.setState((prev) => ({ counter: prev.counter + 1 }));
//     }, 2000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

  render() {
    const {
      title,
      descr,
      id,
      date,
      priority,
      isDoneStatus,
      updateStatus,
      removeTodo,
    } = this.props;

    return (
      <li className={s.toDoItem}>
        <p className={s.date}>
          {date} <span>Counter: {this.state.counter}</span>
        </p>
        <h3 className={`${s.title} ${isDoneStatus && s.isDone}`}>{title}</h3>
        <p className={`${s.descr} ${isDoneStatus && s.isDone}`}>{descr}</p>
        <p className={`${s.priority} ${isDoneStatus && s.isDone}`}>
          Priority - <span>{priority}</span>
        </p>

        <label className={s.status}>
          <input
            type="checkbox"
            name="status"
            checked={isDoneStatus}
            onChange={() => updateStatus(id)}
          />
          Done
        </label>
        <button className={s.todoBtn} onClick={() => removeTodo(id)}>
          <svg className={s.icon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
      </li>
    );
  }
}

export default TodoItem;
