import express from 'express';
import userCtrl from '../controller/user.controller.js'
import authCtrl from '../controller/auth.controller.js';

const router = express.Router();

// User Routes
router.route('/users')
  .post(userCtrl.create) 
  .get(userCtrl.list);   
router.route('/users/:userId')
  .get(userCtrl.read)         
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update) // Update a user
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove); // Delete a user

  router.param('userId', userCtrl.userByID)
  router.route('/api/users/:userId').put(userCtrl.update)
  router.route('/api/users/:userId').delete(userCtrl.remove)

export default router;
