import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from "react";
function TodoListItem(props) {
  var _useState = useState("white"),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    opstate = _useState4[0],
    setOp = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    _ = _useState6[0],
    setB = _useState6[1];
  useEffect(function () {
    setOp(1);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    onMouseEnter: function onMouseEnter() {
      setHover("yellow");
      setB(1);
    },
    onMouseLeave: function onMouseLeave() {
      setHover("pink");
      setB(0);
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all 1s",
      opacity: opstate,
      background: hover,
      color: "blue"
    }
  }, props.content, props.button === 1 ? /*#__PURE__*/React.createElement("buttton", null, "\xD7") : null), props.splitLine ? /*#__PURE__*/React.createElement("hr", null) : null);
}
export default TodoListItem;