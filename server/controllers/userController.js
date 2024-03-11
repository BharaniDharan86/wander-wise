import User from "../../server/models/userModel.js";
import Otp from "../../server/models/otpModel.js";
import generateOtp from "../../server/utils/generateOtp.js";
import { sendEmail } from "../../server/utils/email.js";
import catchAsyncErr from "../utils/catchAsyncErr.js";
import AppError from "../utils/appError.js";


/**
 * TODO
 * 1.HASH USER PASSWORD
 * 2.SENT THE JWT TOKEN
 * 3.IMPLEMENT LOGIN
 */


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

  return res.status(201).json({
    status: "success",
    success: true,
    message: "Signed in Successfully",
  });
});

export const login = () => {};
