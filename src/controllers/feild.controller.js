import HttpStatus from 'http-status-codes';
import * as FeildService from '../services/feild.service';

/**
 * Controller to get all feilds available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllFeilds = async (req, res, next) => {
  try {
    const data = await FeildService.getAllFeilds();
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
 export const getAllFeildsByDomain = async (req, res, next) => {
  try {
    const data = await FeildService.getAllFeildsByDomain(req.params.id);
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
 * Controller to get a single feild
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getFeild = async (req, res, next) => {
  try {
    const data = await FeildService.getFeild(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Feild fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new feild
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newFeild = async (req, res, next) => {
  try {
    const data = await FeildService.newFeild(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Feild created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a feild
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateFeild = async (req, res, next) => {
  try {
    const data = await FeildService.updateFeild(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Feild updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a feild
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteFeild = async (req, res, next) => {
  try {
    await FeildService.deleteFeild(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Feild deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to delete a feild
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const RemoveDeviceFromFeild = async (req, res, next) => {
  try {
    await FeildService.RemoveDeviceFromFeild(req.params._id, req.query.deviceId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Feild deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};