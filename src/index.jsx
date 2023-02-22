import React from "react";
import ReactDOM from "react-dom";
import style from "./style.css";
function App() {
  console.log(style);
  return (
    <>
      <h1>Hello World!</h1>
      <h1 className={style.hello}>hoho</h1>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("2Chaos"));
