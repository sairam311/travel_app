import express from "express";
import {
  logOutController,
  loginController,
  signupController,
  test,
  forgotPassword
} from "../controllers/auth.controller.js";

const router = express.Router();

//test route
router.get("/test", test);

//signup route
router.post("/signup", signupController);

//login route
router.post("/login", loginController);

//logout route
router.get("/logout", logOutController);

//forgot password
router.post("/forgot-password", forgotPassword);

export default router;
