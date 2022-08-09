import s from "./Counter.module.scss";

const Counter = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{0}</p>
      <div className={s.btnsWrapper}>
        <button className={s.btn} type="button">
          -
        </button>
        <button className={s.btn} type="button">
          0
        </button>
        <button className={s.btn} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
