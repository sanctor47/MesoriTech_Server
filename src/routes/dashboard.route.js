import express from 'express';
import * as dashboardController from '../controllers/dashboard.controller';


const router = express.Router();

//route to get all dashboards
router.get('', dashboardController.getAllDashboards);

//route to create a new dashboard
router.post('', dashboardController.newDashboard);

//route to get a single dashboard by feild Id
router.get('/feild/:_id', dashboardController.getDashboard);

//route to get a single dashboard by their dashboard id
router.get('/id/:_id', dashboardController.getDashboardByFeild);

//route to update a single dashboard by their dashboard id
router.put('/id/:_id', dashboardController.updateDashboard);

//route to delete a single dashboard by their dashboard id
router.delete('/id/:_id', dashboardController.deleteDashboard);

export default router;
