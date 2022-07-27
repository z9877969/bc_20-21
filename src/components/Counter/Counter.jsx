import { Component } from "react";
import s from "./Counter.module.scss";

const initialState = {
  count: 50,
};

class Counter extends Component {
  state = {
    count: initialState.count,
    a: false,
  };

  handleCountDecrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 10 };
    });
    // this.setState((prevState) => ({ count: prevState.count - 10 }));
    // this.setState(prevState => {
    //   return {a: !prevState.a}
    // });
  };

  handleCountIncrement = (event) => {
    console.log(event);
    this.setState((prevState) => ({ count: prevState.count + 15 }));
  };

  handleReset = () => {
    this.setState({ count: initialState.count });
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button
            onClick={this.handleCountDecrement}
            className={s.btn}
            type="button"
          >
            -
          </button>
          <button onClick={this.handleReset} className={s.btn} type="button">
            0
          </button>
          <button
            onClick={this.handleCountIncrement}
            className={s.btn}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

// el.addEventListener("click", () => {})

export default Counter;
