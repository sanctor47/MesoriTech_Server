"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var deviceController = _interopRequireWildcard(require("../controllers/device.controller"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();

//route to get all devices
router.get('', deviceController.getAllDevices);
router.get('/domain/:id', deviceController.getAllDevicesByDomain);
router.get('/feild/:id', deviceController.getAllDevicesByFeild);
router.get('/createdBy/:id', deviceController.getAllDevicesByCreatedBy);
router.get('/sync/:id', deviceController.SyncSensors);
router.post('/newReading/:id', deviceController.newReading);
router.get('/latestReading/:id', deviceController.getLatestReadign);

//route to create a new device
router.post('', deviceController.newDevice);

//route to get a single device by their device id
router.get('/id/:_id', deviceController.getDevice);

//route to update a single device by their device id
router.put('/id/:_id', deviceController.updateDevice);

//route to delete a single device by their device id
router["delete"]('/id/:_id', deviceController.deleteDevice);
var _default = router;
exports["default"] = _default;