import express from 'express';
const router = express.Router();

import dashboardRoute from './dashboard.route';
import soilRoute from './soil.route';
import plantRoute from './plant.route';
import bedRoute from './bed.route';
import feildRoute from './feild.route';
import domainRoute from './domain.route';
import readingRoute from './reading.route';
import sensorRoute from './sensor.route';
import deviceRoute from './device.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });



  router.put('/test', (req, res) => {
    console.log("Body: ", req.body)
    
    res.json('Welcome');
  });

  router.use('/users', userRoute);
  router.use('/devices', deviceRoute);
  router.use('/sensors', sensorRoute);
  router.use('/readings', readingRoute);
  router.use('/domains', domainRoute);
  router.use('/feilds', feildRoute);
  router.use('/beds', bedRoute);
  router.use('/plants', plantRoute);
  router.use('/soils', soilRoute);
  router.use('/dashboard', dashboardRoute);
  return router;
};

export default routes;
