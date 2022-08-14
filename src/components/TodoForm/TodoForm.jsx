import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import s from "./TodoForm.module.scss";
import { useForm } from "../../hooks/useForm";
// import { addTodo } from "../../redux/todo/todoActions";
import { addTodo } from "../../redux/todo/todoSlice";
import langOptions from "../../utils/options/langOptions";

const { todoForm: todoFormLang } = langOptions;

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

const TodoForm = () => {
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.value);

  const { form, handleChange, handleSubmit } = useForm({
    initialValues: initialForm,
    onSubmit: (values) => {
      dispatch(addTodo({ ...values, isDoneStatus: false, id: nanoid() }));
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> {todoFormLang.date[lang]} </span>
        <input
          className={s.input}
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> {todoFormLang.title[lang]} </span>
        <input
          className={s.input}
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> {todoFormLang.descr[lang]} </span>
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
            {todoFormLang.priority.low[lang]}
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
            {todoFormLang.priority.medium[lang]}
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
            {todoFormLang.priority.high[lang]}
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
