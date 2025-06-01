import userModel from "../model/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// create token
const createToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET);
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
               const token = createToken(user._id)
               res.json({
                    success: true,
                    token
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
          res.json({ success: true, token });
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
          const {
               name,
               phone,
               address,
               country,
               state,
               district
          } = req.body;

          // Find user by id
          const user = await userModel.findById(id);
          if (!user) {
               return res.status(404).json({ success: false, message: "User not found." });
          }

          // Update fields if provided
          if (name) user.name = name;
          if (phone) user.phone = phone;
          if (address) user.address = address;
          if (country) user.country = country;
          if (state) user.state = state;
          if (district) user.district = district;

          await user.save();

          res.json({ success: true, message: "User information updated successfully.", user });
     } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: error.message });
     }
};

// Add or update user resume
const updateUserResume = async (req, res) => {
     try {
          const { id } = req.params;
          const { formData } = req.body;

          // Find user by id
          const user = await userModel.findById(id);
          if (!user) {
               return res.status(404).json({ success: false, message: "User not found." });
          }

          // Update resume
          user.resume = formData;
          await user.save();

          res.json({ success: true, message: "Resume updated successfully.", resume: user.resume });
     } catch (error) {
          console.log(error);
          res.status(500).json({ success: false, message: error.message });
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

export { updateUserInfo, updateUserResume,userLogin, userRegister, getUser };


