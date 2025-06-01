import jobModel from "../model/jobModel.js";
import jwt from "jsonwebtoken";
// Add a new job
const addJob = async (req, res) => {
    try {
          const {token} = req.headers;
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const author = decoded.id;
        const {
            companyName,
            jobTitle,
            jobDescription,
            jobLocation,
            jobType,
            jobSalary,
            jobCategory,
            jobTags
        } = req.body;

        if (
            !companyName ||
            !jobTitle ||
            !jobDescription ||
            !jobLocation ||
            !jobType ||
            !jobSalary ||
            !jobCategory ||
            !jobTags 
        ) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }
        const tags=jobTags.split(" ")
        const newJob = new jobModel({
            companyName,
            jobTitle,
            jobDescription,
            jobLocation,
            jobType,
            jobSalary,
            jobCategory,
            jobTags:tags,
            author
        });

        const savedJob = await newJob.save();
        res.status(201).json({ success: true, job: savedJob });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobModel.find().sort({ jobCreatedAt: -1 });
        res.status(200).json({ success: true, jobs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single job by ID
const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await jobModel.findById(id);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found." });
        }
        res.status(200).json({ success: true, job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a job by ID
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body, jobUpdatedAt: Date.now() };
        const updatedJob = await jobModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ success: false, message: "Job not found." });
        }
        res.status(200).json({ success: true, job: updatedJob });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a job by ID
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedJob = await jobModel.findByIdAndDelete(id);
        if (!deletedJob) {
            return res.status(404).json({ success: false, message: "Job not found." });
        }
        res.status(200).json({ success: true, message: "Job deleted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addJob, getAllJobs, getJobById, updateJob, deleteJob };

