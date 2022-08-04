import { useState } from "react";
import s from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(50);
  const [isRedBgColor, setIsRedBgColor] = useState(false);

  const toggleBackground = () => setIsRedBgColor((prev) => !prev);

  const btnsColor = isRedBgColor ? "green" : "red";
  const bgColor = isRedBgColor ? "red" : "green";
  
  return (
    <div className={s.container} style={{ backgroundColor: bgColor }}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 5);
            toggleBackground();
          }}
          className={s.btn}
          style={{ backgroundColor: btnsColor }}
          type="button"
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(0);
            toggleBackground();
          }}
          className={s.btn}
          style={{ backgroundColor: btnsColor }}
          type="button"
        >
          0
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 10);
            toggleBackground();
          }}
          className={s.btn}
          style={{ backgroundColor: btnsColor }}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
