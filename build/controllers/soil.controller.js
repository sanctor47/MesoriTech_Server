"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSoil = exports.newSoil = exports.getSoil = exports.getAllSoils = exports.deleteSoil = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var SoilService = _interopRequireWildcard(require("../services/soil.service"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Controller to get all soils available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
var getAllSoils = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return SoilService.getAllSoils();
          case 3:
            data = _context.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: 'All soils fetched successfully'
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllSoils(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Controller to get a single soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.getAllSoils = getAllSoils;
var getSoil = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return SoilService.getSoil(req.params._id);
          case 3:
            data = _context2.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: 'Soil fetched successfully'
            });
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getSoil(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Controller to create a new soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.getSoil = getSoil;
var newSoil = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return SoilService.newSoil(req.body);
          case 3:
            data = _context3.sent;
            res.status(_httpStatusCodes["default"].CREATED).json({
              code: _httpStatusCodes["default"].CREATED,
              data: data,
              message: 'Soil created successfully'
            });
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function newSoil(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Controller to update a soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.newSoil = newSoil;
var updateSoil = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return SoilService.updateSoil(req.params._id, req.body);
          case 3:
            data = _context4.sent;
            res.status(_httpStatusCodes["default"].ACCEPTED).json({
              code: _httpStatusCodes["default"].ACCEPTED,
              data: data,
              message: 'Soil updated successfully'
            });
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function updateSoil(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Controller to delete a soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.updateSoil = updateSoil;
var deleteSoil = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return SoilService.deleteSoil(req.params._id);
          case 3:
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: [],
              message: 'Soil deleted successfully'
            });
            _context5.next = 9;
            break;
          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);
          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return function deleteSoil(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteSoil = deleteSoil;