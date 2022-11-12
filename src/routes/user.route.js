import express from 'express';
import * as userController from '../controllers/user.controller';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('',  userController.newUser);

//route to get a single user by their user id
router.get('/id/:_id',  userController.getUser);

//route to update a single user by their user id
router.put('/id/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/id/:_id', userController.deleteUser);

//route for user signup
router.post('/signup',  userController.signup);

//route for user login
router.post('/login',  userController.login);

export default router;
