import express from 'express'
import { userLogin, userRegister, updateUserInfo, updateUserResume, getUser } from '../controllers/userController.js'

const userRouter = express.Router();
userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.put('/update-info/:id', updateUserInfo)
userRouter.put('/update-resume/:id', updateUserResume)
userRouter.get('/get-user/:id', getUser)

export default userRouter;