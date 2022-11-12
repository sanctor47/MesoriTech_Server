import express from 'express';
import * as readingController from '../controllers/reading.controller';

const router = express.Router();

//route to get all readings
router.get('', readingController.getAllReadings);

//route to create a new reading
router.post('', readingController.newReading);

//route to get a single reading by their reading id
router.get('/id/:_id', readingController.getReading);
router.get('/linechart/:_id', readingController.getLineChartData);

//route to update a single reading by their reading id
router.put('/id/:_id', readingController.updateReading);

//route to delete a single reading by their reading id
router.delete('/id/:_id', readingController.deleteReading);



router.get('/testparams/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const q = req.query;
        console.log('id: ', id)
        console.log('q: ', q)
        res.status(200).send({data:"Okay"})
    } catch (error) {
        throw error
    }
})

export default router;
