import s from "./TodoForm.module.scss";

const ToDoForm = () => {
  return (
    <form className={s.form}>
      <label className={s.label}>
        <span> Date </span>
        <input className={s.input} name="date" type="date" />
      </label>
      <label className={s.label}>
        <span> Title </span>
        <input className={s.input} type="text" name="title" />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input className={s.input} type="text" name="descr" />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
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

export default ToDoForm;
