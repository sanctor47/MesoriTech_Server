"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var readingSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  unit: {
    type: String
  },
  value: {
    type: Number
  },
  timestamp: {
    type: Date
  },
  device: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Device"
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Reading', readingSchema);
exports["default"] = _default;