import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../redux/counter/counterSlice";
import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.message);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter - {message}</h1>
      <p className={s.count}>{counter}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(decrement(15))}
        >
          -
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(reset())}
        >
          0
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(increment(20))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
