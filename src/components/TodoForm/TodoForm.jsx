import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import moment from "moment";
import s from "./TodoForm.module.scss";

// console.log(moment().format); // "2022-07-28"

const curDate = new Date().toLocaleDateString().split(".").reverse().join("-");

class TodoForm extends Component {
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
            value={date}
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
              value="low"
              checked={"low" === this.state.priority} // "low" === this.state.priority
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
              value="medium"
              checked={"medium" === this.state.priority}
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
              value="high"
              checked={"high" === this.state.priority}
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
