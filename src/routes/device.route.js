import express from 'express';
import * as deviceController from '../controllers/device.controller';

const router = express.Router();

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
router.delete('/id/:_id', deviceController.deleteDevice);

export default router;
