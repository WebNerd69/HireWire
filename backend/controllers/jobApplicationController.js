import jobApplicationModel from "../model/jobApplicationModel.js";
import jobModel from "../model/jobModel.js";

// Apply for a job
const applyForJob = async (req, res) => {
    try {
        const { id } = req.params
        const { userId, userName, userResume } = req.body;

        // Check if job exists
        const job = await jobModel.findById(id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        // Check if user already applied
        const existingApplication = await jobApplicationModel.findOne({ jobId: id, userId });
        if (existingApplication) {
            return res.status(400).json({ message: "You have already applied for this job" });
        }

        // Create new application
        const newApplication = new jobApplicationModel({
            jobId: id,
            userId,
            userName,
            userResume
        });
        await newApplication.save();

        // Optionally, add applicant to job's applicants array
        await jobModel.findByIdAndUpdate(
            id,
            { $push: { applicants: userId }, jobUpdatedAt: Date.now() }
        );

        res.status(201).json({ success: true, message: "Application submitted successfully", application: newApplication });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Get all job applications filtered by author (i.e., jobs posted by this author)
const getJobApplicationsByAuthor = async (req, res) => {
    try {
        const { authorId } = req.params; // authorId is the user id of the job poster

        // Find all jobs by this author
        const jobs = await jobModel.find({ author: authorId });
        const jobIds = jobs.map(job => job._id.toString());

        // Find all applications for these jobs
        const applications = await jobApplicationModel.find({ jobId: { $in: jobIds } });

        res.status(200).json({ applications, success: true });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message, success: false });
    }
};

// Get all job applications by a specific user
const getJobApplicationsByUser = async (req, res) => {
    try {
        const { userId } = req.params; // userId is the id of the user

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
        const { action, status } = req.body;

        // Validate application existence
        const application = await jobApplicationModel.findById(applicationId);
        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found" });
        }

        // Handle cancel by user
        if (action === "cancel") {
            application.status = "Cancelled";
            application.updatedAt = new Date();
            await application.save();

            // Remove applicant from job's applicants list
            await jobModel.findByIdAndUpdate(application.jobId, {
                $pull: { applicants: application.userId },
                jobUpdatedAt: new Date()
            });

            return res.status(200).json({ success: true, message: "Application cancelled", application });
        }

        // Handle update status by author
        if (action === "updateStatus") {
            if (!status) {
                return res.status(400).json({ success: false, message: "Missing status for update" });
            }

            application.status = status;
            application.updatedAt = new Date();
            await application.save();

            return res.status(200).json({ success: true, message: "Application status updated", application });
        }

        return res.status(400).json({ success: false, message: "Invalid action or parameters" });

    } catch (error) {
        console.error("Update Application Error:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

export {
    applyForJob,
    getJobApplicationsByAuthor,
    getJobApplicationsByUser,
    updateJobApplication
};