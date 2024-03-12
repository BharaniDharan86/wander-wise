import express from "express";
import userRoutes from "../server/routes/userRoutes.js";
import morgan from "morgan";
import AppError from "../server/utils/appError.js";
import globalErrHandler from "../server/controllers/errorController.js";
import experienceRoutes from "../server/routes/experienceRoutes.js";
import repliesRoutes from "../server/routes/repliesRoute.js";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/experience", experienceRoutes);
app.use("/api/v1/replies", repliesRoutes);

//unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find the ${req.url}`, 404));
});

//global error handling
app.use(globalErrHandler);

export default app;
