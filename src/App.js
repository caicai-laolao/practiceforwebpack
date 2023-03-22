"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
require("./index.css");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var antd_1 = require("antd");
var antd_2 = require("antd");
var antd_3 = require("antd");
function App() {
    function change() {
        setTodo(__spreadArray(__spreadArray([], todo, true), [state], false));
        updateState("");
    }
    function onDelete(index) {
        todo.splice(index, 1);
        setTodo(__spreadArray([], todo, true));
    }
    function swapItem(index1, index2) {
        var temp = todo[index1];
        todo[index1] = todo[index2];
        todo[index2] = temp;
        setTodo(__spreadArray([], todo, true));
    }
    var _a = (0, react_1.useState)([]), todo = _a[0], setTodo = _a[1];
    var _b = (0, react_1.useState)(""), state = _b[0], updateState = _b[1];
    var _c = (0, react_1.useState)(), clickPageNum = _c[0], setClickPageNum = _c[1];
    var total = 0;
    var _d = (0, react_1.useState)(function () {
        var todoList = [];
        for (var index = 0; index < 100; index++) {
            total++;
            todoList.push({
                title: "title" + index,
                desc: "desc" + index
            });
        }
        return todoList;
    }), todo1 = _d[0], setTode = _d[1];
    /*
     */
    var pagesize = 5;
    var _e = (0, react_1.useState)(function () {
        var i = (total + pagesize - 1) / pagesize;
        while (1) {
            if (i % 1 === 0) {
                return i;
            }
            else {
                total = total - 1;
                i = (total + pagesize - 1) / pagesize;
            }
        }
    }), pageNum = _e[0], setPageNum = _e[1];
    var _f = (0, react_1.useState)("bottom"), position = _f[0], setPosition = _f[1];
    var _g = (0, react_1.useState)("end"), align = _g[0], setAlign = _g[1];
    //Math.floor((total + pagesize - 1) / pagesize));
    return (<article>
      <h1>Todo</h1>
      <antd_1.Space>
        <antd_2.Input style={{ width: 1293 }} placeholder="请输入" value={state} onChange={function (e) {
            updateState(e.target.value);
        }} onKeyDown={function (e) {
            if (e.key === "Enter") {
                setTodo(__spreadArray(__spreadArray([], todo, true), [state], false));
                updateState("");
            }
        }}></antd_2.Input>
        <antd_1.Space wrap>
          <antd_1.Button type="dashed" onClick={function () {
            change();
        }}>
            Orz
          </antd_1.Button>
        </antd_1.Space>
      </antd_1.Space>

      <antd_3.List style={{ marginTop: 24 }} header={<div>Header</div>} footer={<div>Footer</div>} bordered dataSource={todo} renderItem={function (item) { return <antd_3.List.Item>{item}</antd_3.List.Item>; }} pagination={{
            position: position,
            align: align,
            defaultCurrent: 1,
            total: todo.length,
            pageSize: 5
        }}/>
    </article>);
}
var container = document.getElementById("2Chaos");
var root = (0, client_1.createRoot)(container);
root.render(<App />);
exports["default"] = App;
