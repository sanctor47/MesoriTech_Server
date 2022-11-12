import HttpStatus from 'http-status-codes';
import * as SoilService from '../services/soil.service';

/**
 * Controller to get all soils available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllSoils = async (req, res, next) => {
  try {
    const data = await SoilService.getAllSoils();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All soils fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getSoil = async (req, res, next) => {
  try {
    const data = await SoilService.getSoil(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Soil fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newSoil = async (req, res, next) => {
  try {
    const data = await SoilService.newSoil(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Soil created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateSoil = async (req, res, next) => {
  try {
    const data = await SoilService.updateSoil(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Soil updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a soil
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteSoil = async (req, res, next) => {
  try {
    await SoilService.deleteSoil(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Soil deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
