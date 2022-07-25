import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";



// const nav = React.createElement(
//   "nav",
//   { className: "header__nav" },
//   React.createElement("img", {
//     src: "logo",
//     className: "App-logo",
//     alt: "logo",
//   }),
//   React.createElement(
//     "ul",
//     null,
//     React.createElement(
//       "li",
//       null,
//       React.createElement("a", { href: "#" }, "Link-1")
//     )
//   )
// );

// const header = React.createElement("header", { id: "header-id" }, nav);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* {header} */}
    {/* header */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
