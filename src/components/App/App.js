// import { Fragment } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import React from "react";

// const div = React.createElement("div", null, "Hello DIV!");

const App = () => {
  console.log("App");
  return (
    <>
      <Header />
      <Main />
      <Cart />
    </>
  );
};

export default App;
