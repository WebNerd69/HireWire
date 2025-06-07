import express from 'express'
import { partnerLogin, partnerRegister, getPartnerById} from '../controllers/partnerController.js'

const partnerRouter = express.Router();
partnerRouter.post('/register', partnerRegister)
partnerRouter.post('/login', partnerLogin)
partnerRouter.get('/get-partner/:id',getPartnerById)


export default partnerRouter;