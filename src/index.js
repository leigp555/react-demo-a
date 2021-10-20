import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.js"
import Loop from "./loop"
const root = document.querySelector("#root");
let n = 0;
const Demo = () =>{                 //这里箭头函数可以用加{}但是就要手动return ,如果不加{}就不用自己加return了
  return React.createElement("div", { className: "red", key: "fuck" }, [   
    n,
    React.createElement(
      "button",
      {
        key: "fuckX",
        onClick: () => {
          n += 1;
          ReactDOM.render(Demo(), root);
        },
      },
      "+1"
    ),
  ])};
ReactDOM.render(Demo(), root);
const app=document.querySelector("#app")
ReactDOM.render(<App />, app);
const loop=document.querySelector("#loop")
ReactDOM.render(<Loop />, loop);