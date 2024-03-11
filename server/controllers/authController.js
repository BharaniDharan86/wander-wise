import User from "../models/userModel.js";
import Otp from "../models/otpModel.js";
import generateOtp from "../utils/generateOtp.js";
import { sendEmail } from "../utils/email.js";
import catchAsyncErr from "../utils/catchAsyncErr.js";
import AppError from "../utils/appError.js";
import { promisify } from "util";
import jwt from "jsonwebtoken";
import sentJwtToken from "../../server/utils/generateJwt.js";

export const protectedRoute = catchAsyncErr(async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return next(new AppError("You're Not Logged In Please Login To Access"));
  }

  const jwt_token = req.headers.split(" ")[1];
  const decoded = await promisify(jwt.verify)(jwt_token, process.env.JWTSECRET);

  if (!decoded) {
    return next(new AppError("Invalid Token Please Sign in Again", 404));
  }

  const currUser = await User.findById(decoded.id);

  if (!currUser)
    return next(new AppError("You're not valid user, Please login again", 403));

  req.user = currUser;

  next();
});

export const signUp = catchAsyncErr(async (req, res, next) => {
  const { email, password, username } = req.body;

  const isUserExists = await User.findOne({ email });

  if (isUserExists)
    return next(new AppError("User with email id already exists"));

  const otp = generateOtp();

  const isEmailSent = await sendEmail({
    to: email,
    subject: "User Registration Verification",
    message: otp,
  });

  const newUser = await Otp.create({
    email,
    password,
    username,
    otp,
  });

  return res.status(200).json({
    status: "success",
    success: true,
    message: "Please Check Your Email",
  });
});

export const verifyEmail = catchAsyncErr(async (req, res, next) => {
  const { otp } = req.body;
  const { email, password, username, otp: otpDB } = await Otp.findOne({ otp });

  if (!otpDB)
    return next(new AppError("Not Valid Otp Please Register Again", 404));

  const newUser = await User.create({
    email,
    password,
    username,
  });

  if (!newUser)
    return next(new AppError("There Was Problem Creating User Account", 400));

  const token = sentJwtToken(newUser._id);

  return res.status(201).json({
    status: "success",
    success: true,
    message: "Signed in Successfully",
    token,
  });
});

export const login = catchAsyncErr(async (req, res, next) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ email });

  if (!currUser)
    return next(new AppError("User Not FOund With the Provided Email", 401));

  const isValidPass = await currUser.comparePassword(
    password,
    currUser.password
  );

  if (!isValidPass) return next(new AppError("Invalid Password or Email", 404));

  const token = sentJwtToken(currUser._id);

  return res.status(200).json({
    token,
  });
});
