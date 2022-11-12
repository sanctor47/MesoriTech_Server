"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var feildSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  area: {
    type: Number
  },
  domain: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Domain"
  },
  devices: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Device"
  }],
  production: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Production"
  },
  alrams: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Alarm"
  }]
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Feild', feildSchema);
exports["default"] = _default;