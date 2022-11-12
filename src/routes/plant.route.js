import express from 'express';
import * as plantController from '../controllers/plant.controller';

const router = express.Router();

//route to get all plants
router.get('', plantController.getAllPlants);

//route to create a new plant
router.post('', plantController.newPlant);

//route to get a single plant by their plant id
router.get('/id/:_id', plantController.getPlant);

//route to update a single plant by their plant id
router.put('/id/:_id', plantController.updatePlant);

//route to delete a single plant by their plant id
router.delete('/id/:_id', plantController.deletePlant);

export default router;
