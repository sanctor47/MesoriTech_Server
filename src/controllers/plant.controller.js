import HttpStatus from 'http-status-codes';
import * as PlantService from '../services/plant.service';

/**
 * Controller to get all plants available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllPlants = async (req, res, next) => {
  try {
    const data = await PlantService.getAllPlants();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All plants fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getPlant = async (req, res, next) => {
  try {
    const data = await PlantService.getPlant(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Plant fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newPlant = async (req, res, next) => {
  try {
    const data = await PlantService.newPlant(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Plant created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updatePlant = async (req, res, next) => {
  try {
    const data = await PlantService.updatePlant(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Plant updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a plant
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deletePlant = async (req, res, next) => {
  try {
    await PlantService.deletePlant(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Plant deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
