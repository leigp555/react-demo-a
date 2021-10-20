import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.querySelector("#root");
let n = 0;
const Demo = 
  React.createElement("div", { className: "red", key: "fuck" }, [
    n,
    React.createElement(
      "button",
      {
        key: "fuckX",
        onClick: () => {
          n += 1;
          ReactDOM.render(Demo, root);
         
        },
      },
      "+1"
    ),
  ]);
   console.log(n)
ReactDOM.render(Demo, root);
