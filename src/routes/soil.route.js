import express from 'express';
import * as soilController from '../controllers/soil.controller';

const router = express.Router();

//route to get all soils
router.get('', soilController.getAllSoils);

//route to create a new soil
router.post('', soilController.newSoil);

//route to get a single soil by their soil id
router.get('/:_id', soilController.getSoil);

//route to update a single soil by their soil id
router.put('/:_id', soilController.updateSoil);

//route to delete a single soil by their soil id
router.delete('/:_id', soilController.deleteSoil);

export default router;
