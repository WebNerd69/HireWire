import express from "express";
import {
  applyForJob,
  getJobApplicationsByAuthor,
  getJobApplicationsByUser,
  updateJobApplication
} from "../controllers/jobApplicationController.js";

const jobApplicationRouter = express.Router();

// Apply for a job
jobApplicationRouter.post("/apply/:id", applyForJob);

// Get all job applications for jobs posted by a specific author
jobApplicationRouter.get("/by-author/:partnerId", getJobApplicationsByAuthor);

// Get all job applications by a specific user
jobApplicationRouter.get("/by-user/:userId", getJobApplicationsByUser);

// Update a job application (cancel or update status)
jobApplicationRouter.patch("/:applicationId", updateJobApplication);

export default jobApplicationRouter;
