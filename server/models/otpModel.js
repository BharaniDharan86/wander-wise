import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  otp: {
    type: Number,
  },
  username: String,
  email: {
    type: "String",
    unique: true,
  },
  password: String,
});

const Otp = mongoose.model("Otp", otpSchema);

export default Otp;
