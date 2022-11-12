"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var domainSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  members: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  devices: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Device"
  }],
  feilds: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Feild"
  }]
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Domain', domainSchema);
exports["default"] = _default;