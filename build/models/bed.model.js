"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var bedSchema = new _mongoose.Schema({
  name: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Bed', bedSchema);
exports["default"] = _default;