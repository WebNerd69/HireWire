import userModel from "../model/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mongoose from "mongoose"

// create token
const createToken = (payload) => {
     return jwt.sign({ payload }, process.env.JWT_SECRET);
};

// user login route
const userLogin = async (req, res) => {
     try {
          const { email, password } = req.body;
          const user = await userModel.findOne({ email })
          if (!user) {
               return (res.json({
                    success: false,
                    message: "User does not exist"
               }))

          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
               const { password, ...userData } = user.toObject()
               const token = createToken(user._id)
               res.json({
                    success: true,
                    token,
                    type: "user",
                    userData
               })
          } else {
               res.json({ success: false, message: "Incorrect credentials" })
          }
     } catch (error) {
          console.log(error);
          res.json({
               success: false,
               message: error.message
          });
     }
};

// user registration route
const userRegister = async (req, res) => {
     try {
          const { name, email, password } = req.body;

          // checking if email already exists
          const exists = await userModel.findOne({ email });
          if (exists) {
               return res.json({ message: "This email is already linked with another account.", success: false });
          }

          // validating email and password
          if (!validator.isEmail(email)) {
               return res.json({ message: "Please enter a valid email.", success: false });
          }
          if (password.length < 8) {
               return res.json({ message: "Please use a strong password.", success: false });
          }

          // hashing user
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          // creating user
          const newUser = new userModel({
               name,
               email,
               password: hashedPassword
          });
          const user = await newUser.save();
          const token = createToken(user._id);
          const userData = (()=>{
               const {password , ...userData} = user.toObject();
               return userData
          })()
          res.json(
               {
                    success: true,
                    type: "user",
                    token,
                    userData
               });
     } catch (error) {
          console.log(error);
          res.json({
               success: false,
               message: error.message
          });
     }
};

// Update user personal information
const updateUserInfo = async (req, res) => {
     try {
       const { id } = req.params;
       const formData = req.body;
   
       if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(400).json({ success: false, message: "Invalid user ID format." });
       }
   
       console.log("Received form data:", formData);
   
       const updatedUser = await userModel.findByIdAndUpdate(
         id,
         { $set: formData }, // ensure fields are directly overwritten
         { new: true, runValidators: true }
       );
   
       if (!updatedUser) {
         return res.status(404).json({ success: false, message: "User not found." });
       }
   
       console.log("Updated user:", updatedUser);
   
       return res.status(200).json({
         success: true,
         message: "User updated successfully.",
         user: updatedUser
       });
     } catch (error) {
       console.error("Update failed:", error);
       return res.status(500).json({ success: false, message: error.message });
     }
   };

// Add or update user resume
const updateUserResume = async (req, res) => {
     try {
       const { id } = req.params;
       const { formData } = req.body;
   
       // Validate user ID format
       if (!id || !mongoose.Types.ObjectId.isValid(id)) {
         return res.status(400).json({ success: false, message: "Invalid user ID." });
       }
   
       // Validate formData
       if (!formData || typeof formData !== "object") {
         return res.status(400).json({ success: false, message: "Invalid resume data." });
       }
   
       // Update resume using findByIdAndUpdate
       const updatedUser = await userModel.findByIdAndUpdate(
         id,
         { resume: formData },
         { new: true, runValidators: true }
       );
   
       if (!updatedUser) {
         return res.status(404).json({ success: false, message: "User not found." });
       }
   
       res.status(200).json({
         success: true,
         message: "Resume updated successfully.",
         resume: updatedUser.resume,
       });
     } catch (error) {
       console.error("Error updating resume:", error);
       res.status(500).json({ success: false, message: "Server error. Please try again later." });
     }
   };
const getUser = async (req, res) => {
     try {
          const { id } = req.params;

          // Find user by id
          const user = await userModel.findById(id);
          if (!user) {
               return res.status(404).json({ success: false, message: "User not found." });
          }

          res.json({ success: true, user });
     } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: error.message });
     }
};

export { updateUserInfo, updateUserResume, userLogin, userRegister, getUser };


