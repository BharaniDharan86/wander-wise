import express from "express";
import userRoutes from "../server/routes/userRoutes.js";
import morgan from "morgan";
import AppError from "../server/utils/appError.js";
import globalErrHandler from "../server/controllers/errorController.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);

//unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find the ${req.url}`, 404));
});

//global error handling
app.use(globalErrHandler);

export default app;
