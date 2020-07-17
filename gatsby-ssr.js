"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

const onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  var tawkId = pluginOptions.tawkId;
  var source = "https://embed.tawk.to/" + tawkId + "/default";
  setHeadComponents([/*#__PURE__*/_react.default.createElement("script", {
    key: "gatsby-plugin-tawk",
    src: source,
    async: true
  })]);
};

exports.onRenderBody = onRenderBody;