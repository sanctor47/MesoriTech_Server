"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBed = exports.newBed = exports.getBed = exports.getAllBeds = exports.deleteBed = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bed = _interopRequireDefault(require("../models/bed.model"));
//get all beds
var getAllBeds = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bed["default"].find();
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
  return function getAllBeds() {
    return _ref.apply(this, arguments);
  };
}();

//create new bed
exports.getAllBeds = getAllBeds;
var newBed = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bed["default"].create(body);
          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function newBed(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//update single bed
exports.newBed = newBed;
var updateBed = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _bed["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });
          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function updateBed(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

//delete single bed
exports.updateBed = updateBed;
var deleteBed = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _bed["default"].findByIdAndDelete(id);
          case 2:
            return _context4.abrupt("return", '');
          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function deleteBed(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

//get single bed
exports.deleteBed = deleteBed;
var getBed = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _bed["default"].findById(id);
          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data);
          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getBed(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getBed = getBed;