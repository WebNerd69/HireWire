import express from "express";
import { addJob, getAllJobs, getJobById, updateJob, deleteJob } from "../controllers/jobController.js";
import {partnerAuth} from "../middleware/auth.js";

const jobRouter = express.Router();
jobRouter.post('/add',partnerAuth,addJob)
jobRouter.get('/all',getAllJobs)
jobRouter.get('/:id',getJobById)
jobRouter.put('/:id',partnerAuth,updateJob)
jobRouter.delete('/:id',partnerAuth,deleteJob)

export default jobRouter;

