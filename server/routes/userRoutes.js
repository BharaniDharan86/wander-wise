import express from "express";

import {
  signUp,
  verifyEmail,
  login,
  protectedRoute,
} from "../../server/controllers/authController.js";
import { getCurrentUser } from "../../server/controllers/userController.js";

const userRoutes = express.Router();
userRoutes.route("/").get(protectedRoute, getCurrentUser);
userRoutes.route("/signup").post(signUp);
userRoutes.route("/verifyemail").post(verifyEmail);
userRoutes.route("/login").post(login);

export default userRoutes;
