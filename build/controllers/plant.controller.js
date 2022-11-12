"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePlant = exports.newPlant = exports.getPlant = exports.getAllPlants = exports.deletePlant = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var PlantService = _interopRequireWildcard(require("../services/plant.service"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Controller to get all plants available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
var getAllPlants = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return PlantService.getAllPlants();
          case 3:
            data = _context.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: 'All plants fetched successfully'
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
  return function getAllPlants(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Controller to get a single plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.getAllPlants = getAllPlants;
var getPlant = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return PlantService.getPlant(req.params._id);
          case 3:
            data = _context2.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: 'Plant fetched successfully'
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
  return function getPlant(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Controller to create a new plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.getPlant = getPlant;
var newPlant = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return PlantService.newPlant(req.body);
          case 3:
            data = _context3.sent;
            res.status(_httpStatusCodes["default"].CREATED).json({
              code: _httpStatusCodes["default"].CREATED,
              data: data,
              message: 'Plant created successfully'
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
  return function newPlant(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Controller to update a plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.newPlant = newPlant;
var updatePlant = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return PlantService.updatePlant(req.params._id, req.body);
          case 3:
            data = _context4.sent;
            res.status(_httpStatusCodes["default"].ACCEPTED).json({
              code: _httpStatusCodes["default"].ACCEPTED,
              data: data,
              message: 'Plant updated successfully'
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
  return function updatePlant(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Controller to delete a plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
exports.updatePlant = updatePlant;
var deletePlant = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return PlantService.deletePlant(req.params._id);
          case 3:
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: [],
              message: 'Plant deleted successfully'
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
  return function deletePlant(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deletePlant = deletePlant;