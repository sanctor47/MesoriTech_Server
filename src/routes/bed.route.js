import express from 'express';
import * as bedController from '../controllers/bed.controller';

const router = express.Router();

//route to get all beds
router.get('', bedController.getAllBeds);

//route to create a new bed
router.post('',  bedController.newBed);

//route to get a single bed by their bed id
router.get('/:_id',  bedController.getBed);

//route to update a single bed by their bed id
router.put('/:_id', bedController.updateBed);

//route to delete a single bed by their bed id
router.delete('/:_id', bedController.deleteBed);

export default router;
