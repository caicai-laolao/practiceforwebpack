import "./index.css";
import React, { useState } from "react";
import { Button, Space } from "antd";
import { Input } from "antd";
import { List } from "antd";
import {
  PaginationAlign,
  PaginationPosition,
} from "antd/es/pagination/Pagination";
export class App extends React.Component {
  render() {
    function change() {
      setTodo([...todo, state]);
      updateState("");
    }
    const [todo, setTodo] = useState<Array<string>>([]);
    const [state, updateState] = useState<string>("");
    const [position, _] = useState<PaginationPosition>("bottom");
    const [align, __] = useState<PaginationAlign>("end");
    //Math.floor((total + pagesize - 1) / pagesize));
    return (
      <article>
        <h1>Todo</h1>
        <Space>
          <Input
            style={{ width: 1293 }}
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

        <List
          style={{ marginTop: 24 }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={todo}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          pagination={{
            position,
            align,
            defaultCurrent: 1,
            total: todo.length,
            pageSize: 5,
          }}
        />
      </article>
    );
  }
}
