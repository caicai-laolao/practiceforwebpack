import "./index.css";
import React, { useState } from "react";
import TodoListItem from "./RecipeTitle.jsx";
import { createRoot } from "react-dom/client";
import { Button, Space } from "antd";
import { Input } from "antd";
import { Pagination } from "antd";
import { Divider, List, Typography } from "antd";
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
  const [todo, setTodo] = useState<Array<string>>(["Header"]);
  const [state, updateState] = useState<string>("0");
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
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
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
      <Space>
        <Input
          placeholder="请输入"
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
        ></Input>
        <Space wrap>
          <Button
            type="dashed"
            onClick={() => {
              change();
            }}
          >
            Orz
          </Button>
        </Space>
      </Space>

      <ul>
        <List
          style={{}}
          footer={<div>Footer</div>}
          bordered
          dataSource={todo}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Pagination
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "12px 8",
          }}
          defaultCurrent={1}
          total={50}
        />
      </ul>
    </article>
  );
}
const container = document.getElementById("2Chaos");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
