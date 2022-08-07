import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import s from "./TodoForm.module.scss";
import { useForm } from "../../hooks/useForm";

const curDate = moment().format("YYYY-MM-DD");

export const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const initialForm = {
  date: curDate,
  title: "",
  descr: "",
  priority: "",
};

const TodoForm = ({ addTodo }) => {
  const { form, handleChange, handleSubmit } = useForm({
    initialValues: initialForm,
    onSubmit: (values) => {
      const data = { ...values, id: uuidv4(), isDoneStatus: false };
      addTodo(data);
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input
          className={s.input}
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={form.descr}
          onChange={handleChange}
        />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.LOW}
            checked={priorityOptions.LOW === form.priority} // "low" === priority
            onChange={handleChange}
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
            value={priorityOptions.MEDIUM}
            checked={priorityOptions.MEDIUM === form.priority}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.HIGH}
            checked={priorityOptions.HIGH === form.priority}
            onChange={handleChange}
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
};

export default TodoForm;
