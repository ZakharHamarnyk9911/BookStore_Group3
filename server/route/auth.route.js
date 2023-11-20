import express from 'express'
import authCtrl from '../controller/auth.controller.js'
import userCtrl from '../controller/user.controller.js'

const router = express.Router()
router.route('/auth/signin') .post(authCtrl.signin)
router.route('/auth/signout').get(authCtrl.signout)
router.route('/auth/signup').post(userCtrl.create); 
export default router