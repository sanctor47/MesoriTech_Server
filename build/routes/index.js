"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _soil = _interopRequireDefault(require("./soil.route"));
var _plant = _interopRequireDefault(require("./plant.route"));
var _bed = _interopRequireDefault(require("./bed.route"));
var _feild = _interopRequireDefault(require("./feild.route"));
var _domain = _interopRequireDefault(require("./domain.route"));
var _reading = _interopRequireDefault(require("./reading.route"));
var _sensor = _interopRequireDefault(require("./sensor.route"));
var _device = _interopRequireDefault(require("./device.route"));
var _user = _interopRequireDefault(require("./user.route"));
var router = _express["default"].Router();
/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/devices', _device["default"]);
  router.use('/sensors', _sensor["default"]);
  router.use('/readings', _reading["default"]);
  router.use('/domains', _domain["default"]);
  router.use('/feilds', _feild["default"]);
  router.use('/beds', _bed["default"]);
  router.use('/plants', _plant["default"]);
  router.use('/soils', _soil["default"]);
  return router;
};
var _default = routes;
exports["default"] = _default;