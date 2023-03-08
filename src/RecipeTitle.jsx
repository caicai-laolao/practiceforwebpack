import React, { useState, useEffect } from "react";

function TodoListItem(props) {
  const [hover, setHover] = useState("white");
  const [opstate, setOp] = useState(0);
  const [_, setB] = useState(0);
  useEffect(() => {
    setOp(1);
  }, []);

  return (
    <>
      <li
        onMouseEnter={() => {
          setHover("yellow");
          setB(1);
        }}
        onMouseLeave={() => {
          setHover("pink");
          setB(0);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 1s",
          opacity: opstate,
          background: hover,
          color: "blue",
        }}
      >
        {props.content}
        {props.button === 1 ? <buttton>×</buttton> : null}
      </li>
      {props.splitLine ? <hr /> : null}
    </>
  );
}
export default TodoListItem;
