import jobApplicationModel from "../model/jobApplicationModel.js";
import jobModel from "../model/jobModel.js";

// Apply for a job
const applyForJob = async (req, res) => {
    try {
        const { jobId, userId, userName, userResume } = req.body;

        // Check if job exists
        const job = await jobModel.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        // Check if user already applied
        const existingApplication = await jobApplicationModel.findOne({ jobId, userId });
        if (existingApplication) {
            return res.status(400).json({ message: "You have already applied for this job" });
        }

        // Create new application
        const newApplication = new jobApplicationModel({
            jobId,
            userId,
            userName,
            userResume
        });
        await newApplication.save();

        // Optionally, add applicant to job's applicants array
        await jobModel.findByIdAndUpdate(
            jobId,
            { $push: { applicants: userId }, jobUpdatedAt: Date.now() }
        );

        res.status(201).json({ message: "Application submitted successfully", application: newApplication });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get all job applications filtered by author (i.e., jobs posted by this author)
const getJobApplicationsByAuthor = async (req, res) => {
    try {
        const { authorId } = req.query; // authorId is the user id of the job poster

        // Find all jobs by this author
        const jobs = await jobModel.find({ author: authorId });
        const jobIds = jobs.map(job => job._id.toString());

        // Find all applications for these jobs
        const applications = await jobApplicationModel.find({ jobId: { $in: jobIds } });

        res.status(200).json({ applications });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get all job applications by a specific user
const getJobApplicationsByUser = async (req, res) => {
    try {
        const { userId } = req.query; // userId is the id of the user

        // Find all applications by this user
        const applications = await jobApplicationModel.find({ userId });

        res.status(200).json({ applications });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update job application (user can cancel, author can change status)
const updateJobApplication = async (req, res) => {
    try {
        const { applicationId } = req.params;
        const { action, status } = req.body; // action: "cancel" (by user), or "updateStatus" (by author), status: new status

        const application = await jobApplicationModel.findById(applicationId);
        if (!application) {
            return res.status(404).json({ message: "Application not found" });
        }

        if (action === "cancel") {
            // User cancels their application
            application.status = "Cancelled";
            application.updatedAt = Date.now();
            await application.save();

            // Optionally, remove user from job's applicants array
            await jobModel.findByIdAndUpdate(
                application.jobId,
                { $pull: { applicants: application.userId }, jobUpdatedAt: Date.now() }
            );

            return res.status(200).json({ message: "Application cancelled", application });
        } else if (action === "updateStatus" && status) {
            // Author changes the status (e.g., "Accepted", "Rejected", etc.)
            application.status = status;
            application.updatedAt = Date.now();
            await application.save();
            return res.status(200).json({ message: "Application status updated", application });
        } else {
            return res.status(400).json({ message: "Invalid action or missing status" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export {
    applyForJob,
    getJobApplicationsByAuthor,
    getJobApplicationsByUser,
    updateJobApplication
};