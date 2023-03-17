import React from "react";
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, children);
};
export default Button;