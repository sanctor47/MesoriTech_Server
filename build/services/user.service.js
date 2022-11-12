"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.signup = exports.newUser = exports.login = exports.getUser = exports.getAllUsers = exports.deleteUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _domain = require("./domain.service");
//get all users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].find();
          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            throw _context.t0;
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

//create new user
exports.getAllUsers = getAllUsers;
var newUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].create(body);
          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            throw _context2.t0;
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function newUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//update single user
exports.newUser = newUser;
var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _user["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });
          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", data);
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            throw _context3.t0;
          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function updateUser(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

//delete single user
exports.updateUser = updateUser;
var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _user["default"].findByIdAndDelete(id);
          case 3:
            return _context4.abrupt("return", '');
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            throw _context4.t0;
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function deleteUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

//get single user
exports.deleteUser = deleteUser;
var getUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user["default"].findById(id);
          case 3:
            data = _context5.sent;
            return _context5.abrupt("return", data);
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            throw _context5.t0;
          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function getUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getUser = getUser;
var signup = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(body) {
    var firstName, lastName, email, phone, password, TargetUser, encryptedPassword, newUserData, NewUser, token, domain, appendedUser, data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            firstName = body.firstName, lastName = body.lastName, email = body.email, phone = body.phone, password = body.password;
            _context6.next = 4;
            return _user["default"].findOne({
              email: email
            });
          case 4:
            TargetUser = _context6.sent;
            if (!TargetUser) {
              _context6.next = 7;
              break;
            }
            throw {
              code: _httpStatusCodes["default"].CONFLICT,
              message: "Email address already in use"
            };
          case 7:
            encryptedPassword = _bcrypt["default"].hashSync(password, 10);
            newUserData = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: encryptedPassword,
              phone: phone
            };
            _context6.next = 11;
            return _user["default"].create(newUserData);
          case 11:
            NewUser = _context6.sent;
            token = _jsonwebtoken["default"].sign({
              user_id: NewUser._id,
              email: NewUser.email
            }, process.env.TOKEN_KEY, {
              expiresIn: "24h"
            });
            _context6.next = 15;
            return (0, _domain.newDomain)({
              name: "".concat(firstName, " ").concat(lastName, " - Organization"),
              createdBy: NewUser._id
            });
          case 15:
            domain = _context6.sent;
            _context6.next = 18;
            return updateUser(NewUser._id, {
              domain: domain._id
            });
          case 18:
            appendedUser = _context6.sent;
            data = {
              user: appendedUser,
              token: token
            };
            return _context6.abrupt("return", data);
          case 23:
            _context6.prev = 23;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            throw _context6.t0;
          case 27:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 23]]);
  }));
  return function signup(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
exports.signup = signup;
var login = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(body) {
    var TargetUser, res, token, response;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!body.email || !body.password)) {
              _context7.next = 3;
              break;
            }
            throw {
              message: "Please enter all required fields."
            };
          case 3:
            _context7.next = 5;
            return _user["default"].findOne({
              email: body.email
            });
          case 5:
            TargetUser = _context7.sent;
            if (!TargetUser) {
              _context7.next = 21;
              break;
            }
            console.log(TargetUser.password);
            console.log(body.password);
            _context7.next = 11;
            return _bcrypt["default"].compare(body.password, TargetUser.password);
          case 11:
            res = _context7.sent;
            if (!res) {
              _context7.next = 18;
              break;
            }
            token = _jsonwebtoken["default"].sign({
              user_id: TargetUser._id,
              email: TargetUser.email
            }, process.env.TOKEN_KEY, {
              expiresIn: "2h"
            });
            response = {
              user: TargetUser,
              token: token
            };
            return _context7.abrupt("return", response);
          case 18:
            throw {
              code: 403,
              message: "Invalid Credintials"
            };
          case 19:
            _context7.next = 22;
            break;
          case 21:
            throw {
              code: 404,
              message: "User not found"
            };
          case 22:
            _context7.next = 27;
            break;
          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](0);
            throw _context7.t0;
          case 27:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 24]]);
  }));
  return function login(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
exports.login = login;