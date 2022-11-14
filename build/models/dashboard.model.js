"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var dashboardSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  feild: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Feild"
  },
  domain: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Domain"
  },
  dataObj: {
    soilQuality: {
      index: {
        type: Number
      }
    }
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Dashboard', dashboardSchema);
exports["default"] = _default;