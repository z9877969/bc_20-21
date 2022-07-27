// import { todo } from "../../data/todo";
import s from "./TodoList.module.scss";

const ToDoList = ({ todos, removeTodo }) => {
  return (
    <ul className={s.container}>
      {todos.map(({ title, descr, id, date }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <h3 className={s.title}>{title}</h3>
          <p className={s.descr}>{descr}</p>
          <button onClick={(e) => removeTodo(id)} className={s.descr}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

// const fn = () => ({a: 5});
// const fn1 = () => {
//   let a = 0
//   return a + 1
// };
