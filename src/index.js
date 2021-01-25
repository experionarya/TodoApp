import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./TodoApp";
import TodoSample from "./TodoSample";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
    {/* <TodoSample /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
