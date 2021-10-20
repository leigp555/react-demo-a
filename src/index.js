import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.querySelector("#root");
let n = 0;
const Demo =()=>React.createElement("div", { className: "red", key: "fuck" }, [
  n,
  React.createElement(
    "button",
    {
      key: "fuckYou",
      onClick: () => {
        n += 1;
        ReactDOM.render(Demo(), root);
      },
    },
    "+1"
  ),
]) ;
ReactDOM.render(Demo(), root);
