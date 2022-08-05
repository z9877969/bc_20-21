import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import FilterProvider from "./context/FilterProvider";
import ModalProvider from "./context/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <ModalProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ModalProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
