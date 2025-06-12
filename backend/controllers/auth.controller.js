import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//test controller
export const test = (req, res) => {
  return res.send("Hello From Test!");
};

//signup controller
export const signupController = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;

    if (!username || !email || !password || !address || !phone) {
      return res.status(200).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(200).send({
        success: false,
        message: "User already exists please login",
      });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    await newUser.save();

    return res.status(201).send({
      message: "User Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error is server!",
    });
  }
};

//login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "All fields are required!",
      });
    }

    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).send({
        success: false,
        message: "User not found!",
      });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(200).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = await jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "4d",
      }
    );
    const { password: pass, ...rest } = validUser._doc; //deselcting password to send user(this will send all data accept password)
    res.cookie("X_TTMS_access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
      sameSite: "None", // Modified to 'None' for cross-origin requests
      maxAge: 4 * 24 * 60 * 60 * 1000, // 4 days expiration time
    })
      .status(200) //correctly chained
      .send({
        success: true,
        message: "Login Success",
        user: rest,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logOutController = (req, res) => {
  try {
    res.clearCookie("X_TTMS_access_token");
    res.status(200).send({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Forgot password 

// Utility to generate a random 8-character alphanumeric code
const generateRandomPassword = (length = 8) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found!",
      });
    }

    const newPassword = generateRandomPassword(8);
    const hashedPassword = bcryptjs.hashSync(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).send({
      success: true,
      message: "New password generated and sent successfully.",
      code: newPassword, // In real apps, you’d send this via email instead
    });
  } catch (error) {
    console.log("Forgot Password Error:", error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong!",
    });
  }
};
