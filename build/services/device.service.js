"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDevice = exports.newReading = exports.newDevice = exports.getLatestReadign = exports.getDevice = exports.getAllDevicesByFeild = exports.getAllDevicesByDomain = exports.getAllDevicesByCreatedBy = exports.getAllDevices = exports.deleteDevice = exports.SyncSensors = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _device = _interopRequireDefault(require("../models/device.model"));
var _reading = _interopRequireDefault(require("../models/reading.model"));
var _uuid = require("uuid");
var _feild = require("./feild.service");
//get all devices
var getAllDevices = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _device["default"].find();
          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function getAllDevices() {
    return _ref.apply(this, arguments);
  };
}();

//get all feilds
exports.getAllDevices = getAllDevices;
var getAllDevicesByDomain = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(domain) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _device["default"].find({
              domain: domain
            }).populate("domain").populate("feild");
          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllDevicesByDomain(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//get all feilds
exports.getAllDevicesByDomain = getAllDevicesByDomain;
var getAllDevicesByCreatedBy = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _device["default"].find({
              createdBy: user
            }).populate("feild");
          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;
          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getAllDevicesByCreatedBy(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

//get all feilds
exports.getAllDevicesByCreatedBy = getAllDevicesByCreatedBy;
var getAllDevicesByFeild = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(feild) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _device["default"].find({
              feild: feild
            }).populate("feild");
          case 3:
            data = _context4.sent;
            return _context4.abrupt("return", data);
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function getAllDevicesByFeild(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

//create new device
exports.getAllDevicesByFeild = getAllDevicesByFeild;
var newDevice = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
    var targetFeild, data, res;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            targetFeild = null;
            if (!body.feild) {
              _context5.next = 7;
              break;
            }
            console.log(body.feild);
            _context5.next = 6;
            return (0, _feild.getFeild)(body.feild);
          case 6:
            targetFeild = _context5.sent;
          case 7:
            data = {
              name: body.name,
              label: body.label,
              clientId: (0, _uuid.v4)(),
              password: (0, _uuid.v4)(),
              createdBy: body.createdBy,
              feild: body.feild
            };
            _context5.next = 10;
            return _device["default"].create(data);
          case 10:
            res = _context5.sent;
            _context5.next = 13;
            return (0, _feild.addDeviceToFeild)(targetFeild._id, res._id);
          case 13:
            return _context5.abrupt("return", res);
          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;
          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 16]]);
  }));
  return function newDevice(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
exports.newDevice = newDevice;
var SyncSensors = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_id, body) {
    var device;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _device["default"].findByIdAndUpdate({
              _id: _id
            }, {
              sensors: body.sensors
            }, {
              "new": true
            });
          case 3:
            device = _context6.sent;
            _context6.next = 9;
            break;
          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;
          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));
  return function SyncSensors(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
exports.SyncSensors = SyncSensors;
var readignBody = {
  timeStamp: "3294921",
  data: [{
    name: "Air Temprature",
    unit: "C",
    value: 24
  }]
};
var newReading = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_id, body) {
    var timeStamp, index, element;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            timeStamp = body.timeStamp;
            index = 0;
          case 3:
            if (!(index < body.data.length)) {
              _context7.next = 10;
              break;
            }
            element = body.data[index];
            _context7.next = 7;
            return _reading["default"].create({
              name: element.name,
              unit: element.unit,
              value: element.value,
              device: _id
            });
          case 7:
            index++;
            _context7.next = 3;
            break;
          case 10:
            return _context7.abrupt("return", "ok");
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;
          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 13]]);
  }));
  return function newReading(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
exports.newReading = newReading;
var getLatestReadign = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_id, name) {
    var data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log(name);
            _context8.next = 4;
            return _reading["default"].findOne({
              device: _id,
              name: name
            }, {}, {
              sort: {
                'createdAt': -1
              }
            });
          case 4:
            data = _context8.sent;
            return _context8.abrupt("return", data);
          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            throw _context8.t0;
          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function getLatestReadign(_x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();

//update single device
exports.getLatestReadign = getLatestReadign;
var updateDevice = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _device["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });
          case 2:
            data = _context9.sent;
            return _context9.abrupt("return", data);
          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function updateDevice(_x11, _x12) {
    return _ref9.apply(this, arguments);
  };
}();

//delete single device
exports.updateDevice = updateDevice;
var deleteDevice = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _device["default"].findByIdAndDelete(id);
          case 2:
            return _context10.abrupt("return", '');
          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function deleteDevice(_x13) {
    return _ref10.apply(this, arguments);
  };
}();

//get single device
exports.deleteDevice = deleteDevice;
var getDevice = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id) {
    var data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _device["default"].findById(id).populate("feild");
          case 2:
            data = _context11.sent;
            return _context11.abrupt("return", data);
          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return function getDevice(_x14) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getDevice = getDevice;