import { Component, useState } from "react";
import s from "./Counter.module.scss";

const initialState = {
  count: 50,
};

const Counter = () => {
  const [count, setCount] = useState(50);
  const [isOpen, setIsOpen] = useState(true); // [value, setValue]
  const [color, setColor] = useState("red"); // [value, setValue]

  const toggleBackground = () =>
    setColor((prev) => (prev === "red" ? "green" : "red"));

  console.log("RENDER");
  return (
    <div className={s.container} style={{ backgroundColor: color }}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => {
            setCount(count - 10); // 40
            setCount(count - 10); // 40
            setCount(count - 10); // 40
            setCount(count - 10); // 40
            setCount((prevCount) => prevCount - 5); // 35
            toggleBackground();
          }}
          className={s.btn}
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
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
