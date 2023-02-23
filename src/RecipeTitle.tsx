import React, { useState, useEffect } from 'react';

function TodoListItem(props) {
  const [color, setColor] = useState('white');
  const [opstate, setOp] = useState(0);
  const [hover, setHover] = useState(0);
  const [descState, updatedescState] = useState<string>('1');
  const [desctodo, setdescTodo] = useState<Array<string>>([]);
  function descChange() {
    setdescTodo([...desctodo, descState]);
    updatedescState('');
  }
  useEffect(() => {
    setOp(1);
  }, []);
  return (
    <>
      <li
        onMouseEnter={() => {
          setColor('yellow');
          setHover(1);
        }}
        onMouseLeave={() => {
          setColor('pink');
          setHover(0);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 1s',
          opacity: opstate,
          background: color,
          color: 'blue',
          padding: 8,
        }}
      >
        {props.content}
        <div
          style={{
            display: 'flex',
            gap: 8,
            cursor: 'pointer',
          }}
        >
          {hover === 1 ? (
            <buttton
              onClick={() => {
                props.swapItem(props.index - 1, props.index);
              }}
            >
              ↑
            </buttton>
          ) : null}
          {hover === 1 ? (
            <buttton
              onClick={() => {
                props.swapItem(props.index, props.index + 1);
              }}
            >
              ↓
            </buttton>
          ) : null}
          {hover === 1 ? (
            <buttton
              onClick={() => {
                props.onDelete(props.index);
              }}
            >
              ×
            </buttton>
          ) : null}
          {hover === 1 ? (
            <input
              value={descState}
              onChange={(e) => {
                updatedescState(e.target.value);
              }}
            ></input>
          ) : null}
          {hover === 1 ? (
            <button
              onClick={() => {
                console.log(desctodo);
                descChange();
              }}
            >
              orz
            </button>
          ) : null}
        </div>
      </li>
      {desctodo.map((item, index) => (
        <div
          style={{
            marginLeft: 20,
            marginTop: 5,
          }}
        >
          {item}
        </div>
      ))}
      {props.splitLine ? <hr /> : null}
    </>
  );
}
export default TodoListItem;
//const [todo,setTode] = useState([]);
//setTode([{ title:"123",desc:"1234"}])
//todo.map((obj)=><li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)
