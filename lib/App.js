"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./index.css");
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function App() {
  function change() {
    setTodo([].concat(_toConsumableArray(todo), [state]));
    updateState("");
  }
  function onDelete(index) {
    todo.splice(index, 1);
    setTodo(_toConsumableArray(todo));
  }
  function swapItem(index1, index2) {
    var temp = todo[index1];
    todo[index1] = todo[index2];
    todo[index2] = temp;
    setTodo(_toConsumableArray(todo));
  }
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    todo = _useState2[0],
    setTodo = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    state = _useState4[0],
    updateState = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    clickPageNum = _useState6[0],
    setClickPageNum = _useState6[1];
  var total = 0;
  var _useState7 = (0, _react.useState)(function () {
      var todoList = [];
      for (var index = 0; index < 100; index++) {
        total++;
        todoList.push({
          title: "title" + index,
          desc: "desc" + index
        });
      }
      return todoList;
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    todo1 = _useState8[0],
    setTode = _useState8[1];
  /*
   */
  var pagesize = 5;
  var _useState9 = (0, _react.useState)(function () {
      var i = (total + pagesize - 1) / pagesize;
      while (1) {
        if (i % 1 === 0) {
          return i;
        } else {
          total = total - 1;
          i = (total + pagesize - 1) / pagesize;
        }
      }
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    pageNum = _useState10[0],
    setPageNum = _useState10[1];
  var _useState11 = (0, _react.useState)("bottom"),
    _useState12 = _slicedToArray(_useState11, 2),
    position = _useState12[0],
    setPosition = _useState12[1];
  var _useState13 = (0, _react.useState)("end"),
    _useState14 = _slicedToArray(_useState13, 2),
    align = _useState14[0],
    setAlign = _useState14[1];
  //Math.floor((total + pagesize - 1) / pagesize));
  return /*#__PURE__*/_react["default"].createElement("article", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Todo"), /*#__PURE__*/_react["default"].createElement(_antd.Space, null, /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    style: {
      width: 1293
    },
    placeholder: "\u8BF7\u8F93\u5165",
    value: state,
    onChange: function onChange(e) {
      updateState(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        setTodo([].concat(_toConsumableArray(todo), [state]));
        updateState("");
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_antd.Space, {
    wrap: true
  }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "dashed",
    onClick: function onClick() {
      change();
    }
  }, "Orz"))), /*#__PURE__*/_react["default"].createElement(_antd.List, {
    style: {
      marginTop: 24
    },
    header: /*#__PURE__*/_react["default"].createElement("div", null, "Header"),
    footer: /*#__PURE__*/_react["default"].createElement("div", null, "Footer"),
    bordered: true,
    dataSource: todo,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/_react["default"].createElement(_antd.List.Item, null, item);
    },
    pagination: {
      position: position,
      align: align,
      defaultCurrent: 1,
      total: todo.length,
      pageSize: 5
    }
  }));
}
var _default = App;
exports["default"] = _default;