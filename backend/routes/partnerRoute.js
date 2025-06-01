import express from 'express'
import { partnerLogin, partnerRegister, } from '../controllers/partnerController.js'

const partnerRouter = express.Router();
partnerRouter.post('/register', partnerRegister)
partnerRouter.post('/login', partnerLogin)


export default partnerRouter;