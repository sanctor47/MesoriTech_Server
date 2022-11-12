"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var deviceSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  label: {
    type: String
  },
  clientId: {
    type: String
  },
  password: {
    type: String
  },
  active: {
    type: Boolean,
    "default": false
  },
  lastReading: {
    type: String
  },
  sensors: [{
    name: {
      type: String
    },
    unit: {
      type: String
    }
  }],
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  feild: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Feild"
  },
  domain: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Domain"
  },
  isGateway: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Device', deviceSchema);
exports["default"] = _default;