"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFeild = exports.newFeild = exports.getFeild = exports.getAllFeildsByDomain = exports.getAllFeilds = exports.deleteFeild = exports.addDeviceToFeild = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _feild = _interopRequireDefault(require("../models/feild.model"));
//get all feilds
var getAllFeilds = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _feild["default"].find();
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
  return function getAllFeilds() {
    return _ref.apply(this, arguments);
  };
}();

//get all feilds
exports.getAllFeilds = getAllFeilds;
var getAllFeildsByDomain = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(domain) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _feild["default"].find({
              domain: domain
            }).populate("domain");
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
  return function getAllFeildsByDomain(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//create new feild
exports.getAllFeildsByDomain = getAllFeildsByDomain;
var newFeild = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _feild["default"].create(body);
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
  return function newFeild(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

//update single feild
exports.newFeild = newFeild;
var updateFeild = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _feild["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });
          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data);
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function updateFeild(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

//delete single feild
exports.updateFeild = updateFeild;
var deleteFeild = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _feild["default"].findByIdAndDelete(id);
          case 2:
            return _context5.abrupt("return", '');
          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function deleteFeild(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

//get single feild
exports.deleteFeild = deleteFeild;
var getFeild = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _feild["default"].findById(id);
          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data);
          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function getFeild(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

//update single feild
exports.getFeild = getFeild;
var addDeviceToFeild = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_id, deviceId) {
    var data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log("adding device ".concat(deviceId, " to feild ").concat(_id));
            _context7.next = 3;
            return _feild["default"].findByIdAndUpdate({
              _id: _id
            }, {
              $push: {
                devices: deviceId
              }
            }, {
              "new": true
            });
          case 3:
            data = _context7.sent;
            return _context7.abrupt("return", data);
          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function addDeviceToFeild(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
exports.addDeviceToFeild = addDeviceToFeild;