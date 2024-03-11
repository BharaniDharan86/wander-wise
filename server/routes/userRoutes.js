import express from "express";

import {
  signUp,
  verifyEmail,
  login,
} from "../../server/controllers/authController.js";

const userRoutes = express.Router();

userRoutes.route("/signup").post(signUp);
userRoutes.route("/verifyemail").post(verifyEmail);
userRoutes.route("/login").post(login);

export default userRoutes;
