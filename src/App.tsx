import "./index.css";
import React, { useState } from "react";
import TodoListItem from "./RecipeTitle.jsx";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

function App() {
  function change() {
    setTodo([...todo, state]);
    updateState("");
  }
  function onDelete(index: any) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }
  function swapItem(index1: any, index2: any) {
    var temp = todo[index1];
    todo[index1] = todo[index2];
    todo[index2] = temp;
    setTodo([...todo]);
  }
  const [todo, setTodo] = useState<Array<string>>([""]);
  const [state, updateState] = useState<string>("0");
  const [stateTitle, updateStateTitle] = useState<string>("im title");
  const [stateDesc, updateStateDesc] = useState<string>("im desc");
  const [clickPageNum, setClickPageNum] = useState<number>(1);
  let total = 0;
  const [todo1, setTode] = useState(() => {
    const todoList = [];
    for (let index = 0; index < 100; index++) {
      total++;
      todoList.push({
        title: "title" + index,
        desc: "desc" + index,
      });
    }
    return todoList;
  });
  /*
   */
  let pagesize = 5;
  const [pageNum, setPageNum] = useState<number>(() => {
    let i = (total + pagesize - 1) / pagesize;
    while (1) {
      if (i % 1 === 0) {
        return i;
      } else {
        total = total - 1;
        i = (total + pagesize - 1) / pagesize;
      }
    }
  });
  //Math.floor((total + pagesize - 1) / pagesize));
  return (
    <article>
      <h1>Todo</h1>
      <input
        value={state}
        onChange={(e) => {
          updateState(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodo([...todo, state]);
            updateState("");
          }
        }}
      ></input>
      <button
        onClick={() => {
          change();
        }}
      >
        Orz
      </button>
      <input
        value={stateTitle}
        onChange={(e) => {
          updateStateTitle(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (stateDesc === "") {
            window.alert("There is no content in desc");
            return;
          }
          setTode([...todo1, { title: stateTitle, desc: stateDesc }]);
          updateStateTitle("");
          updateStateDesc("");
        }}
      >
        Title
      </button>
      <input
        value={stateDesc}
        onChange={(e) => {
          updateStateDesc(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (stateTitle === "") {
            window.alert("There is no content in title");
            return;
          }
          setTode([...todo1, { title: stateTitle, desc: stateDesc }]);
          updateStateDesc("");
        }}
      >
        Desc
      </button>

      <ul>
        <a>{state}</a>
        {todo.map((item, index) => {
          return (
            <TodoListItem
              key={index}
              content={item}
              splitLine={(index + 1) % 5 === 0}
              onDelete={onDelete}
              index={index}
              swapItem={swapItem}
              change={change}
            />
          );
        })}
        {todo1.map((obj, index) => {
          if (
            index > (clickPageNum - 1) * pagesize - 1 &&
            index < clickPageNum * pagesize
          )
            return (
              <li key={index}>
                <div>{obj.title}</div>
                <div
                  style={{
                    color: "pink",
                    padding: 8,
                    fontSize: 15,
                  }}
                >
                  {obj.desc}
                </div>
                <hr></hr>
              </li>
            );
        })}

        {new Array(pageNum).fill(null).map((_, index) => {
          return (
            <button
              key={index}
              style={{
                background: index !== clickPageNum - 1 ? "white" : "red",
              }}
              onClick={() => {
                setClickPageNum(index + 1);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </ul>
    </article>
  );
}
const container = document.getElementById("2Chaos");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
