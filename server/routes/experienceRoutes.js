import express from "express";
import { protectedRoute } from "../../server/controllers/authController.js";
import {
  postExperience,
  likePost,
  deletePost,
  readExperience,
} from "../../server/controllers/experienceController.js";

const experienceRoutes = express.Router();

experienceRoutes
  .route("/")
  .get(protectedRoute, readExperience)
  .post(protectedRoute, postExperience);
experienceRoutes.route("/:id").delete(protectedRoute, deletePost);
experienceRoutes.route("/likepost/:id").post(protectedRoute, likePost);

export default experienceRoutes;
