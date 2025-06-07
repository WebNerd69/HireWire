import partnerModel from "../model/partnerModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const partnerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find partner by email
        const partner = await partnerModel.findOne({ email });
        if (!partner) {
            return res.json({ success: false, message: "Invalid credentials." });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, partner.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials." });
        }
        const userType = "partner"
        // Create JWT token
        const payload = {
            id: partner._id,
            email: partner.email,
            role: "partner"
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({ success: true, token , partner , userType });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};


// user registration route
const partnerRegister = async (req, res) => {
    try {
        const { name, email, password, companyName } = req.body;

        // Check if email already exists
        const exists = await partnerModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "This email is already linked with another account." });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email." });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please use a strong password." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create partner
        const partner = new partnerModel({
            name,
            email,
            password: hashedPassword,
            companyName
        });
        await partner.save();
        const userType = "partner"
        // Create JWT token
        const payload = {
            id: partner._id,
            email: partner.email,
            role: "partner"
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({ success: true, token , partner , userType});
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};

// get partner details
const getPartnerById = async (req, res) => {
    try {
        const { id } = req.params;

        const partner = await partnerModel.findById(id).select("-password"); // exclude password

        if (!partner) {
            return res.status(404).json({ success: false, message: "Partner not found" });
        }

        res.json({ success: true, partner });
    } catch (error) {
        console.error("Error fetching partner:", error.message);
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};

export { partnerLogin, partnerRegister, getPartnerById};