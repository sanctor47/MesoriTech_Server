import HttpStatus from 'http-status-codes';
import * as DeviceService from '../services/device.service';

/**
 * Controller to get all devices available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllDevices = async (req, res, next) => {
  try {
    const data = await DeviceService.getAllDevices();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All devices fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to get all feilds available by Domain
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllDevicesByDomain = async (req, res, next) => {
  try {
    const data = await DeviceService.getAllDevicesByDomain(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All feilds fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to get all feilds available by Feild
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllDevicesByFeild = async (req, res, next) => {
  try {
    const data = await DeviceService.getAllDevicesByFeild(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All feilds fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get all feilds available by Domain
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllDevicesByCreatedBy = async (req, res, next) => {
  try {
    const data = await DeviceService.getAllDevicesByCreatedBy(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All feilds fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get all feilds available by Domain
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getLatestReadign = async (req, res, next) => {
  try {
    const data = await DeviceService.getLatestReadign(req.params.id, req.query.sensor);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All feilds fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single device
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDevice = async (req, res, next) => {
  try {
    const data = await DeviceService.getDevice(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Device fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new device
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newDevice = async (req, res, next) => {
  try {
    const data = await DeviceService.newDevice(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Device created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a device
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateDevice = async (req, res, next) => {
  try {
    const data = await DeviceService.updateDevice(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Device updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a device
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteDevice = async (req, res, next) => {
  try {
    await DeviceService.deleteDevice(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Device deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to update a device
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const SyncSensors = async (req, res, next) => {
  try {
    const data = await DeviceService.SyncSensors(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Device updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new reading
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newReading = async (req, res, next) => {
  try {
    const data = await DeviceService.newReading(req.params.id, req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Device created successfully'
    });
  } catch (error) {
    next(error);
  }
};