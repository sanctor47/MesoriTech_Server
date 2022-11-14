import HttpStatus from 'http-status-codes';
import * as DashboardService from '../services/dashboard.service';

/**
 * Controller to get all dashboards available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllDashboards = async (req, res, next) => {
  try {
    const data = await DashboardService.getAllDashboards();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All dashboards fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single dashboard
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getDashboard = async (req, res, next) => {
  try {
    const data = await DashboardService.getDashboard(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Dashboard fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single dashboard
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getDashboardByFeild = async (req, res, next) => {
  try {
    const data = await DashboardService.getDashboardByFeild(req.params.feild);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Dashboard fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new dashboard
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newDashboard = async (req, res, next) => {
  try {
    const data = await DashboardService.newDashboard(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Dashboard created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a dashboard
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateDashboard = async (req, res, next) => {
  try {
    const data = await DashboardService.updateDashboard(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Dashboard updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a dashboard
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteDashboard = async (req, res, next) => {
  try {
    await DashboardService.deleteDashboard(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Dashboard deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
