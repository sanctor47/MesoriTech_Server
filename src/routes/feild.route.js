import express from 'express';
import * as feildController from '../controllers/feild.controller';

const router = express.Router();

//route to get all feilds
router.get('', feildController.getAllFeilds);

//route to get all feilds by Domain
router.get('/domain/:id', feildController.getAllFeildsByDomain);

router.put('/rmDevice/:_id', feildController.RemoveDeviceFromFeild);
//route to create a new feild
router.post('', feildController.newFeild);

//route to get a single feild by their feild id
router.get('/id/:_id', feildController.getFeild);

//route to update a single feild by their feild id
router.put('/id/:_id', feildController.updateFeild);
//

//route to delete a single feild by their feild id
router.delete('/id/:_id', feildController.deleteFeild);

export default router;
