import express from "express";
import { addJob, getAllJobs, getJobById, updateJob, deleteJob } from "../controllers/jobController.js";
import {partnerAuth} from "../middleware/auth.js";

const jobRouter = express.Router();
jobRouter.post('/add',partnerAuth,addJob)
jobRouter.get('/all',getAllJobs)
jobRouter.get('/get/:id',getJobById)
jobRouter.put('/update-job/:id',partnerAuth,updateJob)
jobRouter.delete('/delete-job/:id',partnerAuth,deleteJob)

export default jobRouter;

