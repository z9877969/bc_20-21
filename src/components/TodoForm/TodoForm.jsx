import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import s from "./TodoForm.module.scss";

const curDate = moment().format("YYYY-MM-DD");

class TodoForm extends Component {
  static priority = {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
  };

  state = {
    date: curDate,
    title: "",
    descr: "",
    priority: "", // low | medium | high
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const qwe = { ...this.state, id: uuidv4(), isDoneStatus: false };
    this.props.addTodo(qwe);
  };

  render() {
    const { date, title, descr } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            type="date"
            name="date"
            value={date} // 2022-07-28
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value={TodoForm.priority.LOW}
              checked={TodoForm.priority.LOW === this.state.priority} // "low" === this.state.priority
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value={TodoForm.priority.MEDIUM}
              checked={TodoForm.priority.MEDIUM === this.state.priority}
              onChange={this.handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value={TodoForm.priority.HIGH}
              checked={TodoForm.priority.HIGH === this.state.priority}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default TodoForm;
