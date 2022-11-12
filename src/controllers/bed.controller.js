import HttpStatus from 'http-status-codes';
import * as BedService from '../services/bed.service';

/**
 * Controller to get all beds available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBeds = async (req, res, next) => {
  try {
    const data = await BedService.getAllBeds();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All beds fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single bed
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBed = async (req, res, next) => {
  try {
    const data = await BedService.getBed(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Bed fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new bed
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newBed = async (req, res, next) => {
  try {
    const data = await BedService.newBed(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Bed created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a bed
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateBed = async (req, res, next) => {
  try {
    const data = await BedService.updateBed(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Bed updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a bed
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteBed = async (req, res, next) => {
  try {
    await BedService.deleteBed(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Bed deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
