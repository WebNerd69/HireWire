import jwt from "jsonwebtoken";

// Middleware to authenticate partners
const partnerAuth = (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided." });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "partner") {
            return res.status(403).json({ success: false, message: "Access denied. Not a partner." });
        }
        req.partner = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};

// Middleware to authenticate users
const userAuth = (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided." });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "user") {
            return res.status(403).json({ success: false, message: "Access denied. Not a user." });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};


export { userAuth , partnerAuth };
