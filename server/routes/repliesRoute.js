import express from "express";
import { protectedRoute } from "../../server/controllers/authController.js";
import {
  postReply,
  readReplies,
} from "../../server/controllers/repliesController.js";

const repliesRoutes = express.Router();

//id refers to the experience id(experience shared by the user)
repliesRoutes
  .route("/:id")
  .get(protectedRoute, readReplies)
  .post(protectedRoute, postReply);

export default repliesRoutes;
